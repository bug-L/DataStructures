// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false

// Notes:

// You must use only standard operations of a stack -- which means
//  only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate 
// a stack by using a list or deque (double-ended queue), as long as you use only 
// standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or 
// peek operations will be called on an empty queue).


class MyQueue {
    constructor() {
        this.stack = new Stack();
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        if (this.length === 0 ) {
            this.stack.push(value);
            this.first = this.stack.peek();
            this.last = this.first;
        } else {
            this.stack.push(value);
            this.last = this.stack.peek();
        }
        this.length++;
        return this.last;        
    }
    dequeue() {
        const arr = [];
        while (!this.stack.isEmpty()) {
            arr.push(this.stack.pop());
        }
        for (let i = arr.length - 2; i >= 0; i--) {
            this.stack.push(arr[i]);
        }
        const dequedItem = arr[arr.length-1];
        this.first = arr[arr.length - 2];        
        this.length--;
        return dequedItem;
    }
}

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
    isEmpty() {
        return this.array.length === 0;
    }
}
