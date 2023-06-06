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
}

module.exports = PodcastManager;
