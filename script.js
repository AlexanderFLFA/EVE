function sendMessage() {
    var message = document.getElementById('message-input').value;
    if (message.trim() !== '') {
        document.getElementById('chat-box').innerHTML += '<p>' + message + '</p>';
        document.getElementById('message-input').value = '';
    }
}