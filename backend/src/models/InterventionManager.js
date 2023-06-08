const AbstractManager = require("./AbstractManager");

class InterventionManager extends AbstractManager {
  constructor() {
    super({ table: "intervention" });
  }

  insert(intervention) {
    return this.database.query(
      `insert into ${this.table} (time, ) values (?)`,
      [intervention.time]
    );
  }

  update(intervention) {
    return this.database.query(
      `update ${this.table} set time = ? = ? where id = ?`,
      [intervention.time, intervention.id]
    );
  }

  interventionInfo(idPatient) {
    return this.database.query(
      `SELECT d.lastname, s.name, p.firstname, p.image, i.time FROM ${this.table} AS i JOIN patient AS p ON p.id=i.patient_id JOIN surgery_type AS s ON s.intervention_id=i.id JOIN doctor AS d ON d.id=s.doctor_id WHERE p.id= ?`,
      [idPatient]
    );
  }
}

module.exports = InterventionManager;
