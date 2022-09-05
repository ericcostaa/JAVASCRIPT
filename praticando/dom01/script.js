
function alerta(){

    let clique = document.querySelector('#caixa')
    let res =  document.querySelector('#res')
    let nome =prompt ("Qual é o seu nome?")

    clique.innerHTML= "CLICOU!"
    clique.style.background = "black"
    clique.style.color = "white"

    res.innerHTML = `Olá, <strong> ${nome} </strong> é um grande prazer te conhecer!`

}


