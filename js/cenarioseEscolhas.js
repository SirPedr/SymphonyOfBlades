function campanha(){

  //Struct que define os dados do jogador
  let jogador = {
    forca: forcaPersonagem.innerHTML,
    inteligencia: inteligenciaPersonagem.innerHTML,
    agilidade: agilidadePersonagem.innerHTML,
    carisma: carismaPersonagem.innerHTML,
    karma: 0,
    moedas: 100
  }

  //Remove todo o HTML da criação de avatar para dar espaço ao container que
  //abriga os cenários do jogo

  containerAvatar.remove();
  botaoConcluirAvatarEl.remove();
  explicacoesSobreAvatar.remove();

  //Chama a função principal, apenas uma única vez
  gerenciaCenarioseOpcoes('tavernaInicial', jogador);

}

//Função que cria [dinamicamente] as opções de diálogos (botões)
function criaOpcoesDialogo(conteudoOpcao){

  let novaOpcao = document.createElement('button');

  $(novaOpcao).addClass('botoesOpcoesDialogo');
  novaOpcao.innerHTML = conteudoOpcao;

  containerCenarioGeral.append(novaOpcao);

  return;

}

//Função responsável por
function deletaOpcoesAnteriores(){
  let elementosAnteriores = $('.botoesOpcoesDialogo');

  for(let opcaoASerExcluida of elementosAnteriores){
    opcaoASerExcluida.remove();
  }
}

function teste(jogador){
  if(jogador.carisma > 2){
    return 'taverna2';
  }else{
    return 'ata';
  }
}

//Object (struct) que contém todos os cenários possíveis no jogo. Todos são compostos por uma imagem, uma narrativa e 3
//opções, que desencadeam um novo cenário.

var cenarios = {
	tavernaInicial: {
		imagem: 'imgs/Capitulos/cenarioTavernaCap1.jpg',
		narrativa: 'A taverna está bastante movimentada, com bárbaros jogando cartas em uma mesa, comerciantes contando suas moedas em outra, casais nos fundos, etc. O cheiro é de puro hidromel e rum. Há um bardo tocando uma música dançante, que atrai a atenção de várias donzelas, bárbaros e outros bardos. O taverneiro, anão, está limpando o balcão.',
		opcoes: [{
			texto: 'Pedir uma bebida',
			proxNarrativa: teste
		}]
	},

	taverna2: {
		imagem: 'imgs/Capitulos/cenarioTavernaCap1.jpg',
    narrativa: 'Carisma > 2',
    opcoes: [{
      texto: 'Teste',
      proxNarrativa: 'ata'
    }]
	},

  ata: {
    imagem: 'imgs/Capitulos/cenarioTavernaCap1.jpg',
    narrativa: 'Carisma <= 2',
    opcoes: [{
      texto: 'UHUM',
      proxNarrativa: 'tavernaInicial'
    }]
  }
};

// A função n°1, a topper, a 10/10
//Função essencial que garante todo o funcionamento do jogo, alterando o 'src' da imagem, mudando a narrativa e as opções de diálogo.
//Atua de maneira recursiva, sendo necessário chamá-la apenas uma vez, com o parâmetro 'tavernaInicial', que, de fato, é o primeiro cenário do jogo.

//Recebe como parâmetros uma string que contém o nome do objeto que agrega os elementos do próximo cenário,
//e o objeto 'jogador', que guarda dados como atributos, karma e moedas.

function gerenciaCenarioseOpcoes(proximoCenario, jogador){

  //Remove toda a estrutura do cenário anterior para que o atual possa entrar
  removeElementosAnteriores();
  //Aplica o 'src' da nova imagem à imagem que aparece ao jogador e a coloca no Container
  $(imagemCenario).attr('src', cenarios[proximoCenario].imagem);
  containerCenarioGeral.append(imagemCenario);
  //Coloca dentro do 'p' a narração que descreve o cenário atual e o coloca no Container, após a img
  narracaoCenarioAtual.innerHTML = cenarios[proximoCenario].narrativa;
  containerCenarioGeral.append(narracaoCenarioAtual);

  //Cria as opções de diálogo de acordo com o número de elementos disponível no vetor 'opcoes[]'
  for(let i = 0; i < cenarios[proximoCenario].opcoes.length; i++){
    criaOpcoesDialogo(cenarios[proximoCenario].opcoes[i].texto);
  }

  //Coloca o container no Body; torna-o visível ao jogador
  BodyEl.append(containerCenarioGeral);

  //Seleciona todos os elementos com a classe 'botoesOpcoesDialogo', ou seja, todos os botões que representam
  //As escolhas possíveis.

  let botoesOpcoesDialogo = $('.botoesOpcoesDialogo');

  //Cria uma estrutura de repetição que percorre todos os elementos com essa classe
  for(let i = 0; i < botoesOpcoesDialogo.length ; i++){

    //Aplica o data 'proxNarrativa' no botão, e atribui a seu valor o conteúdo do elemento 'proxNarrativa' da opção
		$(botoesOpcoesDialogo[i]).data("proxNarrativa", cenarios[proximoCenario].opcoes[i].proxNarrativa);

    //Quando algum dos 3 botões é clicado, ele ativa o evento que leva o jogador ao próximo cenário
		botoesOpcoesDialogo[i].addEventListener("click", function (e){
      //Isola o botão clicado
			let opcaoClicada = e.currentTarget;

			let proxNarra = $(opcaoClicada).data("proxNarrativa");
      //Caso o valor do data 'proxNarrativa' seja uma função, ele a executa, passando o objeto 'jogador' como parâmetro
      //Caso contrário, ele simplesmente não entra na condição e segue executando as próximas linhas
			if (typeof proxNarra === "function") {
				proxNarra =  proxNarra(jogador);
			}
      //Função que deleta os botões atuais, para dar lugar às opções da próxima narrativa
      deletaOpcoesAnteriores();
      //A função chama a si mesma, agora com um novo cenário como parâmetro, reiniciando o ciclo. Isso é feito até que o jogo termine.
			gerenciaCenarioseOpcoes(proxNarra, jogador);
		});

	}
}

$(botaoConcluirAvatarEl).click(function SymphonyOfBlades(){
  campanha();
});
