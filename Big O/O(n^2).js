//Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

for (let i = 0; i < boxes.length; i++) {
	for (let j = 0; j < boxes.length; j++) {
		console.log(boxes[i], boxes[j]);
	}
	if (i != boxes.length - 1) console.log("Next pairing");
}
//O(n^2) - Quadratic time
