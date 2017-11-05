/*Pequeno Script que arrega os Dados do Jogador Salvos em Local Storage*/

let botaoCarregarJogoEl = document.querySelector('#carregarJogo');

if(localStorage.getItem('dadosDoJogador') == null){
  $(botaoCarregarJogoEl).css('cursor', 'default');
  $(botaoCarregarJogoEl).css('opacity', '0.3');
}else{

  botaoCarregarJogoEl.addEventListener('click', function carregaJogo(){
    let dadosDoJogador = localStorage.getItem('dadosDoJogador'),
        ultimoCenarioJogado = localStorage.getItem('cenarioAtual');

    dadosDoJogador = JSON.parse(dadosDoJogador);

    tituloPrincipalEl.remove();

    $('#containerHUD').removeClass('invisivel');
    atualizaHUD(dadosDoJogador);

    gerenciaCenarioseOpcoes(ultimoCenarioJogado, dadosDoJogador);
  })

}
