function fibs(n) {
    let count = n
    let fibsArray = [0, 1]

    while (fibsArray.length < count) {
        let fibSum = fibsArray.at(-1) + fibsArray.at(-2)
        fibsArray.push(fibSum)
    }

    return fibsArray
}

function fibsRec(n) {
    let fibsArray = [0, 1]

    function recursiveFunc(n) {
        if (fibsArray.length >= n) return fibsArray
        else {
            let fibSum = fibsArray.at(-1) + fibsArray.at(-2)
            fibsArray.push(fibSum)
            return recursiveFunc(n)
        }
    }

    return recursiveFunc(n)
}


console.log(fibsRec(8))
console.log(fibs(8))