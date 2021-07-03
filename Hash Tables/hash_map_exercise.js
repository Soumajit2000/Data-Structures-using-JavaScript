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

arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
arr3 = [1, 2, 3, 4, 5, 6, 34, 56, 23, 3, 5, 2, 1, 34, 4, 3, 6];
arr4 = [1, 2, 3, 4, 5];
firstRepeating(arr4);
