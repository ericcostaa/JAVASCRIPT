function calcular () {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } 
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        
       /* while ( c <= 10) {
            let iten = document.createElement('option')
            iten.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(iten)
            c++ 
        }*/

        for(let c = 1; c<=10; c++){

            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(iten)
            iten.value = `tab ${c}`
        }
    }

    








}