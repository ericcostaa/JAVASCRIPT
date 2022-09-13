let num = [5, 8, 2, 9, 3]
num.push(1) // Vai adicionar um valor no array
num.sort() // Var botar o array em ordem crescente


for (let indi in num ) {
    console.log (`A posição ${indi} tem o valor ${num[indi]}`)
}


console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3) // Vai buscar o valor () no array

if (pos == -1) { 
    console.log('O valor não foi encontrado')
        // Caso o valor não seja encontrado no vetor, ele irá me retornar o indice -1
}
else{
 console.log(`O valor está na posição ${pos}`)}

 