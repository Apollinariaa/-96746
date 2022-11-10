/*jshint esversion: 8 */
const multiplicationItemsArr = (...rest) => rest.map((item) => item*rest.length);
const result = multiplicationItemsArr(3,5,6,7,8,10);
console.log(result);