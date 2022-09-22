let num = document.querySelector('#fnum')
let lista = document.querySelector('#tab')
let resul = document.querySelector('#res')
let dados = []

function numer (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
    
}

function list(n, l) {

   if (l.indexOf(Number(n)) != -1) {
        return true
   } else {
        return false
   }

}

function add() {
    if (numer(num.value) && !list(num.value, dados)) {
        dados.push(Number(num.value)) 
       let iten = document.createElement('option')
       iten.text = `Valor ${num.value} adicionado`
       lista.appendChild(iten)
       resul.innerHTML= ''
       
        
    }
        else{
            alert('Valor inválido na ou já encontrado na lista')
        }
        num.value = ''
        num.focus()
}

function finalizar() {

    if (dados.length == 0){
    alert('Adicione valores antes de finalizar')}

    else{
        let total = dados.length
        let maior = dados[0]
        let menor = dados [0]

        for(let pos in dados){
            if(dados[pos] > maior)
               maior = dados[pos]
           

            if (dados[pos] < menor)
                menor = dados[pos]
            }
     
            let soma = 0

           for (let i = 0; i < dados.length; i++){
                soma += dados[i]
            }

            let med = (soma / total)

            

        resul.innerHTML = ''
        resul.innerHTML += `<p>A lista contém ${total} números</p>`
        resul.innerHTML += ` <p>O maior valor informado foi ${maior}</p>`
        resul.innerHTML += ` <p>O menor valor informado foi ${menor}</p>`

        resul.innerHTML += `<p>A soma dos valores é de ${soma}</p>  `
        resul.innerHTML += `<p>A média dos valores informados é de ${med}</p> ` 
    
    } 
}