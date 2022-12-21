const decrButton = document.querySelector('[data-action="decrement"]');

const incrButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onIncrButtonClick = () => {
  counterValue += 1;
  document.querySelector('#value').innerHTML = counterValue;
};

const onDecrButtonClick = () => {
  counterValue -= 1;
  document.querySelector('#value').innerHTML = counterValue;
};

decrButton.addEventListener('click', onDecrButtonClick);
incrButton.addEventListener('click', onIncrButtonClick);
