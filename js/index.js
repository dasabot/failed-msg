const mineTemplate = document.getElementById("bubble-template-mine");
const mineTextOfTemplate = mineTemplate.content.querySelector(".bubble-text");
const mineTimeOfTemplate = mineTemplate.content.querySelector(".bubble-time");
const yourTemplate = document.getElementById("bubble-template-yours");
const yourTextOfTemplate = yourTemplate.content.querySelector(".bubble-text");
const yourTimeOfTemplate = yourTemplate.content.querySelector(".bubble-time");
const answers = [
    "ясно",
    "понятно",
    "ок",
    ")",
    "(",
    "бывает"
];


const fillMineBubble = (myText, myTime) => {
    mineTextOfTemplate.textContent = myText;
    mineTimeOfTemplate.textContent = myTime;
    const clone = document.importNode(mineTemplate.content, true);
    document.getElementById("main").appendChild(clone);
};

function removeLast() {
    const listOfLasts = document.querySelectorAll('.last');
    let lastChildMain = document.getElementById('main').lastChild;
    const lastMine = document.querySelector('.main-container.mine .last:last-child');

    if (listOfLasts.length > 1) {
        const previousElement = lastChildMain.previousSibling;
        lastMine.classList.remove('last');

    }
}

function sendMessage() {
    const input = document.getElementById('input-text');
    const textInput = input.value;
    if (textInput.length === 0) return;
    const today = new Date();
    const currentTime = (`0${today.getHours()}`).slice(-2) + ':' + (`0${today.getMinutes()}`).slice(-2);
    fillMineBubble(textInput, currentTime);
    input.value = null;
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        removeLast();
        sendMessage();
        getAnswer();
    }
    return false;
});
//--------------------------------------------------------------------
let randomNumber = getRandomNumber(5);
const timerGetAnswer = setTimeout(getAnswer, 5000);
const changeAnswer = setTimeout(getRandomNumber, 1000);

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getRandomAnswer() {
    return answers[`${randomNumber}`];
}

const fillYourBubble = (text, time) => {
    yourTextOfTemplate.textContent = text;
    yourTimeOfTemplate.textContent = time;
    const clone = document.importNode(yourTemplate.content, true);
    document.getElementById("main").appendChild(clone);
};

function getAnswer() {
    const today = new Date();
    const text = getRandomAnswer();
    const currentTime = (`0${today.getHours()}`).slice(-2) + ':' + (`0${today.getMinutes()}`).slice(-2);
    fillYourBubble(text, currentTime);
}

console.log(getAnswer());




