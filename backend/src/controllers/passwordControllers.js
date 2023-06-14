const argon2 = require("@node-rs/argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res.sendStatus(400);
  } else {
    argon2
      .hash(password, hashingOptions)
      .then((hashedPassword) => {
        req.body.hashedPassword = hashedPassword;
        delete req.body.password;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const verifyPassword = (req, res) => {
  argon2
    .verify(
      req.doctor ? req.doctor.hashedPassword : req.patient.hashedPassword,
      req.body.password
    )
    .then((isVerified) => {
      if (isVerified) {
        const data = req.doctor ? req.doctor : req.patient;
        delete data.hashedPassword;
        res.json(data);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  hashPassword,
  verifyPassword,
};
