const db = require('../util/dbConnect');

module.exports = class delivery {
    constructor(id, delivery_id, item_barcode, quantity) {
        this.id = id;
        this.delivery_id = delivery_id;
        this.item_barcode = item_barcode;
        this.quantity = quantity;
    }

    static readAllDeliveryItems(delivery_id) {
        return db.execute("SELECT * FROM delivery_items WHERE delivery_id = ?", [delivery_id]);
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM delivery_items WHERE id = ?", [id]);
    }

    static create(delivery_id, item_barcode, quantity) {
        return db.execute('INSERT INTO delivery_items (delivery_id, item_barcode, quantity) VALUES (?,?,?)', [delivery_id, item_barcode, quantity]);
    }

    static update(delivery_id, item_barcode, quantity, id) {
        return db.execute('UPDATE delivery_items SET delivery_id = ?, item_barcode = ?, quantity = ? WHERE id = ?', [delivery_id, item_barcode, quantity, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM delivery_items WHERE id = ?', [id]);
    }
};