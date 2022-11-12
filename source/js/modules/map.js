const mapImage = document.querySelector('[data-map-nojs]');
const mapYandex = document.querySelector('[data-map-yandex]');

function addMap() {
  if (!mapImage || !mapYandex) {
    return;
  }

  mapImage.classList.add('nojs');
  mapYandex.classList.add('js');
}

export {addMap};
