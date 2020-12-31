'use strict';

// Selecting class
console.log(document.querySelector('.message'));

// Get text from dom element
console.log(document.querySelector('.message').textContent);

// Selecting # id; returns null because doesn't exist
console.log(document.querySelector('#message'));
