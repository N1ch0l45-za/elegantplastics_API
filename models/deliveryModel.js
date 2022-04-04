const db = require('../util/dbConnect');

module.exports = class delivery {
    constructor(id, client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status) {
        this.id = id;
        this.client_id = client_id;
        this.client_location_id = client_location_id;
        this.courier_id = courier_id;
        this.packing_date = packing_date;
        this.reference_num = reference_num;
        this.del_type = del_type;
        this.collection_date = collection_date;
        this.invoice_number = invoice_number;
        this.status = status;
    }

    static readAll() {
        return db.execute("SELECT * FROM deliveries");
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM deliveries WHERE id = ?", [id]);
    }

    static create(client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status) {
        return db.execute('INSERT INTO deliveries (client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status) VALUES (?,?,?,?,?,?,?,?,?)', [client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status]);
    }

    static update(client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status, id) {
        return db.execute('UPDATE deliveries SET client_id = ?, client_location_id = ?, courier_id = ?, packing_date = ?, reference_num = ?, del_type = ?, collection_date = ?, Invoice_number = ?, status = ? WHERE id = ?', [client_id, client_location_id, courier_id, packing_date, reference_num, del_type, collection_date, invoice_number, status, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM deliveries WHERE id = ?', [id]);
    }
};