import { Tree } from "./BST.js"

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

const generateArrays = (n) => {
    let count = 0
    const arrays = []
 
    while(count <= n) {
        arrays.push(Math.floor(Math.random() * n))
        count++
    }
    
    return arrays
}

const array = generateArrays(30)
const test = new Tree(array)
prettyPrint(test.root)
console.log("The tree is", test.isBalance())

console.log("--------------Level-Order-----------------")
test.levelOrder((node) => console.log(node.data))

console.log("-----------Pre-Order--------------------")
test.preOrder((node) => console.log(node.data))

console.log("------------In-Order-------------------")
test.inOrder((node) => console.log(node.data))

console.log("------------Post-Order-------------------")
test.postOrder((node) => console.log(node.data))

console.log("-----------Inserted-Array-------------------")
test.insert(61)
test.insert(62)
test.insert(63)
test.insert(64)
console.log("Inserted Items", 61, 62, 63, 64)
prettyPrint(test.root)

console.log("-----------Deleted-Array--------------------")
test.deleteItem(array[2])
test.deleteItem(array[3])
test.deleteItem(array[4])
console.log("Deleted Items", array[2], array[3], array[4])
prettyPrint(test.root)

console.log("The tree is", test.isBalance())

console.log("------------Balanced-Tree-------------------")
test.rebalance()
prettyPrint(test.root)
console.log("The tree is", test.isBalance())


