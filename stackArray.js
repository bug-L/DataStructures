

//udemhy
class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        return this.array.pop();
    }

}

class stack {
    constructor() {
        this.arr = [];
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

        if (this.length === 0) {
            this.arr.push(value);
            this.top = value;
            this.bottom = value;
        } else {
            this.arr.push(value);
            this.top = value;
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
        const holdingPointer = this.arr.pop();
        this.length--;
        this.top = this.arr[this.length - 1];
        return holdingPointer;
    }
    //checks if our stack is empty
    isEmpty() {
        return this.length === 0;
    }
}
