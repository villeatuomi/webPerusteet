const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

//LAITETAAN 3 KUVAKETTA DOKUMENTTIIN

const keho = document.querySelector('body');


keho.innerHTML = '<ul style="list-style-type: none">' +
                  '<li><img src="' + pics[0].thumb + '"></li>' +
                  '<li><img src="' + pics[1].thumb + '"></li>' +
                  '<li><img src="' + pics[2].thumb + '"></li>' +
                '</ul>' +
                '<div class="hidden">' +
                  '<img src="">' +
                '</div>';
//ehkä tähän script tagit ja niiden sisään viittaus js-tiedostoon

const img1 = document.querySelector('ul li:nth-child(1) img');
const img2 = document.querySelector('ul li:nth-child(2) img');
const img3 = document.querySelector('ul li:nth-child(3) img');

alert(img1);
alert(img2);
alert(img3);

const alakuva = document.querySelector('div img');
const aladiv = document.querySelector('div');


const kuva1isoksi = (evt) => {
  aladiv.setAttribute('class','visible');
  alakuva.setAttribute('src','' + pics[0].big + '');
};
img1.addEventListener('click',kuva1isoksi);




const kuva2isoksi = (evt) => {
  aladiv.setAttribute('class','visible');
  alakuva.setAttribute('src','' + pics[1].big + '');
};
img2.addEventListener('click',kuva2isoksi);





const kuva3isoksi = (evt) => {
  aladiv.setAttribute('class','visible');
  alakuva.setAttribute('src','' + pics[2].big + '');
};
img3.addEventListener('click',kuva3isoksi);





const kuvapieneksi = (evt) => {
  aladiv.setAttribute('class','hidden');
};
alakuva.addEventListener('click',kuvapieneksi);



/*
const luettelo = document.createElement('ul');
luettelo.style.listStyleType = 'none';
keho.insertBefore(luettelo, keho.childNodes[0]);

const alakuva = document.querySelector('div img');
const aladiv = document.querySelector('div');

for (let i = 0; i < pics.length; i++) {
  const item = document.createElement('li');
  luettelo.appendChild(item);

  const kuvake = document.createElement('img');
  kuvake.setAttribute('src', pics[i].thumb);
  item.appendChild(kuvake);

  kuvake.addEventListener('click', (evt) => {
    console.log(evt.target);
    aladiv.setAttribute('class', 'visible');
    alakuva.setAttribute('src', pics[i].big);
  });
}

const pieni = (evt) => {
  aladiv.setAttribute('class', 'hidden');
};
alakuva.addEventListener('click', pieni);

*/