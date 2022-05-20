let NumAle = Math.floor(Math.random() * 100) + 1;
let palpite = querySelector('.palpites');
let UltimoRes = querySelector('.UltimoRes');
let BaixoOuAlto= querySelector('.BaixoOuAlto');

let botao = querySelector('.botao');
let num = querySelector('.num');

let contagem = 1;
let reinicio;

function conferirPalpite(){

    let palpiteJogador = Number(palpite.value);
    if (contagem ===1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteJogador + ' ';

    if ( palpiteJogador === NumAle) {
        UltimoRes.textContent = 'Parabéns você acertou!'
        UltimoRes.style.backgroundColor = 'green';
    }

}
