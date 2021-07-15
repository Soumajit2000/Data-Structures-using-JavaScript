class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(data) {
		const newNode = new Node(data);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.top) {
			return null;
		}

		if (this.bottom === this.top) {
			this.bottom = null;
		}
		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return holdingPointer;
	}
}

const myStack = new Stack();
myStack.peek();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Twitter");
console.log(myStack.push("Youtube"));
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek())