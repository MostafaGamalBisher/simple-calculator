//adding and removing a class
export const toggleClass = (element, toggledClass) => {
  element.classList.toggle(toggledClass);
};

//attaching an element and adding click eventlistener to toggle a class
export const pressToggle = (element, toggledClass) => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleClass(element, toggledClass);
    }
  });
};

// attaching element and its datatype and handling its a value
export const buttonsValueHandler = (element, dataType, handler) => {
  element.addEventListener('click', () => {
    element.dataset.type === dataType && handler(element.dataset.value);
  });
};
//the value of the handler will be setted automaticlly by selecting the element and it's passed to the handler to be handled
//numbersHandler(element.dataset.value) means the function will handle for example the value of button 2 with the value of 2
//operationHandler(element.dataset.value) means handling the value of the clicked button for example reset and passes the value to the faunctions that attach the right excution of the button and its value

//instead of repeating, passing the handlers as parameters and attching the value automaticlly
