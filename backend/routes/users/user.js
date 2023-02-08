const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');


//obtenir tous les users
routers.get('/users', function(req, res) {
    let qry = "select * from [dbo].[user]";
    sql.query(qry, (err, result) => {
        res.send({
            message : "toutes mes adresses",
            data : result.recordset
        })
    });  
});

//obtenir un user par son id //
routers.get('/userId/:id', (req, res) => {
let id = req.params.id;
let query = `select * from [dbo].[user] where id = ${id}`;
    sql.query(query, (err, result) => {
        res.send({
            message : "cette address est OK!!",
            data : result.recordset
        })
    });  
})


//créer un user //
routers.post('/userCreate', (req, res) => {
    let data = req.body;
    //console.log(req.body);
    let query = `
    INSERT INTO [user] (last_name, first_name, email, password) 
    VALUES(@last_name, @first_name, @email, @password)`;
  
    new sql.Request()
    .input("last_name", sql.VarChar(255), data.last_name)
    .input("first_name", sql.VarChar(255), data.first_name)
    .input("email", sql.VarChar(255), data.email)
    .input("password", sql.VarChar(255), data.password)
    .query(query)
    .then((result) => {
      res.status(200).json({
        message : "Ajouté avec success",
        data : result.recordset
    });
    });   
  });



  //modifier un user par son id// 
routers.put('/userUpdate/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
  
    const query = `
    UPDATE [user] SET last_name = @last_name, 
    first_name = @first_name, 
    email = @email, 
    password = @password
    WHERE id = @id`;
  
    new sql.Request()
    .input("id", sql.Int, id)
    .input("last_name", sql.VarChar(255), data.last_name)
    .input("first_name", sql.VarChar(255), data.first_name)
    .input("email", sql.VarChar(255), data.email)
    .input("password", sql.VarChar(255), data.password)
    .query(query)
    .then((result) => {
      res.send({
        message : "modifié avec success",
        data : result.recordset
    });
    });   
  });

  // supprimer un user par son id//
routers.delete("/userDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [user] where id = @id", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send({
        message: "delete success",
        data: result
      });
    });
  });


module.exports = routers;