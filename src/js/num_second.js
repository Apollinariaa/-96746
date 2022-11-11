/*jshint esversion: 8 */
function arrUniqueElements(arr) {
	return arr.filter((item, i, ar) => ar.indexOf(item) === i).map((uniqueElem) => ({
			name: uniqueElem, 
			qty: arr.reduce((count,item) => { 
				if (uniqueElem === item) count++;
				return count; 
			},0) 
		})).sort((a, b) => a.qty > b.qty ? -1 : 1).map(item => { return item.name;});
}
const result = arrUniqueElements(["c", "b", "a", "b", "c", "c", "a" ]);
console.log(result);

