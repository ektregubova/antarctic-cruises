let header = document.querySelector('[data-header]');
let toggleNav = header.querySelector('[data-nav-toggle]');

header.classList.remove('no-js');

function clickOnToggle() {
  toggleNav.addEventListener('click', function () {
    if (header.classList.contains('closed')) {
      header.classList.remove('closed');
      header.classList.add('opened');
    } else {
      header.classList.add('closed');
      header.classList.remove('opened');
    }
  });
}

export {clickOnToggle};
