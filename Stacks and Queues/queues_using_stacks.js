class Stacks2Queues {
	constructor() {
		this.s1 = [];
		this.s2 = [];
	}

	enqueue(value) {
		const len = this.s1.length;
		for (let i = 0; i < len; i++) {
			this.s2.push(this.s1.pop());
		}
		this.s2.push(value);
		return this;
	}

	dequeue() {
		const len = this.s2.length;
		for (let i = 0; i < len; i++) {
			this.s1.push(this.s2.pop());
		}
		return this.s1.pop();
	}

	peek() {
		if (!this.s1.length && this.s2.length) {
			return "Stack is empty";
		} else if (this.s1.length > 0) {
			return this.s1[this.s1.length - 1];
		} else {
			return this.s2[0];
		}
	}

	isEmpty() {
		if (this.s1.length === 0 && this.s2.length === 0) {
			return true;
		}
		return false;
	}
}

const Queue1 = new Stacks2Queues();
Queue1.enqueue(2);
Queue1.enqueue(64);
Queue1.enqueue(53);
Queue1.dequeue();
Queue1.dequeue();
Queue1.enqueue(97);
Queue1.enqueue(14);
Queue1.enqueue(59);
Queue1.enqueue(66);
Queue1.dequeue();
console.log(Queue1.enqueue(12));