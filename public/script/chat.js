const socket = io()

// DOM Elements


let general = document.querySelector(".view-chat")

let output = document.querySelector(".view-message")

let actions = document.querySelector(".view-actions")
// message
let user = document.querySelector(".user")
let message = document.querySelector(".message")
let sending = document.querySelector(".send")

function aded(){
    //console.log(general)

    let y = document.querySelector(".view-chat").cloneNode(true)
    document.querySelector("#container").appendChild(y)

    sending = document.querySelector(".send")
    sending.addEventListener('click', () => {
        // 2º emited a personal event to server
        socket.emit('chat:sending', { user: user.value, message: message.value} )
        alert('Hola')
    });

    console.log(document.querySelector("#container"))
}


// 1º client listen if button with data check

sending.addEventListener('click', () => {
    // 2º emited a personal event to server
    socket.emit('chat:sending', { user: user.value, message: message.value} )
    alert('Hola')
});



socket.on('chat:sending', (data) => {

    // output.innerHTML += `<div class="message-data> <h2>${data.user}</h2> <p> >_ ${data.message}</p></div>`
    output.innerHTML += `<div class="chating"> <h3>${data.user}</h3> <p> :> ${data.message}</p> </div> `

});