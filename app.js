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

// 00º websockets conf, the module need a server conection
const io = socketIO(server);

// websokets " events "

// 01º Websocket listen conections
io.on('connection', (socket) => {
    //console.log('new conection', socket.id)

    // 3º Listen a event
    socket.on('chat:sending', (data) => {

        // Now we have two options
        // send message to all users included me
        io.sockets.emit('chat:sending', data) // this is a server event, and we can use the same name

        // send message to all users without me
        // socket.broadcast.emit('chat:sending', data)
    })

    socket.on('', () => {

    });
});