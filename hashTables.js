let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('YEAAAAAAAAHHHHHHH!');
    }
}

user.age //O(1)
user.spell = 'abra kadabra';
user

class hashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        } 
        this.data[address].push([key, value]);    
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i=0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }


}

const myHasTable = new hashTable(2);
myHasTable.set('grapes', 10000);
myHasTable.set('apples', 291923);

//My Solution 
function firstRecurringChar(shit) {
    if (!shit.length) {
        return undefined;
    }
    const hshtbl = new hashTable(shit.length);
    hshtbl.set(shit[0], true);
    for (let i = 1; i < shit.length; i++) {
        if (hshtbl.get(shit[i]) == true) {
            return shit[i];
        }
        hshtbl.set(shit[i], true);
    }
    return undefined;
}

//udemy solution
function firstRecurringCharacter(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i];
        } else {
            map[input[i]] = true;
        }
        
    }
    console.log(map);
    return undefined;
} //O(n)

//udemy 
function firstRecurringCharacter2(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

function firstRecurringCharacter2Challenge(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (input[i] === input[j]) {
                console.log("First Check: " + input[i]);
                console.log("Second Check: " + input[j]);
                let difference = j - i;
                console.log(difference);
                if (difference > 2) {
                    let newArr = [];
                    let temp = i;
                    for (let k = 0; k < difference - 1; k++) {
                        newArr.push(input[++i]);
                        console.log("i = " + i);
                    }
                    i = temp;
                    console.log(newArr);
                    firstRecurringCharacter2Challenge(newArr);
                } else {
                    return input[i];
                }
            }
        }
    }
    return undefined;
}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);

