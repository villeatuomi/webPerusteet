
function naytaAika() {

  let testi = document.querySelector('#kello');
  let aika = new Date();
  let tunnit = aika.getHours();
  if (tunnit < 10){
    tunnit = '0' + tunnit;
  }
  let minuutit = aika.getMinutes();
  if (minuutit < 10){
    minuutit = '0' + minuutit;
  }
  let sekuntit = aika.getSeconds();
  if (sekuntit < 10){
    sekuntit = '0' + sekuntit;
  }
  let nytAika = '' + tunnit + ':' + minuutit + ':' + sekuntit + '';
  testi.innerHTML = nytAika;

}

const intervalli = setInterval(naytaAika, 1000);


