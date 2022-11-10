/*jshint esversion: 8 */
function arrUniqueElements(arr) {
	const uniqueArr = arr.filter((item, i, ar) => ar.indexOf(item) === i);
	const arrObject = [];
	for (let i=0; i< uniqueArr.length; i++) {
		let count = 0;
		for (let j=0; j<arr.length; j++) {
			if (uniqueArr[i] === arr[j]){
				count +=1;
			}
		}
		objct = {
			name: uniqueArr[i],
			qty: count
		};
		arrObject.push(objct);
	}
	arrObject.sort((a, b) => a.qty > b.qty ? -1 : 1);
	return arrObject.map(item => { return item.name;});
}

const result = arrUniqueElements(['keyboard', 'banana','keyboard','fruit','banana', 'keyboard', 'banana']);
console.log(result);
