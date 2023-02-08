const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');


routers.get('/site', (req, res) => {
    let qry = "select * from [dbo].[site]";
    sql.query(qry, (err, result) => {

        res.send({
            message : "tous mes sites",
            data : result.recordset
        })
    });    
  });
  
  //get one site //
  routers.get('/siteId/:id', (req, res) => {
    let id = req.params.id;
    let query = `select * from [dbo].[site] where id = ${id}`;
    sql.query(query, (err, result) => {
        res.send({
            message : "ce site est OK!!",
            data : result.recordset
        })
    });  
    })
  
  //creat by id //
  routers.post('/siteCreate', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let query = `
  INSERT INTO [site](libelle) 
  VALUES( @libelle)`;
  
  new sql.Request()
  .input("libelle", sql.VarChar(255), data.libelle)
  .query(query)
  .then((result) => {
    console.log(result);
    res.send({
      message : "creer avec success",
      data : result.recordset
      });
    });   
  });
  
  //update one site
  routers.put('/siteUpdate/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const query = `
  UPDATE [site] SET libelle = @libelle
  WHERE id = @id`;
  
  new sql.Request()
  .input("id", sql.Int, id)
  .input("libelle", sql.VarChar(255), data.libelle)
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
  routers.delete("/siteDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [site] where id = @id", (err, result) => {
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