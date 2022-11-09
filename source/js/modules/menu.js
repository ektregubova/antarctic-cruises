let header = document.querySelector('[data-header]');
let toggleNav = document.querySelector('[data-nav-toggle]');
let intro = document.querySelector('[data-intro]');

if (header) {
  header.classList.remove('no-js');
  header.classList.add('is-closed');
}

function clickOnToggle() {
  if (!toggleNav) {
    return;
  }

  toggleNav.addEventListener('click', function () {
    if (header.classList.contains('is-closed')) {
      header.classList.remove('is-closed');
      header.classList.add('is-opened');
      intro.classList.add('is-closed');
    } else {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      intro.classList.remove('is-closed');
    }
  });
}

export {clickOnToggle};
