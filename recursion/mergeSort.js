function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    const split = parseInt(array.length / 2)
    const leftArray = mergeSort(array.slice(0, split))
    const rightArray = mergeSort(array.slice(split))
    return merge(leftArray, rightArray)
}

function merge(leftArray, rightArray) {
    let left = 0
    let right = 0
    let merged = []
    console.log("left", leftArray, "right", rightArray)

    while (leftArray.length > left && rightArray.length > right) {
        if (leftArray[left] <= rightArray[right]) {
            merged.push(leftArray[left])
            left++
        } else {
            merged.push(rightArray[right])
            right++
        }
    }
    merged.push(...leftArray.slice(left))
    merged.push(...rightArray.slice(right))

    console.log("merged", merged)
    return merged
}

console.log(mergeSort([3, 7, 8, 5, 4, 2, 6, 1]))
