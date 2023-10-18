const input = document.querySelector('.form__message');
const sendMsg = document.querySelector('.send-btn');
const geoBtn = document.querySelector('.geo-btn');
const userMessages = document.querySelector('.msg__user');
const serverMessages = document.querySelector('.msg__server');
const chatField = document.querySelector('.chat__field');

function writeMessage(message, position='flex-end'){
    let element = `<p class='messages' style='align-self: ${position}'>${message}</p>`;
    userMessages.innerHTML += element;
    chatField.scrollTop = chatField.scrollHeight;
}

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');
    websocket.onopen = function(evt){
    console.log('CONNECTED');
    };
    websocket.onmessage = function(evt){
        writeMessage(`Ответ сервера: ${evt.data}`, 'flex-start');
    };
    websocket.onerror = function(evt){
        writeMessage(`Ошибка соединения`, 'flex-start');
    };

sendMsg.addEventListener('click', () => {
    let message = input.value;
    websocket.send(message);
    writeMessage(`Вы: ${message}`);
    input.value = '';
});

const error = () => {
	let textErr0r = 'Невозможно получить ваше местоположение';
	writeMessage(textErr0r);
};

const success = (position) => {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude;
	let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	writeMessage(`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
};

geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
})