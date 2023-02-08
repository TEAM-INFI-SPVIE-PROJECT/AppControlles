const sql = require('../config/appConfig');

module.exports = class loginModele{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    static find(email){
        return sql.execute('SELECT * FROM users WHERE email=?', [email]);
    }

    static save(user){
        return sql.execute('INSERT INTO users (email, password) VALUES (?, ?)', 
        [user.email, user.password]
        );
    }
}