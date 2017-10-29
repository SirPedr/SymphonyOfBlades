//O SCRIPT DESTE ARQUIVO É COMPLETAMENTE DESTINADO À CRIAÇÃO DE AVATAR NO INÍCIO DO JOGO.
//OBS: A ESCOLHA DE DIFERENTES ELMOS, MANTOS E ETC NÃO INTERFERE NO JOGO E TEM APENAS UMA
//FUNÇÃO ESTÉTICA.

//Declaração de Variáveis Base
let containerAvatar = document.querySelector('#container-avatar'),
    selectsOutrasClasses = document.querySelectorAll('.selectsClasses');
    //Variáveis que Selecionam os Inputs de Nome e Classe do Personagem
let opcoesDeNome = document.querySelector('#nomePersonagem'),
    opcoesDeClasse = document.querySelector('#EscolherClasse'),
    classeEscolhida = document.querySelector('#classe-escolhida'),
    nomeEscolhido = document.querySelector('#nomeEscolhido');
    //Variáveis que Selecionam as Imagens do Preview Do Personagem (Cabeça e Corpo)
let cabecaDoPersonagem = document.querySelector('#cabecaDoPersonagem'),
    corpoDoPersonagem = document.querySelector('#corpoDoPersonagem');
    //Variáveis que Selecionam os 4 Atributos do Personagems
let forcaPersonagem = document.querySelector('#forcaPersonagem'),
    inteligenciaPersonagem = document.querySelector('#inteligenciaPersonagem'),
    agilidadePersonagem = document.querySelector('#agilidadePersonagem'),
    carismaPersonagem = document.querySelector('#carismaPersonagem');

/*Abaixo, eventos que mudam a aparência do personagem. Elmos, mantos, etc; quando selecionados, os comandos abaixo
mudam o 'src' das imagens de acordo com a opção escolhida*/


//Função que remove (caso haja) os selects anteriores criados quando o
//Jogador seleciona uma classe.

function deletaCostumizacaoAnterior(){

  let selectsAnteriores = document.querySelectorAll('.selectsClasses');

  //Deleta cada select com a classe 'selectsClasses'

  for(let opcaoCostumizacao of selectsAnteriores){
    containerAvatar.removeChild(opcaoCostumizacao);
  }

  return;
}

//Função que cria os Inputs que mudarão a aparência do personagem.

function acrescentaCostumizacao(conteudoLabel, contOC, contOC2, valueOpcao1, valueOpcao2, id){

    //Cria a Label, o Select e os Options

    let LabelCostumizacao = document.createElement('label'),
        CostumizacaoPersonagem = document.createElement('select'),
        opcoesCost = document.createElement('option'),
        opcoesCost2 = document.createElement('option');


  //Costumização dos Elementos Criados

  LabelCostumizacao.innerHTML = conteudoLabel;
  LabelCostumizacao.classList.add('selectsClasses');
  CostumizacaoPersonagem.id = id;

  opcoesCost.innerHTML = contOC;
  opcoesCost.value = valueOpcao1;

  opcoesCost2.innerHTML = contOC2;
  opcoesCost2.value = valueOpcao2;

    //Coloca os elemtnso criados na página HTML

    CostumizacaoPersonagem.appendChild(opcoesCost);
    CostumizacaoPersonagem.appendChild(opcoesCost2);
    LabelCostumizacao.appendChild(CostumizacaoPersonagem);
    containerAvatar.appendChild(LabelCostumizacao);

}

//Função que de  fato muda a aparência visível do personagem, adicionando elmos, armaduras etc
//ao campo que o jogador vê de acordo com as opções escolhidas

function MudaAparencia(classe){

  //Define os valores padrão das imagens toda vez que o jogador troca de classe

  cabecaDoPersonagem.src = 'imgs/criacaoAvatar/modeloCabecaBase.png';
  corpoDoPersonagem.src = 'imgs/criacaoAvatar/modeloCorpoBase.png';

  //Faz um teste de condição e verifica se a classe é 'mago' ou não
  if(classe != 'mago'){


    //Seleciona as variáveis que representam os selects de elmo e armadura
    let seletorElmo = document.querySelector('#seletoresElmos'),
      seletorArmor = document.querySelector('#seletoresArmor');

    //Quando os selects são alterados, o personagem fica com a armadura/elmo escolhido
    //pelo jogador

  seletorElmo.addEventListener('change', function mudaElmo(){
    cabecaDoPersonagem.src = seletorElmo.value;
  });

  seletorArmor.addEventListener('change', function mudaArmor(){
    corpoDoPersonagem.src = seletorArmor.value;
  });

}else{

  let seletorMantos = document.querySelector('#seletorMantos');

  seletorMantos.addEventListener('change', function mudaManto(){
    cabecaDoPersonagem.src = seletorMantos.value;
  });

}
}

