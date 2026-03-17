import { toggleClass, pressToggle, buttonsVlaueHandler } from './utils.js';
import { updateScreen } from './display.js';

let storedNumber = '';
let currentNumber = '';
let operation = '';

/* toggle */
const toggleButton = document.querySelector('.themes__toggle');
const buttonsElements = document.querySelectorAll('[data-type]');

toggleButton.addEventListener('click', () => {
  toggleClass(toggleButton, 'themes__toggle--isActive');
});

pressToggle(toggleButton, 'themes__toggle--isActive');

/* display current value to the screen */
const numbersHandler = (value) => {
  if (value === '.' && currentNumber.includes('.')) {
    return;
  }
  if (value === '0' && !currentNumber) {
    return;
  }

  currentNumber += value;
  updateScreen(currentNumber);
};

/* reset button */
const resetButtonHandler = () => {
  storedNumber = '';
  currentNumber = '';
  operation = '';
  updateScreen(currentNumber);
};

/* operation Handler */
const operationHandler = (value) => {
  switch (value) {
    case 'c':
      resetButtonHandler();
      break;
  }
};

buttonsElements.forEach((element) => {
  buttonsVlaueHandler(element, 'number', numbersHandler);

  buttonsVlaueHandler(element, 'operation', operationHandler);
});
