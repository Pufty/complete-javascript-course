'use strict';

// document.querySelector(`.message`).textContent = `Hey`;
// document.querySelector(`.guess`).value;

const number = Math.trunc(Math.random()*20);

document.querySelector(`.check`).addEventListener(`click`, function () {
    const inputValue = document.querySelector(`.guess`).value;
    console.log(inputValue);
    if (!inputValue) {
        document.querySelector(`.message`).textContent = `Not a valid number`;
    } else {
        document.querySelector(`.message`).textContent = `You've input ${inputValue}`;
    }
});