const AbstractManager = require("./AbstractManager");

class ChecklistManager extends AbstractManager {
  constructor() {
    super({ table: "checklist" });
  }

  insert(checklist) {
    return this.database.query(
      `insert into ${this.table} (title, ) values (?)`,
      [checklist.title]
    );
  }

  update(checklist) {
    return this.database.query(
      `update ${this.table} set title = ?  where id = ?`,
      [checklist.title, checklist.id]
    );
  }
}

module.exports = ChecklistManager;
