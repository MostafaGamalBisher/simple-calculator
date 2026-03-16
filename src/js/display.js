let storedNumber = '';
let currentNumber = '';
let operation = '';

const resultElement = document.querySelector('.calc__result');

export const updateScreen = (vlaue) => {
  resultElement.textContent = !vlaue ? '0' : vlaue;
};

export const numbersHandler = (value) => {
  if (value === '.' && currentNumber.includes('.')) return;
  if (value === '0' && !currentNumber) return;

  currentNumber += value;
  updateScreen(currentNumber);
};

export const keyboardNumbersDisplaying = (element, dataType) => {
  element.addEventListener('click', () => {
    element.dataset.type === dataType && numbersHandler(element.dataset.value);
  });
};
