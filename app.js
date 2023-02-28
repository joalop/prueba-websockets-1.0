const socketIO = require('socket.io')


const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express();

// setings
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// middleware
app.use(express.static(path.join(__dirname, 'public')) );

// routes

app.get('/', (req, res, next) => {
    res.render('init')
});

//app.listen( app.get('port'), () => { console.log(`Server listen on port: ${app.get('port')}`)} );
const server = app.listen( app.get('port'), () => {
    console.log(`Server listen on port: ${app.get('port')}`) }
);

const io = socketIO(server);

// websokets

io.on('connection', (socket) => {
    console.log('new conection', socket.id)
    socket.on('chat:sending', (data) => {

        // Now we have two options
        // send to all users included me
        io.sockets.emit('chat:sending', data) // this is a event from the server, and we can use the same name
        // send to all users without me
    })
});