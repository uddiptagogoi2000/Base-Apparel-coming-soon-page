const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  checkEmail(email);
})

const checkEmail = (emailInput) => {
  if (emailInput === '') {
    setError('Email Address cannot be empty')
  } else if (!isEmail(emailInput)) {
    setError('Please provide a valid email')
  } else setSuccess();
}

const setError = (msg) => {
  const formControl = document.querySelector('.form-control');
  const errorText = document.querySelector('#error-text');
  // Add error class
  formControl.className = 'form-control error';
  // set msg
  errorText.textContent = msg;
}

const setSuccess = () => {
  const formControl = document.querySelector('.form-control');
  formControl.className = 'form-control';
} 

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}