'use strict';
//vaihda toisen rivin tekstit omiksi tiedoiksi
document.querySelector('td:nth-child(1)').innerHTML = 'Ville';
document.querySelector('table tr:last-child td:nth-child(2)').innerHTML = 'Tuomi';
document.querySelector('table tr:last-child td:nth-child(3)').innerHTML = 'Vitu';
document.querySelector('table tr:last-child td:nth-child(4)').innerHTML = 'Metsälinnunreitti 2 B 13 02660 ESPOO';
// yritä lisätä puhelin otsikkorivi ekalle riville

const puh = document.createElement('th');
puh.innerHTML = 'Puhelin';
document.querySelector('table tr:first-child').appendChild(puh);

const puhNro = document.createElement('td');
puhNro.innerHTML = '+358 50 566 2322';
document.querySelector('table tr:last-child').appendChild(puhNro);

// poistaa nikki-sarakkeen arvon
const nikki = document.querySelector('table tr:last-child td:nth-child(3)');
document.querySelector('table tr:last-child').removeChild(nikki);

// poista nikki-header
const nikkiH = document.querySelector('table tr:first-child th:nth-child(3)');
document.querySelector('table tr:first-child').removeChild(nikkiH);


// VALMIS ???



