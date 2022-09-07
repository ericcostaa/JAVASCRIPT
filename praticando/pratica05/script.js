function calcular (){

      var nome =  prompt("Qual é o nome do aluno?")
      var nota1 = Number(prompt(" Qual foi a primeira nota do aluno?"))
      var nota2 = Number(prompt("Qual foi a segunda nota do aluno?"))
      var resul = (nota1 + nota2) / 2
      var media = 5

      var res = document.querySelector('#res')
    

     
    
    res.innerHTML = `Calculando a média final de ${nome} ` 
    p1.innerHTML = `As notas obtidas foram ${nota1} e ${nota2}`    

        
}