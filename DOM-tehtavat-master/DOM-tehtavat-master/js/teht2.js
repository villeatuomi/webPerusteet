// eka kohta
const kuva = document.querySelector('img');

kuva.setAttribute('style','display:block');

// eka kohta vaihtoehtoinen tapa alla
/*
document.getElementsByTagName('img')[0].setAttribute('style','display:block');
*/
// toka kohta
document.querySelectorAll('img')[1].setAttribute('class','esil');