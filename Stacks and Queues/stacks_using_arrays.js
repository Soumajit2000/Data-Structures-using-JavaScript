class Stacks {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
}

const myStack = new Stacks;
console.log(myStack.peek())

myStack.push("google")
myStack.push("twitter")
console.log(myStack.push("udemy"))
console.log(myStack.peek());
myStack.pop()
myStack.pop()
console.log(myStack.pop())

