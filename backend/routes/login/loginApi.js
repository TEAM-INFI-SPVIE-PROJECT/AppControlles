const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');


// recupérer les données depuis le frontend 
// et verifier si elles correspondent avec celle de la bd
routers.post('/auth/login', function(req, res) {
    let data = req.body;
    let qry = 
    "select email, password from [dbo].[user] where email = @email and password = @password";
    new sql.Request()
  .input("email", sql.VarChar(255), data.email)
  .input("password", sql.VarChar(255), data.password)
  .query(qry)
  .then((result) => {
    console.log(result);
    if(result.recordset.length > 0) {
        res.send({
            message : "success",
            data : result.recordset
        });

    }else{
        res.send({
            message : "connection echouée",
        });
    }
 
  });
})
module.exports = routers;