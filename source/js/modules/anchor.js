const anchors = document.querySelectorAll('a[data-anchor]');

function onLinkMove() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
export {onLinkMove};
