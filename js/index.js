const template = document.getElementById("bubble-template");
const text = template.content.querySelector(".bubble-text");
const time = template.content.querySelector(".bubble-time");
const answers = [
    "ясно",
    "понятно",
    "ок",
    ")",
    "(",
    "бывает"
];


const fillBubble = (myText, myTime) => {
    text.textContent = myText;
    time.textContent = myTime;

    const clone = document.importNode(template.content, true);
    document.getElementById("main").appendChild(clone);
};

function removeLast() {
    const listOfLasts = document.querySelectorAll('.last');
    let lastChildMain = document.getElementById('main').lastChild;
    const lastMine = document.querySelector('.main-container.mine .last:last-child');
    //const lastYours = document.querySelector('.main-container.yours .last:last-child');

    if (listOfLasts.length > 1) {
        const previousElement = lastChildMain.previousSibling;
        lastMine.classList.remove('last');
        //lastYours.classList.remove('last');
    }
}

function sendMessage() {
    const input = document.getElementById('input-text');
    const textInput = input.value;
    if (textInput.length === 0) return;
    const today = new Date();
    const currentTime = (`0${today.getHours()}`).slice(-2) + ':' + (`0${today.getMinutes()}`).slice(-2);
    fillBubble(textInput, currentTime);
    input.value = null;
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        removeLast();
        sendMessage();
    }
    return false;
});







