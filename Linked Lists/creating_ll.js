// 10-->5-->16
// let myLinkedList = {
//     head : 10,
//     next : {
//         head: 5,
//         next : {
//             head: 16,
//             next: null
//         }
//     }
// }
class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(21);
myLinkedList.prepend(56);
myLinkedList.append(39);
console.log(myLinkedList);
