class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawun', 'Sikder');


//building an array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
     //linear time (O(n)) because of the shiftItems method call 
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        //Linear time O(n) because of the loop
        for (let i = index; i < this.length-1; i++) {
            this.data[index] = this.data[index+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('cat');
newArray.push('dog');
newArray.delete(1);
console.log(newArray);


const str = 'abc';
console.log(reverse(str));

//this function reverses a string O(n)
function reverse(str) {
    //Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats not good';
    }

    let reversedString = [];
    let totalItems = str.length-1;
    for (let i = totalItems; i >= 0; i--) {
        reversedString.push(str[i]);
    }
    let result = reversedString.join('');
    return result;
}

//built in array methods in javascript
function reverse2(str) {
    return str.split('').reverse().join('');
}

//one line function
const reverse3 = str => str.split('').reverse().join('');

//mergeSortedArrays([0,3,4,31], [4,6,30])
//[0,3,4,4,6,30,31]
function worstMergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
    let sortedArrayLength = arr1.length + arr2.length;
    let arr1Index, arr2Index = 0;

    for (let i = 0; i < sortedArrayLength - 1; i++) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            sortedArray.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            sortedArray.push(arr2Index[arr2Index]);
            arr2Index++;
        }
    }

    return sortedArray;
}

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];

    //get first items
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    //while there is an array1Item or an array2Item
    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
}
