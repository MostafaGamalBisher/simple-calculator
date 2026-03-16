const resultElement = document.querySelector('.calc__result');
console.log(resultElement);
const numbersElements = document.querySelectorAll('[data-type]');

const printElemen = () => {
  numbersElements.addEventListner('click', () => {
    numbersElements.dataset.type === 'number' && console.log('hello world!');
  });
};
