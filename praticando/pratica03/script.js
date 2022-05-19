let numero = document.getElementById ("num");
let enviar = document.querySelector ("botao");
let resultado = document.getElementById("res")

function enviar() {
    if (numero.value > num) {
        alert ("Número muito baixo")
    } else if ( numero.value < num) {
        alert (" Número muito alto")
    } else {
        alert( "Você acertou!")
    }
}