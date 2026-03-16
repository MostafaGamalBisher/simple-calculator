import { toggleClass, pressToggle } from './utils.js';
import { keyboardNumbersDisplaying } from './display.js';

const toggleButton = document.querySelector('.themes__toggle');
const numbersElements = document.querySelectorAll('[data-type]');

toggleButton.addEventListener('click', () => {
  toggleClass(toggleButton, 'themes__toggle--isActive');
});

pressToggle(toggleButton, 'themes__toggle--isActive');

numbersElements.forEach((element) => {
  keyboardNumbersDisplaying(element, 'number');
});
