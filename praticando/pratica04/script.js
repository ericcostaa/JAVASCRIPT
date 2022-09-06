function calcular (){

    let num = prompt(`Digite um número`)
    let res = document.querySelector('div#res')
       
    res.innerHTML = `<p> O dobro de ${num} é ${num * 2} e a metade é ${num / 2} </p>`
}