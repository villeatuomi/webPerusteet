//KOMMENTTEJA ITSELLENI
// Kysy opelta mitä kotisivuositetta tehtävänannossa tarkoitetaan
// muuta tarvittaessa koodia
// VASTAUS: Jos sarjalla on omat kotisivut, niin ohjaa omille kotisivuille.
// Jos sarjalla ei ole omia kotisivuja, niin ohjaa sarjan TVMazen-sivuille
'use strict';
let hakunappi = document.querySelector('#hakunappi');

const hakuprosessi = (evt) => {

  const hakuInputData = document.querySelector('#hakuteksti').value;
  console.log('Tätä kirjoitettiin hakukenttään: ' + hakuInputData);
  /*
  fetch('http://api.tvmaze.com/search/shows?q=' + hakuInputData).
      then(function(vastaus) {
        return vastaus.json();
      }).
      then(function(json) {
        testi(json);
      }).
      catch(function(error) {
        console.log(error);
      });
  */
// Tässä on muutettu funktiot nuolifunktioiksi
  fetch('http://api.tvmaze.com/search/shows?q=' + hakuInputData).
      then((vastaus) => {
        return vastaus.json();
      }).
      then((json) => {
        testi(json);
      }).
      catch((error) => {
        console.log(error);
      });

  // Tämä on karsittu kaikesta turhasta

  /*
    fetch('http://api.tvmaze.com/search/shows?q=' + hakuInputData).
        then((vastaus) => vastaus.json()).
        then((json) => testi(json)).
        catch((error) => console.log(error));
  */

  const testi = (tietoja) => {

    console.log(tietoja);

    //valitse div, johon tv-ohjelmat sijoitetaan
    let ulkoinenDiv = document.querySelector('#showsContainer');
    ulkoinenDiv.innerHTML = "";
  /*
    ulkoinenDiv.style.display = 'flex';
    ulkoinenDiv.style.flexWrap = 'wrap';
*/
    // tehdään for-toistolause, jossa käsitellään kaikki vastauksen sarjat
    for (let i = 0; i < tietoja.length; i++) {

      //tee uusi div sarjan tietoja varten
      let div = document.createElement('div');
      div.setAttribute('class','tvserie');
      div.setAttribute('id', 'div' + i);
/*
      div.style.width = '30%';
      div.style.border = '1px solid black';
*/
      //Nimi
      let sarjanNimi = document.createElement('h2');
      sarjanNimi.innerText = tietoja[i].show.name;

      //Linkki
      let sarjanKotisivuille = document.createElement('a');
      let linkkikotisivuille;

      linkkikotisivuille = tietoja[i].show.officialSite;

      if (linkkikotisivuille == null) {
        linkkikotisivuille = tietoja[i].show.url;
      }

      sarjanKotisivuille.setAttribute('href',
          '' + linkkikotisivuille + '');
      sarjanKotisivuille.innerHTML = 'Linkki kotisivuille <br>';

      //Kuva
      let sarjanKuva = document.createElement('img');
      let mediumKuva;

      try {
        mediumKuva = tietoja[i].show.image.medium;
      }
      catch (error) {
        console.error(error);
        //
        //
        mediumKuva = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png';
      }

      sarjanKuva.setAttribute('src', '' + mediumKuva + '');
      //sarjanKuva.style.width = '100%';

      //Summary
      let sarjanSummary = document.createElement('div');
      sarjanSummary.setAttribute('class','sikke');
      sarjanSummary.innerHTML = '' + tietoja[i].show.summary + '';

      //Genre
      let sarjanGenre = document.createElement('p');
      let genre = '';
      for (let k = 0; k < tietoja[i].show.genres.length; k++) {
        genre += '' + tietoja[i].show.genres[k] + ', ';
      }

      sarjanGenre.innerText = genre;

      try {
        div.appendChild(sarjanNimi);
      }
      catch (error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
        sarjanNimi = '';
      }

      try {
        div.appendChild(sarjanKotisivuille);
      }
      catch (error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
        sarjanKotisivuille = '';
      }

      div.appendChild(sarjanKuva);

      try {
        div.appendChild(sarjanSummary);
      }
      catch (error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
        sarjanSummary = '';
      }

      try {
        div.appendChild(sarjanGenre);
      }
      catch (error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
        sarjanGenre = '';
      }

      document.querySelector('#showsContainer').appendChild(div);
    }

  };

};

hakunappi.addEventListener('click', hakuprosessi);

//------------------------------------------------------------------------
/*
for (let i = 0; i < tietoja.length; i++) {
  let div = document.createElement('div');
  div.setAttribute('id', 'div' + i);
  div.innerHTML = '<h3>' + tietoja[i].show.name + '</h3><a href="' +
      tietoja[i].show.officialSite + '">Linkki kotisivuille</a><img src="' +
      tietoja[i].show.image.medium + '">' + tietoja[i].show.summary +
      ' moi';
  document.querySelector('#showsContainer').appendChild(div);
}

div.innerHTML = '<h3>' + tietoja[i].show.name + '</h3><a href="' +
    tietoja[i].show.officialSite + '">Linkki kotisivuille</a><img src="' +
    tietoja[i].show.image.medium + '">' + tietoja[i].show.summary + ' moi';

document.querySelector('#div' + i).appendChild(sarjanNimi);
document.querySelector('#div' + i).appendChild(sarjanKotisivuille);
document.querySelector('#div' + i).appendChild(sarjanSummary);
document.querySelector('#div' + i).appendChild(sarjanGenre);

try {

}
catch (error) {
  console.error(error);
  // expected output: SyntaxError: unterminated string literal
  // Note - error messages will vary depending on browser

}

console.log(tietoja);
console.log(tietoja.name);
console.log(tietoja.officialSite);
let nimi = tietoja.name;
let linkkiKotisivulle = tietoja.officialSite;
let mediumKuva = tietoja.image;
let summary = tietoja.summary;
console.log('Sarjan nimi on: ' + nimi);
console.log('Sarjan kotisivut löytyvät osoitteesta: ' + linkkiKotisivulle);
console.log('Kuva sarjasta: ' + mediumKuva);
console.log('Tietoa sarjasta: ' + summary);
*/