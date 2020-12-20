class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }   
    //see the top node
    peek() {
        return this.top;
    }
    //add node to top of stack
    push(value) {
        const newNode = new Node(value);
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
    //remove node from top of stack
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
    //checks if our stack is empty
    isEmpty() {
        return this.length === 0;
    }
}

//My SOlution (very incomplete)
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }   
    //see the top node
    peek() {
        return this.top;
    }
    //add node to top of stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
        }
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }
    //remove node from top of stack
    pop() {
        const topNode = this.top;
        this.top = this.top.next;
        this.length--;
        return topNode;
    }
    //checks if our stack is empty
    isEmpty() {
        return this.length === 0;
    }
}