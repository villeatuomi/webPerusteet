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



const keho = document.querySelector('body');
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

