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
export const buttonsVlaueHandler = (element, dataType, handler) => {
  element.addEventListener('click', () => {
    element.dataset.type === dataType && handler(element.dataset.value);
  });
};
