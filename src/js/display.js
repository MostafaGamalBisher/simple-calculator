const resultElement = document.querySelector('.calc__result');

// updating the screen with the passed value
export const updateScreen = (value) => {
  resultElement.textContent = !value ? '0' : value;
};
