const http = require('http');
const app = require('./app');

//on doit dire à l'app sur quel env tourner ou fonctionner
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app); 

app.use( (req, res, next )=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization');
    next();
    });

server.listen(process.env.PORT || 3000);