const inputEl = document.querySelector('#validation-input');

function onInputBlur() {
  if (inputEl.value.split('').length === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.toggle('valid');
    inputEl.classList.add('invalid');
  }
}

inputEl.addEventListener('blur', onInputBlur);
