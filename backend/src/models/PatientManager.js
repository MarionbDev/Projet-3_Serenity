const AbstractManager = require("./AbstractManager");

class PatientManager extends AbstractManager {
  constructor() {
    super({ table: "patient" });
  }

  insert(patient) {
    return this.database.query(
      `insert into ${this.table} ( lastname, firstname, maiden_name, image, birthday, sexe, title, family_situation, professionnal_situation, occupation, number_of_children, road, country, zip_code, city, tel_fixe, tel_portable, mail, hashedPassword) values (?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?)`,
      [
        patient.lastname,
        patient.firstname,
        patient.maiden_name,
        patient.image,
        patient.birthday,
        patient.sexe,
        patient.title,
        patient.family_situation,
        patient.professionnal_situation,
        patient.occupation,
        patient.number_of_children,
        patient.road,
        patient.country,
        patient.zip_code,
        patient.city,
        patient.tel_fixe,
        patient.tel_portable,
        patient.mail,
        patient.hashedPassword,
      ]
    );
  }

  update(patient) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      patient,
      patient.id,
    ]);
  }

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE mail=?`, [
      mail,
    ]);
  }
}

module.exports = PatientManager;
