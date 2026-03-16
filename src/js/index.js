import { toggleClass, pressToggle } from './utils.js';

const toggleButton = document.querySelector('.themes__toggle');

toggleButton.addEventListener('click', () => {
  toggleClass(toggleButton, 'themes__toggle--isActive');
});

pressToggle(toggleButton, 'themes__toggle--isActive');
