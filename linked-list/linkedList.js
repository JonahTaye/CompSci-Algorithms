export class LinkedList {
    constructor() {
        this.headNode = null
    }

    append(value) {
        const node = new Node(value)
        if(this.headNode === null) {
            this.headNode = node
        } else {
            let currentNode = this.headNode

            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode
            }

            currentNode.nextNode = node
        }
        
    }

    prepend(value) {
        const node = new Node(value)
        if (this.headNode === null) this.headNode = node
        else {
            node.nextNode = this.headNode
            this.headNode = node
        }
    }

    size() {
        let currentNode = this.headNode
        let count = 0
        const LASTNODE = 1

        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
            count++
        }
        count += LASTNODE
        console.log("Nodes: ", count)
        return count
    }

    head() {
        let head = null
        if(this.head === null) head = this.headNode
        else head = this.headNode.value

        console.log("Head: ", head)
        return head
    }

    tail() {
        let currentNode = this.headNode
        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
        }

        console.log("Tail: ", currentNode.value)
        return currentNode.value
    }

    at(index) {
        let currentNode = this.headNode
        let count = 0

        if (index < 0) console.log("Negative index not allowed")

        while(count !== index) {
            if(currentNode.nextNode === null) console.log("Index out of bounds")
            currentNode = currentNode.nextNode
            count++
        }

        console.log("Node: ", currentNode.value)
        return currentNode.value
    }

    pop() {
        let currentNode = this.headNode
        let previousNode = null
        
        while(currentNode.nextNode !== null) {
            previousNode = currentNode
            currentNode = currentNode.nextNode
        }

        if (previousNode === null) console.log("Link is Empty")
        previousNode.nextNode = null
    }

    contains(value) {
        let currentNode = this.headNode

        while(currentNode.nextNode !== null) {
            if (currentNode.value === value) return true
            currentNode = currentNode.nextNode
        }

        const lastNode = currentNode
        if (lastNode.value === value) return true
        else return false
    }

    find(value) {
        let currentNode = this.headNode
        let count = 0

        while(currentNode.nextNode !== null) {
            if (currentNode.value === value) return count
            currentNode = currentNode.nextNode
            count++
        }

        const lastNode = currentNode
        if(lastNode.value === value) return count
        else return null
    }

    insertAt(value, index) {
        const node = new Node(value)
        let currentNode = this.headNode
        let previousNode = null
        let count = 0

        if (index < 0) console.log("Negative index not allowed")

        while(currentNode.nextNode !== null) {
            if (count === index) break
            previousNode = currentNode
            currentNode = currentNode.nextNode
            
            count++
        }

        if (index > count) console.log("Index out of bounds")

        if (currentNode.nextNode === null) {
            node.nextNode = null
            currentNode.nextNode = node
        } else if (previousNode === null) {
            node.nextNode = currentNode
            this.headNode = node
        } else {
            node.nextNode = currentNode
            previousNode.nextNode = node
        }
    }

    removeAt(index) {
        let currentNode = this.headNode
        let previousNode = null
        let count = 0

        if (index < 0) return "Negative index not allowed"

        while(currentNode.nextNode !== null) {
            if (count === index) break
            previousNode = currentNode
            currentNode = currentNode.nextNode
            
            count++
        }

        if (index > count) return "Index out of bounds"

        if (currentNode.nextNode === null) {
            previousNode.nextNode = null
        } else if (previousNode === null) {
            this.headNode = currentNode.nextNode
        } else {
            previousNode.nextNode = currentNode.nextNode
        }
    }
    toString() {
        let currentNode = this.headNode
        let string = ''
        while(currentNode.nextNode !== null) {
            string += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
        }

        string += `( ${currentNode.value} ) -> null`
        console.log(string)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}