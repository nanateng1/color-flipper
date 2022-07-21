'use strict';

const colors = ['green', 'red', ' rgba(133,122,200)', '#f15025', '#ada'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomColor = function () {
    return Math.floor(Math.random() * colors.length);
  };
  const results = randomColor();
  document.querySelector('body').style.backgroundColor = colors[results];
  document.querySelector('.color').textContent = colors[results];

  console.log(randomColor());
});
