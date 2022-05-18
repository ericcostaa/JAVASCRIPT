let num = document.getElementById('fnum')
let tab = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []

function numero (n) {
    if (Number(n) >=1 && Number(n) <= 100) {
    return true
} else {
    return false

}
}



function lista (n, l){
    if (l.indexOf(Number(n) != -1)) {
        return true
    } else {
        return false
    }

}

function adicionar () {
    if (numero(num.value) && !lista(num.value, valores)) {
        alert ( 'Tudo ok')
    } else {
        alert('Valor inválido ou já encontrado na lista, digite outro valor')
    }
}