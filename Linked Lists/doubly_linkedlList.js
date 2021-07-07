class Node {
	constructor(value) {
		(this.value = value), (this.next = null), (this.prev = null);
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(value, index) {
		const newNode = new Node(value);
		if (index < 0) {
			console.log("Enter a valid index");
		} else if (index === 0) {
			this.prepend(value);
		} else if (index > this.length) {
			this.append(value);
		} else {
			let curr, prev;
			curr = this.head;
			let i = 0;
			while (i < index) {
				i++;
				prev = curr;
				curr = curr.next;
			}
			newNode.next = curr;
			newNode.prev = prev;
			prev.next = newNode;
			curr.prev = newNode;
			this.length++;
		}
	}

	remove(index) {
		if (index === 0) {
			let curr = this.head.next;
			this.head = curr;
			this.length--;
		} else if (index > this.length) {
           this.tail = this.tail.prev
           this.tail.next = null
           this.length--
		}
        else {
            let curr, prev;
            curr = this.head;
            let i=0;
            while(i< index){
                i++
                prev = curr;
                curr = curr.next
            }
            prev.next = curr.next;
            curr.next.prev = prev
            this.length --
        }
	}

	printlist() {
		let str = " ";
		let curr = this.head;
		while (curr !== null) {
			if (curr.next !== null) {
				str += curr.value + "-->" + " ";
			} else {
				str += curr.value + " ";
			}
			curr = curr.next;
		}
		console.log(str);
	}
}

const myDoublyLinkedlist = new DoublyLinkedList(10);
myDoublyLinkedlist.append(14);
myDoublyLinkedlist.prepend(28);
myDoublyLinkedlist.insert(58, 1);
myDoublyLinkedlist.insert(91, 8);
myDoublyLinkedlist.insert(7, 0);
myDoublyLinkedlist.remove(0);
myDoublyLinkedlist.remove(10);
myDoublyLinkedlist.remove(1);
myDoublyLinkedlist.printlist();
