'use strict';

const timer = function (start = 1, end = 10) {
  for (let i = start; i <= end; i++) {
    setTimeout(() => console.log(start++), i * 500);
  }
}

timer();