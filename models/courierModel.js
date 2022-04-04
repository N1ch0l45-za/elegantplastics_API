const db = require('../util/dbConnect');

module.exports = class courier {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static readAll() {
        return db.execute("SELECT * FROM couriers");
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM couriers WHERE id = ?", [id]);
    }

    static create(name) {
        return db.execute('INSERT INTO couriers (name) VALUES (?)', [name]);
    }

    static update(name, id) {
        return db.execute('UPDATE couriers SET name = ? WHERE id = ?', [name, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM couriers WHERE id = ?', [id]);
    }
};