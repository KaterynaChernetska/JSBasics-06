const input = document.querySelector('#name-input');

input.addEventListener('input', onInputFill);

function onInputFill(event) {
  document.querySelector('#name-output').textContent = event.currentTarget.value;

  if (event.currentTarget.value.split('').length === 0) {
    document.querySelector('#name-output').textContent = 'Anonymous';
  }
}
