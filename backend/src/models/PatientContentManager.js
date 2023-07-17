const AbstractManager = require("./AbstractManager");

class PatientContentManager extends AbstractManager {
  constructor() {
    super({ table: "patient_content" });
  }

  insert(patientContent) {
    return this.database.query(
      `insert into ${this.table} (mutual_file, consent_file, administrative_sheet_file, patient_id, intervention_id) values (?, ?, ?, ?, ?)`,
      [
        patientContent.mutual_file,
        patientContent.consent_file,
        patientContent.administrative_sheet_file,
        patientContent.patient_id,
        patientContent.intervention_id,
      ]
    );
  }

  update(patientContent) {
    return this.database.query(
      `update ${this.table} set mutual_file = ?, consent_file = ?, administrative_sheet_file = ?  where id = ?`,
      [
        patientContent.mutual_file,
        patientContent.consent_file,
        patientContent.administrative_sheet_file,
        patientContent.id,
      ]
    );
  }
}

module.exports = PatientContentManager;
