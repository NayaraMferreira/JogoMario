const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = documenet.querySelector('.nuvem');
const fimDeJogo = document.querySelector('.fim-de-jogo');
const botaoReiniciar = document.querySelector('.botaoReiniciar');

let pontuacao = 0;

function fazerMarioPular(){
    mario.classList.add('pular');
    setTimeout(function(){
        mario.classList.remove('pular');
        
        pontuacao ++;
        atualizarPontuacao();

    }, 500);

    function atualizarPontuacao(){
        console.log('Pontuacao: ' + pontuacao);
    }

    function verificarColisoes(){
    
        const posicaoCano = cano.offsetleft;
        const posicaoMario = parsefloat(getcomputedStyle(mario).bottom);
        const posicaonuvem = parsefloat(getcomputedStyle(nuvem).bottom);

        if(posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60){
            console.log("Que pena você perdeu, sua pontuação foi de :", pontuacao)
            pontuacao = 0 ;
            pararJogo();

            cano.style.animation = 'none';
            cano.style.left = `${posicaoCano}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoMario}px`;
            mario.src='asstets/imgs/fim-de-jogo.png';
            mario.style.width = '70px';
        }
    }
}