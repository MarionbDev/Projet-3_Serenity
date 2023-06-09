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

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE mail=?`, [
      mail,
    ]);
  }

  findAllPraticien() {
    return this.database.query(`
  SELECT d.firstname, d.lastname, COUNT(i.id) AS intervention_count, COUNT(DISTINCT i.patient_id) AS patient_count
  -> FROM ${this.table}
  -> JOIN surgery_type st ON d.id = st.doctor_id
  -> JOIN intervention i ON st.intervention_id = i.id
  -> GROUP BY d.id;
  `);
  }
}

module.exports = DoctorManager;
