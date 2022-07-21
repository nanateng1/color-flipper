'use strict';

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += hex[getRandom()];
  }
  console.log(hexCode);
  document.querySelector('body').style.backgroundColor = hexCode;
  document.querySelector('.color').textContent = hexCode;
});

let getRandom = function () {
  return Math.floor(Math.random() * hex.length);
};
