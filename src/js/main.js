'use strict';
const adviceId = document.querySelector('.js-advice-id');
const advicePhrase = document.querySelector('.js-advice-phrase');
const diceButton = document.querySelector('.js-dice-button');

function getApiData() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = `Advice # ${data.slip.id}`;
      advicePhrase.innerHTML = `" ${data.slip.advice}"`;
    });
}

function getRandomAdvice(event) {
  event.preventDefault();
  getApiData();
}

getApiData();

diceButton.addEventListener('click', getRandomAdvice);
