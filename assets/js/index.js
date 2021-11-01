'use strict';

const messageArray = [];
let eventCounter = 0;

const form = document.getElementById('root-form');
const list = document.getElementById('lists');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target: { textInput } } = e;
  //после нажатия на кнопку добавлять значение инпута в массив, если оно не пустое
  const inputValue = textInput.value.trim();
  if (inputValue) {
    messageArray.push(inputValue);
    // addElementToList(inputValue, list);
    //после добавления - очищать форму
    form.reset();
  }
  //рендерить на странице то, что добавилось в массив
  console.dir(messageArray);
  addElementToList(messageArray[eventCounter++], list);
})

function createElement(type, { classNames, typeEvent, onClick }, ...children) {
  const elem = document.createElement(type);
  if (classNames) { elem.classList.add(...classNames); }
  if (typeEvent && onClick) { elem.addEventListener(typeEvent, onClick); }
  if (children) { elem.append(...children); }
  return elem;
}

function addElementToList(data, list) {
  const item = createElement('li', {}, data);
  list.append(item);
}
