const AbstractManager = require("./AbstractManager");

class PodcastManager extends AbstractManager {
  constructor() {
    super({ table: "surgery_Type" });
  }

  insert(surgeryType) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      surgeryType.name,
    ]);
  }

  update(surgeryType) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [surgeryType.name, surgeryType.id]
    );
  }

  findAllInterventions(idDoctor) {
    return this.database.query(
      `SELECT surgery_type.name, count(intervention.id) AS intervention_count FROM ${this.table} JOIN doctor ON doctor.id = doctor_id JOIN intervention ON intervention.id = intervention_id WHERE doctor.id = ? GROUP BY surgery_type.id`,
      [idDoctor]
    );
  }
}

module.exports = PodcastManager;