//Evento que adiciona os 'selects' necessários de costumização de acordo com a classe
//escolhida.

//Não aplica a adição de selects caso a tela tenha uma largura de 480px ou menos, já que o preview nessas resoluções
//não será mostrado.

if(screen.width > 480){

  opcoesDeClasse.addEventListener('change', function mudaEquipamento(){

    if(opcoesDeClasse.value === 'Guerreiro'){

       deletaCostumizacaoAnterior();

       //Chama a Função Feita Anteriormente com Os Parâmetros Necessários. A chamada ocorre
       // duas vezes, para serem criados 2 'selects'.
       acrescentaCostumizacao('Elmo:', 'Dark Souls Style', 'SemiAberto de Ferro','imgs/criacaoAvatar/guerreiroElmo1.png', 'imgs/criacaoAvatar/guerreiroElmo2.png', 'seletoresElmos');
       acrescentaCostumizacao('Armadura:', 'Conjunto de Aço Completo', 'Casaco de Pele',
       'imgs/criacaoAvatar/guerreiroArmor1.png', 'imgs/criacaoAvatar/guerreiroArmor2.png', 'seletoresArmor');

       //Chama a Função Responsável Por Mudar a Aparência do Personagem de acordo
       //com as opções escolhidas nos novos 'selects' criados

       MudaAparencia('guerreiro');

    }else if(opcoesDeClasse.value === 'Ladino'){

       deletaCostumizacaoAnterior();
      acrescentaCostumizacao('Elmo:', 'Nenhum', 'Aberto De Ferro',
      'imgs/criacaoAvatar/modeloCabecaBase.png', 'imgs/criacaoAvatar/ladinoElmo1.png', 'seletoresElmos');
      acrescentaCostumizacao('Vestimenta:', 'Armadura de Couro Simples', 'Armadura de Couro Reforçado',
      'imgs/criacaoAvatar/ladinoArmor1.png', 'imgs/criacaoAvatar/ladinoArmor2.png', 'seletoresArmor');

      //Chama a Função Responsável Por Mudar a Aparência do Personagem de acordo
      //com as opções escolhidas nos novos 'selects' criados

      MudaAparencia('ladino');

    }else if(opcoesDeClasse.value === 'Mago'){

       deletaCostumizacaoAnterior();

      acrescentaCostumizacao('Manto (Robe) :', 'Manto de Mago das Altas Montanhas', 'Manto de Mago Monge Style',
      'imgs/criacaoAvatar/magoManto1.png', 'imgs/criacaoAvatar/magoManto2.png', 'seletorMantos');

      MudaAparencia('mago');
    }
  });
}else{
  let previewAvatar = document.querySelector('#avatarFinal');

  $(previewAvatar).remove();
}





/*Os eventos abaixo completam a frase final da criação de personagens de acordo com a
alteração dos inputs de nome e classe*/

opcoesDeNome.addEventListener('input', function colocaNome(){
   nomeEscolhido.innerHTML = nomePersonagem.value;
});

opcoesDeClasse.addEventListener('change', function colocaClasse(){

  let nomeDaClasse = opcoesDeClasse.value,
      quaisClasses = ['Guerreiro', 'Mago', 'Ladino', 'Coutinho'];
  classeEscolhida.innerHTML = nomeDaClasse;
  //E aqui vamos nós. Quando escolhe uma opção de classe, os atributos são mudados

  //Função que recebe como parâmetros os valores dos atributos e os atribui da forma correta

  function mudaAtributos(forca, int, agi, car){
    forcaPersonagem.innerHTML = forca;
    inteligenciaPersonagem.innerHTML = int;
    agilidadePersonagem.innerHTML = agi;
    carismaPersonagem.innerHTML = car;
  }

  //Switch que determina qual classe o jogador escolheu. Após isso, ele redireciona a opção para
  //A definição correta dos atributos.

  switch (nomeDaClasse) {

    case quaisClasses[0]: mudaAtributos(5, 2, 2, 2);
                          break;

    case quaisClasses[1]: mudaAtributos(1, 5, 2, 3);
                          break;

    case quaisClasses[2]: mudaAtributos(1, 2, 5, 3);
                          break;

    case quaisClasses[3]: mudaAtributos(5, 5, 5, 5);
                          break;

  }
});
 /*-----------------*/
