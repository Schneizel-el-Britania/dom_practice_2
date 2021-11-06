'use strict';

const filterData = (array, prop, value) => array.filter(element => element[prop] === value);
const showData = (array, prop) => array.forEach(element => console.log(element[prop]));

fetch('./assets/js/fruits.json').then((data) => data.json()).then((item) => {
  
  console.group('Fruit names');
  showData(item, 'fruit');
  console.groupEnd();

  console.group('Only red');
  showData(filterData(item, 'color', 'Red'), 'fruit');
  console.groupEnd();

  console.group('Only large');
  showData(filterData(item, 'size', 'Large'), 'fruit');
  console.groupEnd();

})