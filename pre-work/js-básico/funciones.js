// Types of functions in JS 

// |----- Funcioón declarativa -----|
// Declaración:
var miFuncion = function() {
    return 3;
}
// Invocación:
console.log(miFuncion()) // 3

// Declaración:
function suma1 (a,b) {
    var resultado = a + b;
    return resultado
}
// Invocación:
console.log(suma1(2,3)) // 5

// |----- Funcioón de expresión -----|
// Declaración:
var suma2 = function (a, b) {
    return a + b
}
// Invocación:
var resultado = suma2(2, 2)
console.log(resultado) // 4

// |----- Plantilla Literal -----|
  var nombre = "Dylan"
  console.log(`Hola ${nombre}`) // Hola Dylan