//* declaring a new node class
class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

//* declaring a new LinkedList
class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	//* adds a new node to the end of the LinkedList
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	//* adds a new node to the beginning of the LinkedList
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	//* adds a new node at an given index of the LinkedList
	insert(index, value) {
		const newNode = new Node(value);
		let prev, curr;

		//! Checking invalid index input
		if (index < 0) {
			console.log("Enter a valid index");
		}

		//! If the index is the last index, call append function
		if (index >= this.length) {
			this.append(value);
		}

		//!If index is the first element, then call prepend function
		else if (index === 0) {
			this.prepend(value);
		}

		//! adding elemetin the middle of the LinkedList
		else {
			curr = this.head;
			let it = 0;
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}
			newNode.value = value;
			newNode.next = curr;
			prev.next = newNode;
			this.length++;
		}
	}

	//* remove an element at any given index
	remove(index) {
		if (index === 0) {
			let curr = this.head;
			this.head = curr.next;
			this.length--;
		} else {
			let prev, curr;
			curr = this.head;
			let i = 0;
			while (i !== index) {
				i++;
				prev = curr;
				curr = curr.next;
			}
			if (index === this.length - 1) prev.next = null;
			else {
				prev.next = curr.next;
			}
			this.length--;
		}
	}

	//*prints the LinkedList in a sequential order
	printList() {
		var list = " ";
		let curr = this.head;
		while (curr !== null) {
			if (curr.next !== null) {
				list += curr.value + "-->" + " ";
			} else {
				list += curr.value + " ";
			}
			curr = curr.next;
		}
		console.log(list);
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(21);
myLinkedList.prepend(56);
myLinkedList.append(39);
myLinkedList.insert(3, 17);
myLinkedList.insert(6, 23);
myLinkedList.remove(2);
myLinkedList.remove(5);
myLinkedList.remove(5);
myLinkedList.printList();
