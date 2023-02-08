const sql = require("mssql/msnodesqlv8");

var config = {  
    server: 'DESKTOP-1MJGFMU',
    user: 'sa',
    password: '1234',
    database: 'ControleMoneyBD',
};

async function getPersons() {
    try {
        await sql.connect(config);
        const persons = await sql.query("select * from dbo.user");
        return persons.recordset;
    } catch (err) {
        console.log(err);
    }
}

getPersons().then(res => console.log(res));

