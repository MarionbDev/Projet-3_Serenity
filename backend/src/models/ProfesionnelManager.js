const AbstractManager = require("./AbstractManager");

class ProfesionnelManager extends AbstractManager {
  constructor() {
    super({ table: "profesionnel" });
  }

  insert(profesionnel) {
    return this.database.query(
      `insert into ${this.table} (lastname, firstname, tel, image, speciality, road, city, zip_code, country ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profesionnel.lastname,
        profesionnel.firstname,
        profesionnel.tel,
        profesionnel.image,
        profesionnel.speciality,
        profesionnel.road,
        profesionnel.city,
        profesionnel.zip_code,
        profesionnel.country,
      ]
    );
  }

  update(profesionnel) {
    return this.database.query(
      `update ${this.table} set lastname = ?, firstname = ?, tel = ?, image = ?, speciality = ?, road = ?, city = ?, zip_code = ?, country = ?  where id = ?`,
      [
        profesionnel.lastname,
        profesionnel.firstname,
        profesionnel.tel,
        profesionnel.image,
        profesionnel.speciality,
        profesionnel.road,
        profesionnel.city,
        profesionnel.zip_code,
        profesionnel.country,
        profesionnel.id,
      ]
    );
  }

  updateLatLong(proId) {
    return this.database.query(
      `update ${this.table} set latitude = ?, longitude = ? where id = ?`,
      [proId.latitude, proId.longitude, proId.id]
    );
  }
}

module.exports = ProfesionnelManager;
