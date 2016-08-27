/**
 * Created by baobaobao on 2016/8/25.
 */
const express = require('express');
const path = require('path');
var compression = require('compression');
const http = require('http');
const port = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

var weatherAPI = require('./weatherAPI');
//server static assets normally
app.use(express.static(path.resolve(__dirname,'public')));
app.use(compression());

//handle every other route with index.html
app.get('*', function (req,res) {
   res.sendFile(path.resolve(__dirname,'public'));
});


weatherAPI(server);
server.listen(port);
console.log('server started on port'+port);




