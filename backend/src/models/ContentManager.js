const AbstractManager = require("./AbstractManager");

class ContentManager extends AbstractManager {
  constructor() {
    super({ table: "content" });
  }

  insert(content) {
    return this.database.query(
      `insert into ${this.table} (title, type, timing, description, source, step, category, ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        content.title,
        content.type,
        content.timing,
        content.description,
        content.source,
        content.step,
        content.category,
      ]
    );
  }

  update(content) {
    return this.database.query(
      `update ${this.table} set title = ?, type = ?, timing = ?, description = ?, source = ?, step = ?, category = ? = ? where id = ?`,
      [
        content.title,
        content.type,
        content.timing,
        content.description,
        content.source,
        content.step,
        content.category,
        content.id,
      ]
    );
  }
}

module.exports = ContentManager;
