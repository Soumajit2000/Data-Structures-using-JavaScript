// const array1 = ["a", "b", "c", "x"];
// const array2 = ["a", "j", "d"];
//should return false
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
//should return true

const array1 = ["a", "b", "c", "x"];
const array2 = ["k", "j", "d"];
var map = {};

//* loop through first array and create a object where properties === items in the array
for (let i = 0; i < array1.length; i++) {
	if (!map[array1[i]]) {
		const item = array1[i];
		map[item] = true;
	}
}

//* loop through the second array and find if the items in the second array is present in the created object
function haveCommonElements(arr2) {
	for (let i = 0; i < arr2.length; i++) {
		if (map[arr2[i]]) return true;
	}
	return false;
}

console.log(haveCommonElements(array2));
