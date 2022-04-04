const db = require('../util/dbConnect');

module.exports = class clients {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    static readAll() {
        return db.execute("SELECT * FROM clients");
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM clients WHERE id = ?", [id]);
    }

    static create(name, address) {
        return db.execute('INSERT INTO clients (name, address) VALUES (?,?)', [name, address]);
    }

    static update(name, address, id) {
        return db.execute('UPDATE clients SET name = ?, address = ? WHERE id = ?', [name, address, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM clients WHERE id = ?', [id]);
    }
};