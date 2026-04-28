const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const inputs = Object.fromEntries(formData.entries());

  for (const name in inputs) {
    inputs[name] = inputs[name].trim();
  }

  const isComplete = Object.values(inputs).every(value => value !== '');
  if (isComplete) {
    console.log(inputs);
    event.target.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
