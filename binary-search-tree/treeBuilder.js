import { mergeSort } from "./mergeSort.js"

export class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export function buildTree(array) {
    let sorted = mergeSort(removeDuplicate(array))
    return searchTree(sorted, 0, sorted.length - 1)
}

function removeDuplicate(array) {
    let cleanedArray = new Set()
    for(let item of array) {
        cleanedArray.add(item)
    }

    return [...cleanedArray]
}

function searchTree(sortedArr, start, end) {
    if (start > end) return null

    const middle = Math.ceil((start + end) / 2)

    const root = new Node(sortedArr[middle])
    root.left = searchTree(sortedArr, start, middle - 1)
    root.right = searchTree(sortedArr, middle + 1, end)
    return root
}
