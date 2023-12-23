const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
    },
    transports: ["websocket"],
});
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.send('Hello');
});

io.on('connection', (socket) => {
    console.log('connection')
    const userId = socket.id;
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', { message, userId });
    });
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

