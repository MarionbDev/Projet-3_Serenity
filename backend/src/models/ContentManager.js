const AbstractManager = require("./AbstractManager");

class ContentManager extends AbstractManager {
  constructor() {
    super({ table: "content" });
  }

  insert(content) {
    return this.database.query(
      `insert into ${this.table} (title, type, timing, description, source, step, category, protocol_id) values (?, ?, ?, ?, ?, ?, ? ,?)`,
      [
        content.title,
        content.type,
        content.timing,
        content.description,
        content.source,
        content.step,
        content.category,
        content.protocol_id,
      ]
    );
  }

  update(content) {
    return this.database.query(
      `update ${this.table} set title = ?, type = ?, timing = ?, description = ?, source = ?, step = ?, category = ?, protocol_id = ?  where id = ?`,
      [
        content.title,
        content.type,
        content.timing,
        content.description,
        content.source,
        content.step,
        content.category,
        content.protocol_id,
        content.id,
      ]
    );
  }

  getAllContentByIntervention(id) {
    return this.database.query(
      `SELECT c.id, c.title, c.type, c.description, c.source, c.step, c.category, p.id, p.title from intervention as i JOIN protocol as p on p.id=i.protocol_id JOIN content as c on c.protocol_id = p.id where i.id = ?`,
      [id]
    );
  }
}

module.exports = ContentManager;
