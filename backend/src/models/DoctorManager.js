const AbstractManager = require("./AbstractManager");

class DoctorManager extends AbstractManager {
  constructor() {
    super({ table: "doctor" });
  }

  insert(doctor) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, tel, mail, password, role) values (?, ?, ?, ?, ?, ?)`,
      [
        doctor.firstname,
        doctor.lastname,
        doctor.tel,
        doctor.mail,
        doctor.password,
        doctor.role,
      ]
    );
  }

  update(doctor) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, tel = ?, mail = ?, password = ?, role = ? = ? where id = ?`,
      [
        doctor.firstname,
        doctor.lastname,
        doctor.tel,
        doctor.mail,
        doctor.password,
        doctor.role,
        doctor.id,
      ]
    );
  }
}

module.exports = DoctorManager;
