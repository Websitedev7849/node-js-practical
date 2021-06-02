// Create a Node.js Application that uses user defined module circle.js which exports the functions are () and circumference () and display the details on
console.

const {area, circumference} = require('./circle');

const radius = 4;

console.log(`The area of circle with radius ${radius} is ${area(radius)}`);
console.log(`The circumference of circle with radius ${radius} is ${circumference(radius)}`);