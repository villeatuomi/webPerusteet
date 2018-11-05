const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (let i = 0; i < kuvat.length; i++){
  let kuva = document.createElement('img');
  kuva.setAttribute('src','' + kuvat[i] + '');
  let itemi = document.createElement('li');
  itemi.appendChild(kuva);
  document.querySelector('ul').appendChild(itemi);
}

