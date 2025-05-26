import { buildTree } from "./treeBuilder.js"
import { Node } from "./treeBuilder.js"

export class Tree {
    constructor(arr) {
        this.root = buildTree(arr)
    }

    insert(value) {
        let root = this.root

        const addValue = function (root, value) {
            if (root === null) {
                return new Node(value)
            }

            if (root.data === value) return root
            else if (root.data > value) root.left = addValue(root.left, value)
            else root.right = addValue(root.right, value)

            return root
        }

        return addValue(root, value)
    }

    deleteItem(value) {
        let root = this.root
        let data = null

        const findNode = function (root, value) {
            if (root === null) {
                return null
            }

            if (root.data === value) {
                if (root.left !== null && root.right !== null) {
                    root.data = successorNode(root, value)
                    root.right = findNode(root.right, data)
                }
                else if (root.left === null && root.right === null) return null
                else if (root.left !== null) return root.left
                else if (root.right !== null) return root.right

            }
            else if (root.data > value) root.left = findNode(root.left, value)
            else root.right = findNode(root.right, value)

            return root
        }

        const successorNode = function (root, value) {
            if (root.left === null) {
                return root.data
            }

            if (root.data > value) data = successorNode(root.left, value)
            else data = successorNode(root.right, value)

            return data
        }

        return findNode(root, value)
    }

    find(value) {
        let root = this.root

        const findNode = function (root, value) {
            if (root === null) {
                return null
            }

            if (root.data === value) return root
            else if (root.data > value) root = findNode(root.left, value)
            else root = findNode(root.right, value)

            return root
        }

        return findNode(root, value)
    }

    levelOrder(callback) {
        let root = this.root
        let queue = [root]

        // iterative solution for level Order traversal
        const traverseNode = function () {
            while (queue.length >= 1) {
                let node = queue.shift()
                callback(node)
                if (node.left !== null) queue.push(node.left)
                if (node.right !== null) queue.push(node.right)
            }

            return queue
        }

        const recTraverseNode = function (queue) {
            let node = queue.shift()
            if (node === undefined) return


            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
            callback(node)
            return recTraverseNode(queue)
        }

        recTraverseNode(queue)
    }

    preOrder(callback) {
        let root = this.root

        const traverseNode = function (root) {
            callback(root)
            if (root.left !== null) traverseNode(root.left)
            if (root.right !== null) traverseNode(root.right)
        }

        return traverseNode(root)
    }

    inOrder(callback) {
        let root = this.root

        const traverseNode = function (root) {
            if (root.left !== null) traverseNode(root.left)
            callback(root)
            if (root.right !== null) traverseNode(root.right)
        }

        return traverseNode(root)
    }

    postOrder(callback) {
        let root = this.root

        const traverseNode = function (root) {
            if (root.left !== null) traverseNode(root.left)
            if (root.right !== null) traverseNode(root.right)
            callback(root)
        }

        return traverseNode(root)
    }

    height(value) {
        let root = this.root

        const findNode = function (root, value) {
            if (root === null) return null

            if (root.data === value) return root
            else if (root.data > value) root = findNode(root.left, value)
            else root = findNode(root.right, value)

            return root
        }

        const heightNode = function (node) {
            if (node === null) return -1

            const leftHeight = heightNode(node.left)
            const rightHeight = heightNode(node.right)
            
            return Math.max(leftHeight, rightHeight) + 1
        }

        const node = findNode(root, value)
        if(!node) return null

        return heightNode(node)
    }

    depth(value) {
        let root = this.root
        let height = -1

        const findNode = function (root, value) {
            if (root === null) return null

            height++
            if (root.data === value) return height
            else if (root.data > value) root = findNode(root.left, value)
            else root = findNode(root.right, value)

            return root
        }

        return findNode(root, value)
    }

    isBalance() {
        let root = this.root
        
        const heightNode = function (node) {
            if (node === null) return 1

            const left = heightNode(node.left)
            const right = heightNode(node.right)

            if(Math.abs(left - right) > 1) return -1

            return Math.max(left, right) + 1
        }

        let balance = heightNode(root)

        if(balance <= 0) return "unbalanced"
        else return "balanced" 
    }

    rebalance() {
        const array = []
        let root = this.root

        const nodeData = function(root) {
            array.push(root.data)

            if(root.left !== null) nodeData(root.left)
            
            if (root.right !== null) nodeData(root.right)
        }
        nodeData(root)
        this.root = buildTree(array)
        
    }
}

