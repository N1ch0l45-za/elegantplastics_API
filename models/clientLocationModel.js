const db = require('../util/dbConnect');

module.exports = class clientsLocation {
    constructor(id, client_id, address) {
        this.id = id;
        this.client_id = client_id;
        this.address = address;
    }

    static readAll() {
        return db.execute("SELECT * FROM client_locations");
    }

    static readAllClientLocations(client_id) {
        return db.execute("SELECT * FROM client_locations WHERE client_id = ?", [client_id]);
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM client_locations WHERE id = ?", [id]);
    }

    static readSingleLocation(id) {
        return db.execute("SELECT * FROM client_locations WHERE id = ?", [id]);
    }
    static create(client_id, address) {
        return db.execute('INSERT INTO client_locations (client_id, address) VALUES (?,?)', [client_id, address]);
    }

    static update(client_id, address, id) {
        return db.execute('UPDATE client_locations SET client_id = ?, address = ? WHERE id = ?', [client_id, address, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM client_locations WHERE id = ?', [id]);
    }
};