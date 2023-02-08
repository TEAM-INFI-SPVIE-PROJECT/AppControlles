const sql = require("mssql/msnodesqlv8");

let config = {  
    server: 'DESKTOP-1MJGFMU',
    user: 'sa',
    password: '1234',
    database: 'ControleMoneyBD',
};
sql.connect(config);

module.exports = sql;