class Array {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return this.data;
	}

	deleteAtIndex(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const myArray = new Array();
myArray.push("mancity");
myArray.push("chelsea");
myArray.push("liverpool");
myArray.pop();
console.log(myArray);
myArray.push("leicester");
myArray.push("West ham");
console.log(myArray);
myArray.deleteAtIndex(2);
console.log(myArray);