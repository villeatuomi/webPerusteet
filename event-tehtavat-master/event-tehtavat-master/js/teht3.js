const plus = document.querySelector('#sum');
const miinus = document.querySelector('#sub');
const kerto = document.querySelector('#multi');
const jako = document.querySelector('#div');

let luku1 = document.querySelector('#num1');
let luku2 = document.querySelector('#num2');
let vastaus = document.querySelector('#vastaus');

let numero1;
let numero2;


const pluslasku = (evt1) => {
numero1 = +luku1.value;
numero2 = +luku2.value;
vastaus.innerHTML = numero1 + numero2;
};


const miinuslasku = (evt1) => {
  numero1 = +luku1.value;
  numero2 = +luku2.value;
  vastaus.innerHTML = numero1 - numero2;
};


const kertolasku = (evt1) => {
  numero1 = +luku1.value;
  numero2 = +luku2.value;
  vastaus.innerHTML = numero1 * numero2;
};


const jakolasku = (evt1) => {
  numero1 = +luku1.value;
  numero2 = +luku2.value;
  vastaus.innerHTML = numero1 / numero2;
};


plus.addEventListener('click',pluslasku);
miinus.addEventListener('click',miinuslasku);
kerto.addEventListener('click',kertolasku);
jako.addEventListener('click',jakolasku);