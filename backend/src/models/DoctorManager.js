const AbstractManager = require("./AbstractManager");

class DoctorManager extends AbstractManager {
  constructor() {
    super({ table: "doctor" });
  }

  insert(doctor) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, tel, mail, hashedPassword, role) values (?, ?, ?, ?, ?, ?)`,
      [
        doctor.firstname,
        doctor.lastname,
        doctor.tel,
        doctor.mail,
        doctor.hashedPassword,
        doctor.role,
      ]
    );
  }

  update(doctor) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, tel = ?, mail = ?, hashedPassword = ?, role = ? = ? where id = ?`,
      [
        doctor.firstname,
        doctor.lastname,
        doctor.tel,
        doctor.mail,
        doctor.hashedPassword,
        doctor.role,
        doctor.id,
      ]
    );
  }

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE mail=?`, [
      mail,
    ]);
  }
}

module.exports = DoctorManager;
