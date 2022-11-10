/*jshint esversion: 8 */
function multiplicationItemsArr(...rest) {
	lengthArr = rest.length;
	const newArr = rest.map((item) => item*lengthArr);
	return newArr;
}

const result = multiplicationItemsArr(3,5,6,7,8,10);
console.log(result);