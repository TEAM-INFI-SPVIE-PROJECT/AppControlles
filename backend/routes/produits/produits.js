const express = require('express');
const routers = express.Router();
const sql = require('../../config/appConfig');

//getproduct//
routers.get('/product', (req, res) => {
  let qry = "select * from [dbo].[product]";
  sql.query(qry, (err, result) => {
      res.send({
          message : "toutes mes adresses",
          data : result.recordset
      })
  });    
});

routers.get('/productId/:id', (req, res) => {
    let id = req.params.id;
    let query = `select * from [dbo].[product] where id = ${id}`;
    sql.query(query, (err, result) => {
        res.send({
            message : "cette address est OK!!",
            data : result.recordset
        })
    });  
    })
  
  //creat by id //
  routers.post('/productCreate', (req, res) => {
  let data = req.body;
  console.log(req.body);
  let query = `
  INSERT INTO [product](name, status, category_id, user_id) 
  VALUES( @name, @status, @category_id, @user_id)`;
  
  new sql.Request()
  .input("name", sql.VarChar(255), data.name)
  .input("status", sql.VarChar(255), data.status)
  .input("category_id", sql.Int, data.category_id)
  .input("user_id", sql.Int, data.user_id)
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
  routers.put('/productUpdate/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const query = `
  UPDATE [product] SET name = @name, status=@status, category_id=@category_id,
  user_id = @user_id
  WHERE id = @id`;
  
  new sql.Request()
  .input("id", sql.Int, id)
  .input("name", sql.VarChar(255), data.name)
  .input("status", sql.VarChar(255), data.status)
  .input("category_id", sql.VarChar(255), data.category_id)
  .input("user_id", sql.Int, data.user_id)
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
  routers.delete("/productDelete/:id", (req, res) => {
    let getId = parseInt(req.params.id);
    new sql.Request()
    .input("id", sql.Int, getId)
    .query("delete from [product] where id = @id", (err, result) => {
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