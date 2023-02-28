// switch

var numero = 10
switch (numero) {
    case 1:
        console.log("Soy un 1!")
        break;
    case 10:
        console.log("Soy un 10!")
        break;
    case 100:
        console.log("Soy un 100!")
        break;

    default:
        console.log("No soy nada")
        break;
}

//Reto: Rehacer piedra, papel o tijera con switch
var piedra = 1
var papel = 2
var tijera = 3

function duelo(p1, p2) {
    switch (true) {
        case (p1 == p2):
            console.log("Empate")
            break;
        case ((p1 == 1 && p2 == 3) || (p1 == 2 && p2 == 1) || (p1 == 3 && p2 == 2)):
            console.log("p1 Gana")
            break;
        default:
            console.log("p2 Gana")
            break;
    }
}

duelo(piedra,tijera)