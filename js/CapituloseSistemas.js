//SCRIPT TOTALMENTE DEDICADO AO JOGO EM SI, CRIANDO OS CAPÍTULOS, DIÁLOGOS, CENÁRIOS, SISTEMAS ETC
//OBS IMPORTANTE: OS ATRIBUTOS, PRINCIPALMENTE, JUNTO COM OUTRAS VARIÁVEIS, ESTÃO SENDO REAPROVEITADOS NESTE SCRIPT,
//JÁ QUE JÁ FORAM DECLARADOS PREVIAMENTE.

let botaoConcluirAvatarEl = $('#concluirCriacaoAvatar');

//Variáveis imprescindíveis para o funcionamento do jogo: estão aqui todos os elementos do container que possui o conteúdo
//do jogo.
let imagemCenario = document.createElement('img'),
    containerCenarioGeral = document.createElement('figure'),
    containerBotoes = document.createElement('div'),
    narracaoCenarioAtual = document.createElement('p');

  $(containerCenarioGeral).addClass('containerCenarioGeral');
  $(imagemCenario).addClass('ImagensCenario');
  $(narracaoCenarioAtual).addClass('textoNarracoes');
  containerBotoes.id = 'botoesResponsive';


function removeElementosAnteriores(){
  containerCenarioGeral.remove();
  return;
}

//Variáveis para o controle do HUD

let nomeAtual = document.querySelector('#nomeConhecidoJogador'),
    moedasAtuais = document.querySelector('#moedasAtuais'),
    KarmaAtual = document.querySelector('#karmaAtual'),
    ForcaAtual = document.querySelector('#forcaAtual'),
    InteligenciaAtual = document.querySelector('#intAtual'),
    AgilidadeAtual = document.querySelector('#agiAtual'),
    CarismaAtual = document.querySelector('#carAtual');

let devoExpandirHUD = document.querySelector('#ControleExpansaoHUD'),
    auxHUD = 0;

$(devoExpandirHUD).click(function alternaExpansaoHUD(){

  auxHUD++;

  if(auxHUD % 2 != 0){
    $('#HUDPersonagem').css('margin-bottom', 0);
    $(devoExpandirHUD).attr('src', 'imgs/HUD_Retrair.png');
 }else{
   $('#HUDPersonagem').css('margin-bottom', -30 + 'vh');
   $(devoExpandirHUD).attr('src', 'imgs/HUD_Expandir.png');
 }

})
