const AbstractManager = require("./AbstractManager");

class PodcastManager extends AbstractManager {
  constructor() {
    super({ table: "surgery_Type" });
  }

  insert(surgeryType) {
    return this.database.query(
      `insert into ${this.table} (name, doctor_id, intervention_id) values (?, ?,?)`,
      [surgeryType.name, surgeryType.doctor_id, surgeryType.intervention_id]
    );
  }

  update(surgeryType) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [surgeryType.name, surgeryType.id]
    );
  }

  findAllInterventions(idDoctor) {
    return this.database.query(
      `SELECT surgery_type.id, surgery_type.name, intervention.id AS interventionId, intervention.time, patient.id AS patientId, patient.lastname, patient.firstname FROM ${this.table} JOIN doctor ON doctor.id = doctor_id JOIN intervention ON intervention.id = intervention_id JOIN patient ON patient.id=patient_id WHERE doctor.id=? ORDER BY surgery_type.name, time`,
      [idDoctor]
    );
  }
}

module.exports = PodcastManager;
