const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if ((email.split('').length && password.split('').length) === 0) {
    alert(`All fields required`);
  } else (email.split('').length && password.split('').length) === 0;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}
