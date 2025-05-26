export function mergeSort(array) {
    if (array.length <= 1) return array

    const middle = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, array.length))

    return merge(left, right) 
}

function merge(left, right) {
    let countLeft = 0
    let countRight = 0
    let merged = []

    while(left.length > countLeft && right.length > countRight) {
        if (left[countLeft] <= right[countRight]) {
            merged.push(left[countLeft])
            countLeft++
        } else {
            merged.push(right[countRight])
            countRight++
        }
    }
    
    merged.push(...left.slice(countLeft))
    merged.push(...right.slice(countRight))

    return merged
}
