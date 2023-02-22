// Coerción Implícita (JS nos ayuda)
var a = 4 + "7"
console.log(typeof a)
console.log("a = " + a)

var b = 4 * "7"
console.log(typeof b)
console.log("b = " + b)

// Coerción explícita (Obligamos a JS a cambiar)
a = 2
var c = String(a)
console.log(typeof c)
console.log("c = " + c)

b = "100"
var d = Number(b)
console.log(typeof d)
console.log("d = " + d)
