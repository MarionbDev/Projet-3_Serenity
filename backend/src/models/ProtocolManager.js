const AbstractManager = require("./AbstractManager");

class ProtocolManager extends AbstractManager {
  constructor() {
    super({ table: "protocol" });
  }

  insert(protocol) {
    return this.database.query(
      `insert into ${this.table} (title, description) values (?, ?)`,
      [protocol.title, protocol.description]
    );
  }

  update(protocol) {
    return this.database.query(
      `update ${this.table} set title = ?, description = ? = ? where id = ?`,
      [protocol.title, protocol.description, protocol.id]
    );
  }
}

module.exports = ProtocolManager;
