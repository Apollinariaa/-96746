/*jshint esversion: 8 */
function arrUniqueElements(arr) {
	const arrObjects = [];
	arr.filter((item, i, ar) => ar.indexOf(item) === i).sort().map((uniqueElem) => {
		objct = { 
			name: uniqueElem, 
			qty: arr.reduce((count,item) => { (uniqueElem === item) ? count++: count; return count; },0)
		};
		arrObjects.push(objct);
	});
	console.log(arrObjects);
	return arrObjects.sort((a, b) => a.qty > b.qty ? -1 : 1).map(item => { return item.name;});
}

const result = arrUniqueElements(["c", "b", "a","b","c","c","a" ]);
console.log(result);

//[ { name: 'a', qty: 2 }, { name: 'b', qty: 2 }, { name: 'c', qty: 3 } ]
//[ 'c', 'a', 'b' ]

