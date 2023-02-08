const express = require('express');
//on cree une const app et on lui passe la methode express()
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use(require('../backend/routes/users/user'));//api users
 app.use(require('../backend/routes/category/category'));//api categories
 app.use(require('../backend/routes/sites/sites'));//api sites
 app.use(require('../backend/routes/produits/produits')); //api produits
 app.use(require('../backend/routes/belong/belong'));//api belongs
 app.use(require('../backend/routes/login/loginApi')); //api
 app.use(require('../backend/routes/role/role')); //api role
module.exports = app;