class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    //Left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if(value === currentNode.value) {
                //Match found
                //Option 1: No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left
                        //left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        
                        //if parent < current value, make left child a
                        //right child of parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                    
                //Option 2: Right child which doesn't have a left child
                } else if(currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left
                        //the parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                        //if parent < current, make right child a right child
                        //of the parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                //Option 3: Right child that has a left child
                } else {
                    
                    //find the right child's leftmost child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    myRemove(value) {
        let currentNode = this.root;
        let prevNode = null;

        while(currentNode) {
            if(value < currentNode.value) {
                prevNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                prevNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                
            }
        }
    }

    myLookup(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }


    myInsert(value) { 
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let parentNode = this.root;
        let childNode = this.root;
        while (childNode !== null) {
            parentNode = childNode;
            if (value < parentNode.value) {
                childNode = parentNode.left;
            } else if (value > parentNode.value) {
                childNode = parentNode.right;
            } else {
                return this;
            }
        }

        if (value < parentNode.value) {
            parentNode.left = newNode;
        } else if (value > parentNode.value) {
            parentNode.right = newNode;
        }
        
        return this;
    
    }


}