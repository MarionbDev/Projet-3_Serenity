const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/files/"));
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "mutual_file") {
      cb(null, `${Date.now()}-mutual-${file.originalname}`);
    } else if (file.fieldname === "consent_file") {
      cb(null, `${Date.now()}-consent-${file.originalname}`);
    } else if (file.fieldname === "administrative_sheet_file") {
      cb(null, `${Date.now()}-administrative-${file.originalname}`);
    }
  },
});

const upload = multer({ storage });

const uploadFiles = (req, res, next) => {
  upload.fields([
    { name: "mutual_file", maxCount: 1 },
    { name: "consent_file", maxCount: 1 },
    { name: "administrative_sheet_file", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      req.body.mutual_file = req.files.mutual_file[0].filename;
      req.body.consent_file = req.files.consent_file[0].filename;
      req.body.administrative_sheet_file =
        req.files.administrative_sheet_file[0].filename;

      next();
    }
  });
};

module.exports = {
  uploadFiles,
};
