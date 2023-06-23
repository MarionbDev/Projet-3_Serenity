const AbstractManager = require("./AbstractManager");

class PodcastManager extends AbstractManager {
  constructor() {
    super({ table: "podcast" });
  }

  insert(podcast) {
    return this.database.query(
      `insert into ${this.table} (title, format, description, source) values (?, ?, ?, ?)`,
      [podcast.title, podcast.format, podcast.description, podcast.source]
    );
  }

  update(podcast) {
    return this.database.query(
      `update ${this.table} set title = ?, format = ?, description = ?, source = ?  where id = ?`,
      [
        podcast.title,
        podcast.format,
        podcast.description,
        podcast.source,
        podcast.id,
      ]
    );
  }
}

module.exports = PodcastManager;
