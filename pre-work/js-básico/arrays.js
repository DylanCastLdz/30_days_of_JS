// Método Push
var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]

// Método Pop
var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]

// Método unshift
var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]

// Método shift
var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]

// Método indexOf
var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1

var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1