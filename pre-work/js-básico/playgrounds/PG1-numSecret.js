// Crea una funcion en la cual, al pasarle numero secreto evalúe si es menor a 5

// Solución 1:
function solution1(secreto1) {
    var respuesta
    if (secreto1 <= 5) {
        respuesta = false
    } else {
        respuesta = true
    }
    return respuesta
}

// Solución 2:
function solution2(secreto2) {
    return !(secreto2 <= 5)
}

var numero = prompt("Ingresa un número secreto")

console.log("Solution 1: " + solution1(numero))
console.log("Solution 2: " + solution2(numero))
