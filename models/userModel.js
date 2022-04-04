const db = require('../util/dbConnect');

module.exports = class Users {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static find(email) {
        return db.execute("SELECT * FROM users WHERE email = ?", [email]);
    }

    static readAll() {
        return db.execute("SELECT id, name, email, role FROM users");
    }

    static readSingle(id) {
        return db.execute("SELECT * FROM users WHERE id = ?", [id]);
    }

    static create(name, email, password, role) {
        return db.execute('INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)', [name, email, password, role]);
    }

    static update(name, password, role, id) {
        return db.execute('UPDATE users SET name = ?, password = ?, role = ? WHERE id = ?', [name, password, role, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM users WHERE id = ?', [id]);
    }
};