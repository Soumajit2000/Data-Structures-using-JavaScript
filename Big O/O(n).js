// const { performance } = require("perf_hooks");
const nemo = ["nemo"];
const array = new Array(100).fill("nemo");

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] == "nemo") {
			console.log("Found Nemo!");
		}
	}
}

findNemo(array); // O(n) --> Linear time
