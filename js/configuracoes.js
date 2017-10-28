//ARQUIVO QUE CUIDA DOS CONTROLES, MODAL E SOM. TAMBÉM É RESPONSÁVEL POR FAZER
//O TÍTULO APARECER PARA O USUÁRIO/JOGADOR.

//OBS: Abriga também algumas regras de resize para contribuir com o 'Responsive Design'.


//Declarações de Variáveis Base

let botaoSomEl = document.querySelector('#opcaoSom'),
    botaoInfoEl = document.querySelector('#opcaoInfo'),
    musicaDeFundoMenu = document.querySelector('#musica_fundo_inicial'),
    tocarMusica = sessionStorage.getItem('tocarMusica'),
    tituloPrincipalEl = document.querySelector('#titulo-menu');
    i = 0;

//Usa sessionStorage para verificar se deve tocar a música de início do Menu

if(tocarMusica === 'false'){
  botaoSomEl.src = 'imgs/somDesligado.png';
}else{
  musicaDeFundoMenu.play();
}

//Faz alterações na Imagem do Som e da música quando o símbolo é clicado

botaoSomEl.addEventListener('click', function alteraSom(){

  i++;
  if(i % 2 === 0){
    botaoSomEl.src = 'imgs/somLigado.png'; //Muda a Imagem do Som quando clicado
    musicaDeFundoMenu.play();
    sessionStorage.setItem('tocarMusica', 'true');
  }else{
    botaoSomEl.src = 'imgs/somDesligado.png';
    musicaDeFundoMenu.pause();
    sessionStorage.setItem('tocarMusica', 'false');
  }

})


//Funções responsáveis por alterar a visualização das informações sobre o projeto

let informacoes = document.querySelector('#info'),
fecharInfo = document.querySelector('#fechar-info');

botaoInfoEl.addEventListener('click', function exibeInfo(){
  informacoes.classList.remove('invisivel');
  informacoes.style.zIndex = 999;
  fecharInfo.style.cursor = 'pointer';
})

fecharInfo.addEventListener('click', function fechaInfo(){
  informacoes.classList.add('invisivel');
  fecharInfo.style.cursor = 'default';
  informacoes.style.zIndex = -1;
})

//Pequena Animação Quando Usuário Entra Na Página

function mostraTitulo(){
  tituloPrincipalEl.classList.remove('invisivel');
}

setTimeout(mostraTitulo, 2500);

//REGRAS DE RESIZE

$(window).resize(function(){
  if(window.innerWidth <= 480 ){
    containerAvatar.remove();
  }
});






















































































































































































































































































































































































































































cheet('b a l d e s', function(){
  document.title = 'Symphony Of Baldes';
  let titulo = document.querySelector('#titulo-principal');
  titulo.innerHTML = 'Symphony Of Baldes';
})
