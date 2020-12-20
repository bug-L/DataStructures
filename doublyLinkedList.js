//Udemy Solution
class doublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null,
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        follower.prev = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        this.length++;
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

}

//My Solution:
class doublyLinkedList {
constructor(value) {
    this.head = {
        value: value,
        next: null,
    }
    this.tail = this.head;
    this.length = 1;        
}

append(value) {
    const newNode = {
        value: value,
        next: null,
        prev: this.tail
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
}

prepend(value) {
    const newNode = {
        value: value,
        next: this.head,
    }
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
}

insert(index, value) {
    if (index === 0) {
        this.prepend(value);
        this.length++;
        return this.printList();
    }
    if (index >= this.length - 1) {
        this.append(value);
        this.length++;
        return this.printList();
    }
    
    
    const prevNode = this.traverseToIndex(index - 1);
    const newNode = {
        value: value,
        next: prevNode.next,
        prev: prevNode   
    }
    const nextNode = prevNode.next
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return this.printList();
}

remove(index) {
    const removeNode = this.traverseToIndex(index);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}

printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return array;
}

traverseToIndex(index) {
    let currentNode = undefined;
    if (index <= (this.length / 2)) {
        let counter = 0;
        currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
    } else {
        let counter = this.length - 1;
        currentNode = this.tail;
        while (counter !== index) {
            currentNode = currentNode.prev;
            counter--;
        }
    }        
    return currentNode;
    } 
}


