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
		let lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
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
console.log(myArray);
myArray.push("leicester");
myArray.push("spurs");
console.log(myArray);
myArray.pop();
console.log(myArray);
console.log(myArray.get(0));
myArray.deleteAtIndex(1);
console.log(myArray);
