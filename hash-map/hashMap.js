import { LinkedList } from "./linkedList.js"

export class HashMap {
    constructor() {
        this.bucket = new Array(16)
        this.capacity = 0
        this.loadFactor = 0
    }

    set(key, value) {
        this.loadFactor = this.capacity / this.bucket.length

        if (this.loadFactor > 0.75) {
            this.grow()
            this.capacity = 0
        }
        
        const array = this.bucket
        const hashValue = hash(key, this.bucket.length)
        const list = new LinkedList

        if (array[hashValue] === undefined) {
            list.append([key, value])
            array[hashValue] = list
        } else {
            if (array[hashValue].containsKey(key)) {
                array[hashValue].replace(key, value)
                this.capacity--
            }
            else array[hashValue].append([key, value])
        }

        this.capacity++
    }

    grow() {
        let expandBucket = new Array(this.bucket.length * 2)
        const arrays = this.bucket

        for (let array of arrays) {
            if (array !== undefined) {
                if (array.size() <= 1) {
                    const key = array.head()[0]
                    const value = array.head()[1]

                    const hashValue = hash(key, expandBucket.length)
                    const list = new LinkedList

                    if (expandBucket[hashValue] === undefined) {
                        list.append([key, value])
                        expandBucket[hashValue] = list
                    } else {
                        if (expandBucket[hashValue].containsKey(key)) expandBucket[hashValue].replace(key, value)
                        else expandBucket[hashValue].append([key, value])
                    }
                } else {
                    const keyValues = array.getKeyValue()
                    for (let keyValue of keyValues) {
                        const key = keyValue[0]
                        const value = keyValue[1]

                        const hashValue = hash(key, expandBucket.length)
                        const list = new LinkedList

                        if (expandBucket[hashValue] === undefined) {
                            list.append([key, value])
                            expandBucket[hashValue] = list
                        } else {
                            if (expandBucket[hashValue].containsKey(key)) expandBucket[hashValue].replace(key, value)
                            else expandBucket[hashValue].append([key, value])
                        }
                    }
                }
            }

        }

        this.bucket = expandBucket
    }

    get(key) {
        const array = this.bucket
        const hashValue = hash(key, this.bucket.length)
        const savedKey = array[hashValue]

        if (savedKey === undefined) return null
        else if (savedKey.head()[0] === key) return savedKey.head()[1]
        else return savedKey.getValue(key)
    }

    has(key) {
        const array = this.bucket
        const hashValue = hash(key, this.bucket.length)
        const savedKey = array[hashValue]

        if (savedKey === undefined) return false
        else if (savedKey.head()[0] === key) return true
        return savedKey.containsKey(key)
    }

    remove(key) {
        const array = this.bucket
        const hashValue = hash(key, this.bucket.length)
        let savedKey = array[hashValue]

        if (savedKey === undefined) return false
        else if (savedKey.head()[0] === key && savedKey.size() <= 1) {
            array[hashValue] = undefined
            return true
        }

        return savedKey.removeKey(key)
    }

    length() {
        const arrays = this.bucket
        let length = 0
        for (let array of arrays) {
            if (array !== undefined) {
                length += array.size()
            }
        }

        return length
    }

    clear() { this.bucket = new Array(16) }

    keys() {
        const arrays = this.bucket
        let keys = []
        for (let array of arrays) {
            if (array !== undefined) {
                for (let [key, _] of array.getKeyValue()) {
                    keys.push(key)
                }
            }

        }
        console.log(keys)
        return keys
    }

    values() {
        const arrays = this.bucket
        let values = []

        for (let array of arrays) {
            if (array !== undefined) {
                for (let [_, value] of array.getKeyValue()) {
                    values.push(value)
                }
            }

        }

        console.log(values)
        return values
    }

    entries() {
        let arrays = this.bucket
        let count = 0
        for (let array of arrays) {
            count++
            if (array === undefined) console.log(count, "->", "Empty")
            else console.log(count, "->", array.toArray())
        }
    }
}

function hash(key, bucketSize) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode %= bucketSize
    }
    return hashCode;
}
