function calcular (){

      var nome =  prompt("Qual é o nome do aluno?")
      var nota1 = Number(prompt(" Qual foi a primeira nota do aluno?"))
      var nota2 = Number(prompt("Qual foi a segunda nota do aluno?"))
      var resul = (nota1 + nota2) / 2
      var media = 5


      var res = document.querySelector('#res')
     
    
    
    p0.innerHTML = `Calculando a media final de <strong>${nome}</strong>`
    p1.innerHTML =`As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong>`
    p2.innerHTML = `A média final será <strong>${resul}</strong>`

    if ( resul < media) {
      p3.innerHTML = 'A mensagem que temos é: <strong style= "color: red;"> Estude um, pouco mais!</strong>'
    }

    else {
      p3.innerHTML = 'A mensagem que temos é: <strong style = "color:green;"> Meus parabéns!</strong>'
    }

    
        
}