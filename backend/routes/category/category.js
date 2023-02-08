const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');

//obtenir toutes les category
routers.get('/category', (req, res) => {
    let qry = "select * from [dbo].[category]";
    sql.query(qry, (err, result) => {
        res.send({
            message : "toutes mes adresses",
            data : result.recordset
        })
    });    
  });
  
  //obtenir une category par son id //
  routers.get('/categoryId/:id', (req, res) => {
  let id = req.params.id;
  let query = `select * from [dbo].[category] where id = ${id}`;
  sql.query(query, (err, result) => {
      res.send({
          message : "cette address est OK!!",
          data : result.recordset
      })
  });  
  })
  
  //créer une category //
  routers.post('/categoryCreate', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let query = `
  INSERT INTO [category](name, user_id) 
  VALUES(@name, @user_id)`;
  
  new sql.Request()
  .input("name", sql.VarChar(255), data.name)
  .input("user_id", sql.Int, data.user_id)
  .query(query)
  .then((result) => {
    res.status(200).json({
      message : "Ajouté avec success",
      data : result.recordset
     });
    });   
  });
  
  //modifier une categorie par son id //
  routers.put('/categoryUpdate/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  
  const query = `
  UPDATE [category] SET name = @name, 
  user_id = @user_id
  WHERE id = @id`;
  
  new sql.Request()
  .input("id", sql.Int, id)
  .input("name", sql.VarChar(255), data.name)
  .input("user_id", sql.Int, data.user_id)
  .query(query)
  .then((result) => {
    
    res.send({
      message : "modifié avec success",
      data : result.recordset
      });
    });   
  });
  
 //supprimer une categorie par son id //
  routers.delete("/categoryDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [category] where id = @id", (err, result) => {
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