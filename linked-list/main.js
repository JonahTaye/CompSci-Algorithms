import { LinkedList } from "./linkedList.js"

const list = new LinkedList()

list.append("dog")
list.append("cat")
list.append("parrot")
list.append("hamster")

list.prepend("snake")
list.prepend("turtle")

list.toString()
list.size()
list.head()
list.tail()
list.at(3)

list.pop()
list.pop()
list.toString()

console.log(list.contains("turtle"))
console.log(list.find("snake"))

list.insertAt("owl", 4)
list.insertAt("lion", 0)
list.insertAt("bear", 2)
list.toString()

list.removeAt(3)
list.toString()