import { HashMap } from "./hashMap.js";

const test = new HashMap

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.entries()
console.log("---------------Collision-Test--------------------")

//test collision
test.set('lion', 'yellow')
test.set('dog', 'black')
test.entries()
console.log("---------------HashMap-Growth-------------------")

//test HashMap growth
test.set('ostrich', 'black')
test.set('table', 'brown')
test.set('glass', 'clear')
test.entries()
console.log("--------------Get-Method--------------------")

//test get method
console.log(test.get("ostrich"))
console.log(test.get("lion"))
console.log(test.get("snake"))
console.log("--------------Has-Method--------------------")

//test has method
console.log(test.has("lion"))
console.log(test.has("dog"))
console.log(test.has("snake"))
console.log("--------------Remove-Method--------------------")

//test remove method
console.log(test.remove("lion"))
console.log(test.remove("dog"))
console.log(test.remove("snake"))
console.log("--------------Length-Method--------------------")

//test length method
console.log(test.length())
console.log("--------------Keys-Method--------------------")

//test keys method
test.keys()
console.log("--------------Values-Method--------------------")

//test values method
test.values()
console.log("--------------Clear-Method--------------------")

//test clear method
test.clear()
test.entries()



