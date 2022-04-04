const db = require('../util/dbConnect');

module.exports = class item {
    constructor(barcode, name, description) {
        this.barcode = barcode;
        this.name = name;
        this.description = description;
    }

    static readAll() {
        return db.execute("SELECT * FROM items");
    }

    static readSingle(barcode) {
        return db.execute("SELECT * FROM items WHERE barcode = ?", [barcode]);
    }

    static create(barcode, name, description) {
        return db.execute('INSERT INTO items (barcode, name, description) VALUES (?,?,?)', [barcode, name, description]);
    }

    static update(name, description, barcode) {
        return db.execute('UPDATE items SET name = ?, description = ? WHERE barcode = ?', [name, description, barcode]);
    }

    static delete(barcode) {
        return db.execute('DELETE FROM items WHERE barcode = ?', [barcode]);
    }
};