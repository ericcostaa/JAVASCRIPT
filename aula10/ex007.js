function somar() {

    let tn = [document.getElementById('txtn1'), document.querySelector('input#txtn2') ]
        

    //var tn1 = document.getElementById('txtn1')
    //var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')

    let n = [Number(tn[0].value) , Number(tn[1].value)] 
    //var n1 = Number(tn1.value)
    //var n2 = Number(tn2.value)
    var s = n[0] + n[1]
    res.innerHTML= `A soma entre ${n[0]} e ${n[1]} é igual a <strong>${s}<strong>`

}