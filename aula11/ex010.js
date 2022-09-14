function calcular() {

    let dados = [document.getElementById('txtvel'), document.querySelector('div#res')]

    var vel = Number(dados[0].value) 

    res.innerHTML = `<p>Sua velocidade atual é <strong>${vel} Km/h</strong></p>`

    if(vel > 60) {
        dados[1].innerHTML += `<p/> Você está <strong> MULTADO </strong> por excesso de velocidade.`
    }

    dados[1].innerHTML += `<p> Dirija sempre com sinto de segurança.</p>`
}