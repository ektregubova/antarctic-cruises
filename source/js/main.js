import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addMap} from './modules/map';
import {clickOnToggle, clickOnDocument, clickOnLinks, clickOnEsc} from './modules/menu';
import {onLinkMove} from './modules/anchor';
import {validateForm} from './modules/validation';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  addMap();
  clickOnToggle();
  clickOnDocument();
  clickOnLinks();
  clickOnEsc();
  onLinkMove();
  validateForm();

  window.addEventListener('load', () => {
    initModals();
  });
});
