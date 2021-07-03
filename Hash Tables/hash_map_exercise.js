function firstRepeating(arr) {
	let set = new Set();
	let min = -1;
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) {
			min = arr[i];
			break;
		} else {
			set.add(arr[i]);
		}
	}
	if (min > 0) {
		return min;
	} else {
		console.log(undefined);
	}
}

//! METHOD 2 USING HASH MAP
function firstRepeating2(arr) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]] !== undefined) {
			return arr[i]
		} else {
			map[arr[i]] = i;
		}
	}
}

arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
arr3 = [1, 2, 3, 4, 5, 6, 34, 56, 23, 3, 5, 2, 1, 34, 4, 3, 6];
arr4 = [1, 2, 3, 4, 5];
console.log(firstRepeating2(arr3));
