'use strict';

const inputForm = document.getElementById('form');
const validator = /^[^\/\\|:*?"<>]+.(?:png|jpg)$/g;

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target: { textInput } } = e;
  const inputValue = textInput.value.trim();

  if (validator.test(inputValue)) {
    console.log('succes: ', inputValue);
  } else {
    console.log('failure: ', inputValue);
  }
  inputForm.reset();
})

