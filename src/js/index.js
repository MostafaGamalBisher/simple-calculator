import { toggleClass, pressToggle, buttonsValueHandler } from './utils.js';
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

/* delete button */
const deleteButtonHandler = () => {
  if (!currentNumber || currentNumber === '0') {
    return;
  }
  if (currentNumber.length === 1) {
    currentNumber = '';
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  updateScreen(currentNumber);
};

const executeOperation = () => {
  if (storedNumber && currentNumber && operation) {
    switch (operation) {
      case '+':
        storedNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
        break;
      case '-':
        storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
        break;
      case '*':
        storedNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
        break;
      case '/':
        storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
        break;
    }
    currentNumber = '';
    updateScreen(storedNumber);
  }
};

const operationButtonHandler = (value) => {
  if (!currentNumber && !storedNumber) {
    return;
  }

  if (currentNumber && !storedNumber) {
    storedNumber = currentNumber;
    currentNumber = '';
  } else if (storedNumber && currentNumber) {
    executeOperation();
  }

  operation = value;
};

/* operation Handler */
const operationHandler = (value) => {
  switch (value) {
    case 'c':
      resetButtonHandler();
      break;

    case 'Backspace':
      deleteButtonHandler();
      break;

    case 'Enter':
      executeOperation();
      break;
    default:
      operationButtonHandler(value);
  }
};

//to not reapting the forEach function and also not attaching all handler to all button
// buttonsElements.forEach((element) => {
//   buttonsValueHandler(element, 'number', numbersHandler);

//   buttonsValueHandler(element, 'operation', operationHandler);
// });

const handlers = {
  number: numbersHandler,
  operation: operationHandler,
};

buttonsElements.forEach((element) => {
  const type = element.dataset.type;
  buttonsValueHandler(element, type, handlers[type]);
});
