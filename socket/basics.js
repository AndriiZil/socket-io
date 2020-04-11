const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('I am connected!!!');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
    // send because socket.io emit
    socket.emit('welcome', 'Welcome to the websocket server.');
    // no change here
    socket.on('message', (msg) => {
        console.log(msg);
    })
})

server.listen(8200, () => console.log('Node started on port 8200'))