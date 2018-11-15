const kuva = document.querySelector('img');
const teksti = document.querySelector('p');
teksti.style.display = 'none';

const hiiriIN = (evt1) => {
teksti.style.display = 'block';
};

const hiiriOUT = (evt2) => {
teksti.style.display = 'none';
};

kuva.addEventListener('mouseover',hiiriIN);
kuva.addEventListener('mouseleave',hiiriOUT);