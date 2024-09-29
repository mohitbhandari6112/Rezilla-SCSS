import ready, { HTML } from './utils';

ready(() => {
  HTML.classList.add('is-loaded');
});
document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.querySelector('.property-dropdown');

  selectElement.addEventListener('change', function () {
    if (selectElement.value === '') {
      selectElement.classList.add('select-placeholder');
    } else {
      selectElement.classList.remove('select-placeholder');
    }
  });

  selectElement.dispatchEvent(new Event('change'));
});

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.querySelector('.property-room-dropdown');

  selectElement.addEventListener('change', function () {
    if (selectElement.value === '') {
      selectElement.classList.add('select-placeholder');
    } else {
      selectElement.classList.remove('select-placeholder');
    }
  });

  selectElement.dispatchEvent(new Event('change'));
});
