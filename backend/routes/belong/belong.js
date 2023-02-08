const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');


routers.get('/belong', (req, res) => {
    let qry = "select * from [dbo].[belong]";
    sql.query(qry, (err, result) => {
        res.send({
            message : "okok ça marche",
            data : result.recordset
        })
    });    
  });
  
  //get one belong by id //
  routers.get('/getsiteId/:id', (req, res) => {
  let id = req.params.id;
  let query = `select * from [dbo].[site] where id = ${id}`;
  sql.query(query, (err, result) => {
      res.send({
          message : "ce belong est OK!!",
          data : result.recordset
      })
  });  
  })
  
  //creat by id //
  routers.post('/belongCreate', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let query = `
  INSERT INTO [belong](site_id, user_id) 
  VALUES(@site_id, @user_id)`;
  
  new sql.Request()
  .input("site_id", sql.Int, data.site_id)
  .input("user_id", sql.Int, data.user_id)
  .query(query)
  .then((result) => {
    res.status(200).json({
      message : "Ajouté avec success",
      data : result.recordset
     });
    });   
  });
  
  //update one belong by id //
  routers.put('belongUpdate/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  
  const query = `
  UPDATE [belong] SET site_id = @site_id, 
  user_id = @user_id
  WHERE id = @id`;
  
  new sql.Request()
  .input("id", sql.Int, id)
  .input("site_id", sql.Int, data.site_id)
  .input("user_id", sql.Int, data.user_id)
  .query(query)
  .then((result) => {
    
    res.send({
      message : "modifié avec success",
      data : result.recordset
      });
    });   
  });
  
  // delete by id//
  routers.delete("/belongDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [belong] where id = @id", (err, result) => {
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