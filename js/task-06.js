const inputEl = document.querySelector('#validation-input');

function onInputBlur() {
  const isValid = inputEl.value.length === Number(inputEl.getAttribute('data-length'));
  inputEl.classList.toggle('valid', isValid);
  inputEl.classList.toggle('invalid', !isValid); 
 
}

inputEl.addEventListener('blur', onInputBlur);
