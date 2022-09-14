function carregar () {

let dados = [document.getElementById('msg'), document.getElementById('imagem') , new Date() ]
//var msg = document.getElementById('msg')
//var img = document.getElementById('imagem')
//var data = new Date()
var hora = dados[2].getHours ()


msg.innerHTML = `<p>Agora são ${hora} horas.<p>`

    if (hora >= 0 && hora < 12) {
    //bom dia
         dados[1].src = 'foto-manha.png'
         document.body.style.background = '#ecddbc'
    }

    else if ( hora >= 12 && hora <= 18) {
        // boa tarde
        dados[1].src = 'foto-tarde.png'
        document.body.style.background = '#DA8A77'
    }

    else  {
        dados[1].src = 'foto-noite.png'
        document.body.style.background = '#0F2131'
        //boa noite
    }
}