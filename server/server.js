
const express = require('express');
const http = require('http');

/!*use express and http to make it easy to host our client*!/

const app = express();/!*To define our application*!/
const clientPath = `${__dirname}/../client`; /!*To give the path to our client*!/

app.use(express.static(clientPath));/!*To use express to host the client*!/

const server = http.createServer(app);/!*To use http to serve the app that express provides*!/

const port = 8080;


server.listen(8080, () =>{
    console.log("server running on "+port);
});
const io = require('socket.io')(server);

/* work work work work work work work work work work*/

io.on('connection', socket => {
    socket.on('sendMessage', message => {
        socket.broadcast.emit('sendMessage', message);
    })

});