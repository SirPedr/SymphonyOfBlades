//ARQUIVO QUE CONTROLA DESDE O BOTÃO 'COMEÇAR' ATÉ A PARTE DE CRIAÇÃO DE AVATAR

//Declaração de Variáveis Base

let BodyEl = document.querySelector('body'),
    tituloMenu = document.querySelector('#titulo-menu'),
    //Variáveis para Controle do Scroll da História
    containerHistoria = document.querySelector('#historia-previa'),
    HistoriaPreJogo = document.querySelector('#conteudoHistoria'),
    pularHistoriaEl = document.querySelector('#pularHistoriaEl'),
    containerPularHistoria = document.querySelector('#pularHistoriaContainer'),
    aux = 0;
    // ----
    containerAvatar = document.querySelector('#container-avatar'),
    explicacoesSobreAvatar = document.querySelector('#explicacoesAvatar'),
    botaoComeçarEl = document.querySelector('#comecarJogo'),
    botaoConcluirEl = document.querySelector('#concluirCriacaoAvatar');

//Ao clicar em 'Começar', o jogo de fato inicia e é mostrado a história.

botaoComeçarEl.addEventListener('click', function jogoComeca(){

  tituloMenu.classList.add('invisivel');
  setTimeout(mostraHistoria, 2000);

});

//Reira o Título e Opções da Tela e Mostra a História Prévia do Jogo
function mostraHistoria(){
  HistoriaPreJogo.classList.add('textoRolando');
  containerHistoria.classList.remove('invisivel');
  containerPularHistoria.classList.remove('invisivel');
  BodyEl.removeChild(tituloMenu);
}
// ------ //

//Botão que Faz Pular o Texto Introdutório

function acabaHistoria(){
  containerHistoria.classList.add('invisivel'); //Tira de Visão o Container e o Botão de Pular
  containerPularHistoria.classList.add('invisivel');
  setTimeout(function(){
    BodyEl.removeChild(containerHistoria);
    BodyEl.removeChild(containerPularHistoria);
  }, 500);
}

pularHistoriaEl.addEventListener('click', function pulaAnimacao(){

  setTimeout(acabaHistoria(), 1500); //Depois de 1/2 s, ele remove os elementos de cena
  setTimeout(function(){
      containerAvatar.classList.remove('invisivel');
      explicacoesSobreAvatar.classList.remove('invisivel');
      botaoConcluirEl.classList.remove('invisivel');
  }, 1000);

  aux++;

});

if(aux === 0){
  HistoriaPreJogo.addEventListener('animationend', function(){
      setTimeout(acabaHistoria(), 750);
      setTimeout(function(){
          containerAvatar.classList.remove('invisivel');
          explicacoesSobreAvatar.classList.remove('invisivel');
          botaoConcluirEl.classList.remove('invisivel');
      }, 1000);
  });
}
