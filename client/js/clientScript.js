/*
let socket = io.connect();

const clientMessageForm = document.getElementById("clientMessageForm");
const  messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");
let user = prompt("Enter your name",);

clientMessageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (messageInput.value) {
        socket.emit('sendMessage',user +' : '+ messageInput.value);
        messageInput.value = ' ';
    }
});


socket.on('sendMessage', (msg) => {
    const messageElement = document.createElement('h4');
    messageElement.innerText = msg;
    messages.append(messageElement);/!**!/


});
*/

let socket = io.connect();


const theInput = document.getElementById('sendForm');
const display = document.getElementById('display');
const input = document.getElementById('message');

let userName = prompt('choose your user name');

theInput.addEventListener('submit', e => {
    e.preventDefault()
    const message = input.value;
    socket.emit('sendMessage', userName +': ' + message);
    input.value = ' ';
})

socket.on('sendMessage', data => {
    displayMessage(data);
})

function displayMessage(message){
    const popup = messageElement = document.createElement('h4');
    popup.innerText = message;
    display.append(popup);

}