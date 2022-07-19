const express = require('express');
const http = require('http');
/*use express and http to make it easy to host our client*/
const app = express();/*To define our application*/
const clientPath = `${__dirname}/../client`; /*To give the path to our client*/
app.use(express.static(clientPath));/*To use express to host the client*/
const server = http.createServer(app);/*To use http to serve the app that express provides*/
const port = 8080;
const io = require('socket.io')(server);

server.listen(port, () =>{
    console.log("server running on "+port);
});
let counter = 0
io.on('connection', (socket) => {
    counter++;
    console.log(counter+'  someone connected ');
});