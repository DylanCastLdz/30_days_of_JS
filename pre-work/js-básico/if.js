// Condicionales If
var edad = prompt("Escribe tu edad")

if (edad == 18) {
    console.log("Puedes votar por primera vez")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("No puedes votar aún")
}

// Operador Ternario
var numero = 1
var resultado = numero === 1 ? "Soy un Uno" : "No soy un Uno"
console.log(resultado)

// Reto: piedra, papel o tijera
var piedra = 1
var papel = 2
var tijera = 3

function duelo(p1, p2) {
    if (p1 == p2) {
        console.log("Empate")
    } else if ((p1 == 1 && p2 == 3) || (p1 == 2 && p2 == 1) || (p1 == 3 && p2 == 2)) {
        console.log("Tu ganas")
    } else {
        console.log("El CPU Gana")
    }
}

duelo(piedra,tijera)