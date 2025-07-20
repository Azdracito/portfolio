import '@fortawesome/fontawesome-free/js/all.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ScrollSpy, Collapse} from 'bootstrap';
import './tooltip';
import './overflow-handling'


window.addEventListener('DOMContentLoaded', (event) => {
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const toggler = document.querySelector('.navbar-toggler');
  const collapseEl = document.getElementById('navbarResponsive');
  toggler.addEventListener('click', function () {
    let bsCollapse = Collapse.getInstance(collapseEl);
    if (!bsCollapse) {
      bsCollapse = new Collapse(collapseEl, { toggle: false });
    }
    if (collapseEl.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });
});