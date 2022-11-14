import {FocusLock} from '../utils/focus-lock';

const header = document.querySelector('[data-header]');
const toggleNav = document.querySelector('[data-nav-toggle]');
const intro = document.querySelector('[data-intro]');
const headerLinks = document.querySelectorAll('[data-header-link]');
const wrapperBody = document.querySelector('[data-wrapper]');

const focus = new FocusLock();

if (header) {
  header.classList.remove('no-js');
  header.classList.add('is-closed');
}

function pressKeydownMenu(evt) {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
  if (isEscKey) {
    evt.preventDefault();
    closeMenu();
  }
}

function openMenu() {
  header.classList.remove('is-closed');
  header.classList.add('is-opened');
  intro.classList.add('is-closed');
  wrapperBody.classList.add('overlay');
  focus.lock('[data-header]');
}

function closeMenu() {
  header.classList.add('is-closed');
  header.classList.remove('is-opened');
  intro.classList.remove('is-closed');
  wrapperBody.classList.remove('overlay');
  focus.unlock();
}

function clickOnToggle() {
  if (!toggleNav) {
    return;
  }

  toggleNav.addEventListener('click', function () {
    if (header.classList.contains('is-closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

function clickOnDocument() {
  document.addEventListener('click', function (evt) {
    if (!evt.target.closest('[data-header]')) {
      closeMenu();
    }
  });
}

function clickOnEsc() {
  document.addEventListener('keydown', pressKeydownMenu);
}

function clickOnLinks() {
  for (let link of headerLinks) {
    link.addEventListener('click', function () {
      if (header.classList.contains('is-closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
}

export {clickOnToggle, clickOnDocument, clickOnLinks, clickOnEsc};
