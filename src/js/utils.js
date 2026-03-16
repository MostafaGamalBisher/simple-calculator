export const toggleClass = (element, toggledClass) => {
  element.classList.toggle(toggledClass);
};

export const pressToggle = (element, toggledClass) => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleClass(element, toggledClass);
    }
  });
};
