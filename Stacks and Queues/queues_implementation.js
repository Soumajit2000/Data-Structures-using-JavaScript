class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const myNode = new Node(value);
		if (this.length === 0) {
			this.first = myNode;
			this.last = myNode;
		} else {
			this.last.next = myNode;
			this.last = myNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (this.length === 0) {
			return null;
		}

		if (this.first === this.last) {
			this.last = null;
		}
        const holdingPointer = this.first;
		this.first = this.first.next;
		this.length--;
		return this;
	}
}

const myQueue = new Queue();
// console.log(myQueue.peek());
myQueue.enqueue("KDB");
myQueue.enqueue("Dias");
console.log(myQueue.enqueue("Sterling"));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
