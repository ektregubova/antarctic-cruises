let header = document.querySelector('[data-header]');
let toggleNav = header.querySelector('[data-nav-toggle]');
let intro = document.querySelector('[data-intro]');

header.classList.remove('no-js');
header.classList.add('closed');

function clickOnToggle() {
  toggleNav.addEventListener('click', function () {
    if (header.classList.contains('closed')) {
      header.classList.remove('closed');
      header.classList.add('opened');
      intro.classList.add('closed');
    } else {
      header.classList.add('closed');
      header.classList.remove('opened');
      intro.classList.remove('closed');
    }
  });
}

export {clickOnToggle};
