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
}

module.exports = InterventionManager;
