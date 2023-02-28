const socket = io()

// DOM Elements
let output = document.querySelector('#view-message')

let actions = document.querySelector('#view-actions')

let user = document.querySelector('#user')
let message = document.querySelector('#message')
let sending = document.querySelector('#send')

// client listen if button with data check
sending.addEventListener('click', () => {
    socket.emit('chat:sending', { user: user.value, message: message.value} )
});

socket.on('chat:sending', (data) => {

    output.innerHTML += `<h1>${data.user}</h1> <p> >_ ${data.message}</p> `

});