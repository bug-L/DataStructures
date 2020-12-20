//Udemy Rough Demonstration, in crazy JS Sytnax
//Linked List Data: 10-->5-->16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
/**
 * 1.
 * head: {
 *      value: 10
 *      next:   null
 *      }
 * tail = head
 * length = 1;
 * 
 * 2.
 * newNode {
 *      value: 5
 *      next: null
 *      }
 * tail.next = newNode
 * tail = newNode
 * length = 2
 * 
 * 3.
 * newNode {
 *      value: 15
 *      next: null
 *      }
 * tail.next = newNode
 * tail = newNode
 * length = 3
 */


// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }

//adds new node to the head
// prepend(value) {
//     const newNode = {
//         value: value,
//         next: this.head
//     }
//     this.head = newNode;
//     this.length++;
//     return this;
// }
// }

// LinkedList without a Node class
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head; //since our node only has 1 item at the start, the head is the tail
        this.length = 1;
    }
    //adds new node to the tail
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    //adds new node to the head
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
        return this;
    }

}

//LinkedList with a Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head; //since our node only has 1 item at the start, the head is the tail
        this.length = 1;
    }
    //adds new node to the tail O(1)
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    //adds new node to the head O(1)
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    //inserts new node at a particular index (my attempt)
    // insert(index, value) {
    //     //in case the index is 0, simply prepend
    //     if (index === 0) {
    //         this.prepend(value);
    //         return this;
    //     }
    //     const newNode = new Node(value);
    //     let currentNode = this.head;
    //     for (let i=0; i < index - 1; i++) {
    //         currentNode = currentNode.next;
    //     }
    //     let nextNode = currentNode.next;
    //     currentNode.next = newNode;
    //     newNode.next = nextNode;
    //     this.length++;
    //     return this;
    // }

    
    //insert udemy
    
    insert(index, value) { 
        //check params
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index >= this.length) {
            //just add the value at the end of the list
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader  = this.traverseToIndex(index - 1);
        const temp = leader.next;
        leader.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }

    //remove method (my attempt)
    // remove(index) {
    //     if (index === 0) {
    //         this.head = this.head.next;
    //         this.length--;
    //         return this;
    //     }
    //     if (index >= this.length) {
    //         let currentNode = this.traverseToIndex(this.length - 2);
    //         currentNode.next = null;
    //         this.tail = currentNode;
    //         this.length--;
    //         return this;
    //     }
    //     const prevNode = this.traverseToIndex(index - 1);
    //     prevNode.next = prevNode.next.next;
    //     this.length--;
    //     return this;

    // }

    remove(index) {
        //this was the udemy solution but they forgot to validate 
        //for index 0 and index >= this.length
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    //O(n)
    traverseToIndex(index) {
        //check params 
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    //print the linkedlist in an array
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    //reverse udemy:
    reverse() {
        if (!this.head.next) {
            return this;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

    // //exercise: reverse the linked list (my attempt)
    // reverse() {
    //     const nodeArr = this.printList();
    //     const reversedList = new LinkedList(nodeArr[this.length-1]);
    //     for (let i = this.length - 2; i >= 0; i--) {
    //         reversedList.append(nodeArr[i]);
    //     }
    //     this = reversedList;
    // }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);

myLinkedList.prepend(20);
