const AbstractManager = require("./AbstractManager");

class PatientManager extends AbstractManager {
  constructor() {
    super({ table: "patient" });
  }

  insert(patient) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, mail, hashedPassword) values (?, ?, ?, ?)`,
      [
        patient.firstname,
        patient.lastname,
        patient.mail,
        patient.hashedPassword,
      ]
    );
  }

  update(patient) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, hashedPassword = ? = ? where id = ?`,
      [
        patient.firstname,
        patient.lastname,
        patient.mail,
        patient.hashedPassword,
        patient.id,
      ]
    );
  }

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE mail=?`, [
      mail,
    ]);
  }
}

module.exports = PatientManager;
