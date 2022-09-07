var agora = new Date()
var hora = agora.getHours() 
var compl = hora + ':' + agora.getMinutes () + ':' + agora.getSeconds ()
console.log(`Agora são exatamente ${compl}`)

if (hora <= 5) {
    console.log('Boa madrugada')
}

else if ( hora <12) {
    console.log('Bom dia')
}

else if (hora <= 18) {
    console.log('Boa tarde')
}

else if (hora > 18 && hora <= 24){
    console.log('Boa noite')
}
