const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');

//getproduct//
routers.get('/role', (req, res) => {
  let qry = "select * from [dbo].[role]";
  sql.query(qry, (err, result) => {
      res.send({
          message : "toutes mes adresses",
          data : result.recordset
      })
  });    
});

routers.get('/roleId/:id', (req, res) => {
    let id = req.params.id;
    let query = `select * from [dbo].[role] where id = ${id}`;
    sql.query(query, (err, result) => {
        res.send({
            message : "success",
            data : result.recordset
        })
    });  
    })
  
  //creat by id //
  routers.post('/roleCreate', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let query = `
  INSERT INTO [role](name) 
  VALUES(@name)`;
  
  new sql.Request()
  .input("name", sql.VarChar(255), data.name)
  .query(query)
  .then((result) => {
    console.log(result);
    res.send({
      message : "creer avec success",
      data : result.recordset
      });
    });   
  });
  
  //update one user
  routers.put('/roleUpdate/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const query = `
  UPDATE [role] SET name = @name
  WHERE id = @id`;
  
  new sql.Request()
  .input("id", sql.Int, id)
  .input("name", sql.VarChar(255), data.name)
  .query(query)
  .then((result) => {
    console.log(result);
    res.send({
      message : "modifié avec success",
      data : result.recordset
      });
    });   
  });
  
  // delete by id//
  routers.delete("/roleDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [role] where id = @id", (err, result) => {
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