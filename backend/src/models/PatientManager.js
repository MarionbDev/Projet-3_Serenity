const AbstractManager = require("./AbstractManager");

class PatientManager extends AbstractManager {
  constructor() {
    super({ table: "patient" });
  }

  insert(patient) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, mail, password) values (?, ?, ?, ?)`,
      [patient.firstname, patient.lastname, patient.mail, patient.password]
    );
  }

  update(patient) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, password = ? = ? where id = ?`,
      [
        patient.firstname,
        patient.lastname,
        patient.mail,
        patient.password,
        patient.id,
      ]
    );
  }
}

module.exports = PatientManager;
