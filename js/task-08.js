const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event)
{
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  
  if (email.length === 0 || password.length === 0)
  {
   return alert(`All fields required`);
  }
  else   {
    const formData = {
      email,
      password,
    }
    console.log(formData);
    form.reset();

  }
    
}
