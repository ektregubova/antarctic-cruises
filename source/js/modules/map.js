let mapImage = document.querySelector('[data-map-nojs]');
let mapYandex = document.querySelector('[data-map-yandex]');

function addMap() {
  mapImage.classList.add('nojs');
  mapYandex.classList.add('js');
}

export {addMap};
