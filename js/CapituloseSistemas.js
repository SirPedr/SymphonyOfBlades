//SCRIPT TOTALMENTE DEDICADO AO JOGO EM SI, CRIANDO OS CAPÍTULOS, DIÁLOGOS, CENÁRIOS, SISTEMAS ETC
//OBS IMPORTANTE: OS ATRIBUTOS, PRINCIPALMENTE, JUNTO COM OUTRAS VARIÁVEIS, ESTÃO SENDO REAPROVEITADOS NESTE SCRIPT,
//JÁ QUE JÁ FORAM DECLARADOS PREVIAMENTE.

let botaoConcluirAvatarEl = $('#concluirCriacaoAvatar');
//Variáveis imprescindíveis: a imagem, o texto 'p' com a narração do cenário.
let imagemCenario = document.createElement('img'),
    containerCenarioGeral = document.createElement('figure'),
    narracaoCenarioAtual = document.createElement('p');

  $(containerCenarioGeral).addClass('containerCenarioGeral');
  $(imagemCenario).addClass('ImagensCenario');
  $(narracaoCenarioAtual).addClass('textoNarracoes');



function removeElementosAnteriores(){
  containerCenarioGeral.remove();
  return;
}
