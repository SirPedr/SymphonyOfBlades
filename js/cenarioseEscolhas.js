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

//Função responsável por deletar as opções de Diálogo anteriores a do cenário atual.
function deletaOpcoesAnteriores(){
  let elementosAnteriores = $('.botoesOpcoesDialogo');

  for(let opcaoASerExcluida of elementosAnteriores){
    opcaoASerExcluida.remove();
  }
}

//Funções que aumentam/diminuem atributos conforme a escolha do jogador

function diminuiCarisma(jogador){
  jogador.carisma -= 1;
  if(jogador.carisma <= 0){
    jogador.carisma = 0;
  }
  return;
}

function diminuiKarma(jogador){
  jogador.karma -= 1;

  return;
}

function diminuiMoedas(jogador){
  jogador.moedas -= 10;
  if(jogador.moedas <= 0){
    jogador.moedas = 0;
  }
  return;
}

function aumentaCarisma(jogador){
  jogador.carisma += 1;
  if(jogador.carisma > 5){
    jogador.carisma = 5;
  }

  return;
}

function aumentaInteligencia(jogador){
  jogador.inteligencia += 1;

  if(jogador.inteligencia > 5){
    jogador.inteligencia = 5;
  }

  return;
}
//------------------------------------------------------------------
//Funções de condições específicas, que testam os atributos do jogador em momentos específicos para o desenrolar da próxima narrativa

function testePrecoEstadia(jogador){
  if(jogador.carisma <= 1){
    return 'primeiraQuestTaverneiroPart2EstadiaCara';
  }else{
    return 'primeiraQuestTaverneiroPart2EstadiaBarata';
  }
}

function custodaEstalagemBarata(jogador){
  jogador.moedas -= 30;

  return;
}

function custodaEstalagemCara(jogador){
  jogador.moedas -= 70;

  return;
}

function mudaNomeConhecido(jogador){
  jogador.nome = 'viajante';

  return;
}

function testeDeCarisma(jogador) {

  if(jogador.carisma >= 3){
    return 'primeiraQuestBardoRevelaBoato';
  }else{
    return 'primeiraQuestBardoEscondeBoato';
  }
}

function doacaoBardoMenor(jogador){
  jogador.moedas -= 10;
  return;
}

function doacaoBardoMedia(jogador){
  jogador.moedas -=20;
  return;
}

function doacaoBardoMaior(jogador){
  jogador.moedas -= 35;
  return;
}
//Object (struct) que contém todos os cenários possíveis no jogo. Todos são compostos por uma imagem, uma narrativa e 3
//opções, que desencadeam um novo cenário (exceto pelas escolhas de mais peso, que tem apenas 2 opções).

var cenarios = {
	tavernaInicial: {
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/TabernSongCap1.mp3",
		imagem: 'imgs/Capitulos/cenarioTavernaCap1.jpg',
		narrativa: 'A taverna está bastante movimentada, com bárbaros jogando cartas em uma mesa, comerciantes contando suas moedas em outra, casais nos fundos, etc. O cheiro é de puro hidromel e rum. Há uma elfa tocando uma música dançante, que atrai a atenção de várias donzelas, bárbaros e outros bardos. O taverneiro, anão, está limpando o balcão.',
		opcoes: [{
			texto: 'Pedir uma bebida [10 Moedas]',
			proxNarrativa: 'dialogoTaverneiro'
		},{
      texto: 'Ir até o bardo',
      proxNarrativa: 'dialogoBardo'
    }]
	},

  dialogoTaverneiro: {
    alteracao: diminuiMoedas,
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: 'O taverneiro olha para você, com uma cara desconfiada; de perto, ele não parece um anão. Ele pega um copo vazio, enche de hidromel e lhe entrega. Você bebe, e o gosto..Bem, é de hidromel que foi mal conservado numa taverna antiga. Limpando o balcão, o taverneiro lhe pergunta: "Você não é daqui, é? O que te traz até Argon?" ',
    opcoes: [{
      alteracao: diminuiKarma,
      texto: 'O clima, a vida tranquila e a bela música que este lugar tem a oferecer!',
      proxNarrativa: 'rumoresTaverneiro'
    },{
      texto: 'Não sou daqui. Estou vagando por Hesteren, em busca de uma aventura que faça de mim um verdadeiro herói.',
      proxNarrativa: 'rumoresTaverneiro'
    },{
      alteracao: diminuiCarisma,
      texto: 'Apenas concentre-se em fazer seu trabalho, taverneiro.',
      proxNarrativa: 'rumoresTaverneiro'
    }]
  },

  rumoresTaverneiro: {
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: 'Ele te olha, surpreso. Talvez não esperasse uma resposta dessas, talvez? Ele começa a limpar seu copo, agora vazio, e o enche novamente. "De qualque forma, filho, tu não chegou em bons momentos. Esta taverna só está cheia porque amanhã de manhã, todas estas pessoas estarão partindo, provavelmente para a Cidade Liberdade."',
    opcoes: [{
      texto: 'O quê? Por quê?',
      proxNarrativa: 'primeiraQuestTaverneiroPart1'
    },{
      texto: 'O problema é deles. Eu vou ficar um tempo por aqui',
      proxNarrativa: 'primeiraQuestTaverneiroPart1'
    },{
      texto: '[Ficar em Silêncio]',
      proxNarrativa: 'primeiraQuestTaverneiroPart1'
    }]
  },

  primeiraQuestTaverneiroPart1: {

    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: '"Pois é, eles queriam mais uma última festa nestas terras antes de irem embora. A verdade é que Argon será a cidade que acabará com os tempos de paz de Hesteren: algo ou alguém está assombrando esta cidade entre as montanhas, causando o sumiço de moradores e roubando pergaminhos antigos sobre magia negra da biblioteca. Ninguém quer arriscar ficar aqui nem mais um dia, filho."',
    opcoes: [{
      texto: 'Por que você não vai embora também?',
      proxNarrativa: 'primeiraQuestTaverneiroPart2Alternativa'
    },{
      texto: 'Me conte mais sobre isso, por favor',
      proxNarrativa: 'primeiraQuestTaverneiroPart2'
    },{
      texto: 'Interessante. Magos negros, talvez? Seja o que for, chamou minha atenção, se quer saber. Qual o preço da estadia, taverneiro? Acho que vou passar umas noites aqui.',
      proxNarrativa: 'primeiraQuestTaverneiroPart2EstadiaBarata'
    }]
  },

  primeiraQuestTaverneiroPart2: {
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: '"Não tente bancar o herói, garoto. Você não viu o que os moradores e eu vimos. O que quer que seja, é brutal e maligno. Seria necessário o próprio Merlin para criar um confronto justo!"',
    opcoes: [{
      texto: 'Não tente você me parar! Não preciso de sua ajuda, somente dos seus serviços. Qual o preço da estadia?',
      proxNarrativa: 'primeiraQuestTaverneiroPart2EstadiaBarata'
    },{
      texto: 'É um desafio, então? Só vejo motivos para investigar!',
      proxNarrativa: 'primeiraQuestTaverneiroPart2EstadiaBarata'
    },{
      texto: 'Você deve ter se enganado. Meu nome não é Merlin. Vou ficar e por um fim a essas ondas de terror. Me informe o preço do quarto, vou ficar em Argon por um tempo.',
      proxNarrativa: 'primeiraQuestTaverneiroPart2EstadiaBarata'
    }]
  },

  primeiraQuestTaverneiroPart2Alternativa: {
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: '"Tudo que me pertence está aqui, e não posso simplesmente empacotar minhas coisas e ir embora. Esta taverna foi aberta puramente com o meu esforço, e não é uma praga que vai me tirar daqui.", ele diz.',
    opcoes: [{
      texto: 'É justo. Seguindo seu exemplo..Qual o preço da estadia?',
      proxNarrativa: 'primeiraQuestTaverneiroPart2EstadiaBarata'
    },{
      alteracao: diminuiCarisma,
      texto: 'Burro, é o que você é. Uma taverna melhor pode ser construída com metade do esforço. Parece que este lugar foi feito para mim, um herói de verdade. Me dê a chave de um quarto qualquer.',
      proxNarrativa: testePrecoEstadia
    }]
  },

  primeiraQuestTaverneiroPart2EstadiaBarata: {
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: '"Me parece que você quer um quarto, então. Muito bem, irá lhe custar 30 moedas de ouro. Geralmente eu cobro por noite, mas este deve ser o máximo de tempo que você durará vivo. Façamos um trato: se sobreviver a esta noite, ficarás aqui o tempo que quiser somente com estas 30 moedas que me pagará agora."',
    opcoes: [{
      alteracao: custodaEstalagemBarata,
      texto: '[Entregar Moedas]',
      proxNarrativa: 'jogadorNoQuarto'
    },{
      alteracao: custodaEstalagemBarata,
      texto: 'Fechado. Você está prestes a perder dinheiro, amigo. [Entregar Moedas]',
      proxNarrativa: 'jogadorNoQuarto'
    },{
      alteracao: custodaEstalagemBarata,
      texto: 'Se você insiste...Aqui está. [Entregar Moedas]',
      proxNarrativa: 'jogadorNoQuarto'
    }]
  },

  primeiraQuestTaverneiroPart2EstadiaCara: {
    imagem: 'imgs/Capitulos/cenarioTaverneiroCap1.jpg',
    narrativa: '"Age como um arrogante e quer a minha hospitalidade? Muito bem. Vai custar 70 moedas de ouro.", ele diz, pegando seu copo e jogando a bebida restante fora; cospe dentro dele, e começa a limpá-lo.',
    opcoes: [{
      alteracao: custodaEstalagemCara,
      texto: '[Entregar Moedas]',
      proxNarrativa: 'jogadorNoQuarto'
    },{
      alteracao: custodaEstalagemCara,
      texto: 'Me admira que esse lixo de lugar ainda receba gente. [Entregar Moedas]',
      proxNarrativa: 'jogadorNoQuarto'
    }]
  },

  dialogoBardo: {
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'A elfa está tocando de olhos fechados algo animado, que faz alguns poucos bárbaros a volta dançarem. Você puxa uma cadeira próxima e se senta, observando o lugar. Algumas pessoas estão jogando um jogo de cartas qualquer, gritando, rindo e bebendo. A elfa nota sua presença, abre os olhos e olha para você. "Veja bem, se não é um viajante que temos aqui! Um comerciante? Não..Um aventureiro! Diga-me: de onde vem?"',
    opcoes: [{
      texto: 'Não se preocupe comigo, apenas estou apreciando a música. Continue, por favor.',
      proxNarrativa: 'lendasDoBardo'
    },{
      alteracao: aumentaCarisma,
      texto: 'Vim da grande Cidade Porto. Sou um aventureiro, de fato, buscando uma grande aventura e uma bela mulher',
      proxNarrativa: 'lendasDoBardo'
    },{
      texto: 'Já percebo que esta cidade é cheia de curioso, não é mesmo? Apenas toque, por favor.',
      proxNarrativa: 'lendasDoBardo'
    }]
  },

  lendasDoBardo:{
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'Ela ri. Começa a tocar mais alto, e um pequeno saco de moedas é jogado para perto dela, que simplesmente o ignora. Você olha para o saco, pensando em pegá-lo, talvez? Ou só apenas estranhando o fato de alguém ter ignorado um saco de dinheiro voando? Seja o que for, ela percebe sua reação e ri. "Vá se acostumando: nós de Argon somos curiosos, sim, e no mínimo interessantes. Aproveite nossa companhia, pois se a praga continuar nos atacando, nem eu nem ninguém aqui iremos durar muito. A propósito, qual seu nome?"',
    opcoes: [{
      texto: 'Viajante, prazer em conhecê-la. Você disse algo sobre uma praga? O que é?',
      proxNarrativa: 'primeiraQuestBardoPart1'
    },{
      alteracao: mudaNomeConhecido,
      texto: 'Pode me chamar de viajante, apenas. Me conte mais sobre esta praga; é a história de uma de suas canções?',
      proxNarrativa: 'primeiraQuestBardoPart1'
    },{
      texto: 'Meu nome não é importante, mas você me disse algo sobre uma praga e os cidadãos de Argon não durarem. O que significa?',
      proxNarrativa: 'primeiraQuestBardoPart1Alternativa'
    }]
  },

  primeiraQuestBardoPart1: {
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'Muito bem, viajante.Para ser sincera, eu gostaria que este boato fosse só mais uma de minhas canções, mas infelizmente é uma assombrosa realidade: uma praga, algo, ou, na pior das hipóteses, alguém, está atacando esta cidade entre as montanhas, roubando pergaminhos antigos sobre necromancia e sequestrando moradores notórios na região central de Argon. Todos que tentaram investigar acabaram mortos. Toda esta gente que estás vendo aqui agora, dançando e se divertindo, partirá para as outras terras de Hesteren logo pela manhã, incluindo a mim.',
    opcoes: [{
      alteracao: aumentaInteligencia,
      texto: 'Necromancia? Não há muitos relatos de Necromentes em Hesteren há 5 séculos, pelo menos. Deve valer a pena invstigar, não?',
      proxNarrativa: 'primeiraQuestBardoPart2'
    },{
      texto: 'Todos irem embora? De fato, é no mínimo intrigante. Há quanto tempo isso acontece?',
      proxNarrativa: 'primeiraQuestBardoPart2'
    },{
      texto: 'Ir embora? Me parece ser a decisão mais inteligente, mas não a mais valente. Se você mesma me referiu como um aventureiro, me dê razões para não ficar e investigar, não é mesmo?',
      proxNarrativa: 'primeiraQuestBardoPart2'
    }]
  },

  primeiraQuestBardoPart1Alternativa: {
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: '"Não confias em mim para dizer seu nome? Pois bem, então não confiarei em ti para dizer sobre a praga. Quem sabes o que pode fazer com tal informação!"',
    opcoes: [{
      alteracao: diminuiMoedas,
      texto: 'Bom ponto, mas talvez isso possa ajudar. [Entregar 10 Moedas]',
      proxNarrativa: 'primeiraQuestBardoPart2Alternativa'
    },{
      texto: 'Faz sentido. Mas o meu nome vale mais do que um simples boato, não é verdade? Não é possível comparar os dois. Posso saber sobre a praga com qualquer um deste lugar, mas o meu nome, você só saberá através de mim. [Carisma]',
      proxNarrativa: testeDeCarisma
    },{
      alteracao: mudaNomeConhecido,
      texto: 'Veja bem, apenas um aventureiro, é o que sou. Caso esta praga que falas se espalhe, toda Hesteren aos poucos ficará sabendo, com ou sem minha intervenção. Não há porque esconder tal lenda de mim, veja bem.',
      proxNarrativa: 'primeiraQuestBardoPart1'
    }]
  },

  primeiraQuestBardoRevelaBoato: {
      imagem:  'imgs/Capitulos/cenarioBardoCap1.jpg',
      narrativa: '"Parece que tens o dom da persuasão, não é mesmo? Pois bem. Há uma praga em Argon, ou algo, ou até mesmo alguém, que ultimamente anda sequestrando os moradores mais importantes e roubando pergaminhos e livros sobre Necromancia."',
      opcoes: [{
        texto: 'Uma praga? Me parece um necromante, se quer saber',
        proxNarrativa: 'primeiraQuestBardoPart2'
      },{
        texto: 'Apenas isso? Achei que fosse algo mais interessante, elfa.',
        proxNarrativa: 'primeiraQuestBardoPart2'
      },{
        texto: 'Interessante, muito interessante. Há quanto tempo isso vem surgindo?',
        proxNarrativa: 'primeiraQuestBardoPart2'
      }]
  },

  primeiraQuestBardoEscondeBoato: {
    imagem:  'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: '"Então vá perguntar isso a qualquer bêbado nesta taverna! Bem, caro viajante, mesmo não gostando muito de você, acho que merece saber, para não morrer à noite sem saber o que lhe atingiu. Há uma praga assombrando Argon, sequestrando cidadãos e roubando pergaminhos de magia negra."',
    opcoes: [{
      texto: 'Uma praga? Poderia ser um necromante, não?',
      proxNarrativa: 'primeiraQuestBardoPart2'
    },{
      texto: 'É uma aventura que acabei de ouvir? Interessante! Conte-me mais',
      proxNarrativa: 'primeiraQuestBardoPart2'
    },{
      texto: 'Menos intrigante do que achei que seria, devo admitir',
      proxNarrativa: 'primeiraQuestBardoPart2'
    }]
  },

  primeiraQuestBardoPart2: {
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: '"Isso vem acontecendo há alguns dias, uns 3 ou 4. Mas não, não vá investigar nem nada do tipo. Você pode não ser meu amigo, mas já lhe aviso que se averiguar, vivo não sairá!", ela interrompe a música e faz um dedilhado que te deixa um pouco espantado, com medo, talvez. "Pela sua aparência, você não irá me dar ouvidos, então, se for o caso, ao menos deixe algumas moedas para a elfa e demonstre sua admiração pela boa música."',
    opcoes:[{
      alteracao: doacaoBardoMenor,
      texto: 'Justo. [Jogador 10 Moedas]',
      proxNarrativa: 'despedidaBardo'
    },{
      alteracao: doacaoBardoMedia,
      texto: 'Certo, você merece. [Jogar 20 Moedas]',
      proxNarrativa: 'despedidaBardo'
    },{
      alteracao: doacaoBardoMaior,
      texto: 'Claro. Espero te ver novamente em alguma noite como esta. [Jogar 35 Moedas]',
      proxNarrativa: 'despedidaBardo'
    }]
  },

  despedidaBardo: {
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'Você joga suas moedas para perto dela, e ela ignora, justamente como fez com o outro saco que havia aparecido anteriormente. "A cidade de Argon agradece sua doação, viajante! Boa sorte em tua investigação, farei questão de tocar alguma melodia em teu funeral. Se quer meu conselho, fique por aqui. Não ficarei nesta taverna hoje à noite, então lhe darei a chave do meu quarto." [Ela para a música por alguns segundos e lhe entrega a chave].',
    opcoes: [{
      texto: 'Que os deuses o acompanhem, elfa. [Pegar a Chave e Ir Para o Quarto]',
      proxNarrativa: 'jogadorNoQuarto'
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
  $(musicaDeFundo).attr('src', cenarios[proximoCenario].musica);
  $(musicaDeFundo).prop('volume', 0.65);
  musicaDeFundo.play();
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

      let alteracaoAtributosDialogo = cenarios[proximoCenario].opcoes[i].alteracao,
          alteracaoAtributosCenario = cenarios[proximoCenario].alteracao;

			let proxNarra = $(opcaoClicada).data("proxNarrativa");

      //Algumas escolhas resultam na alteração de algum atributo do personagem: força, carisma, etc.
      //essas escolhas tem a propriedade 'alteracao', que direciona até a função que faz a mudança necessária. Se esse campo existir, ele executa a função e a alteração é feita.
      if(alteracaoAtributosDialogo != undefined){
        alteracaoAtributosDialogo = alteracaoAtributosDialogo(jogador);
      }

      if(alteracaoAtributosCenario != undefined){
        alteracaoAtributosCenario = alteracaoAtributosCenario(jogador);
      }

      //Caso o valor do data 'proxNarrativa' seja uma função, ele a executa, passando o objeto 'jogador' como parâmetro
      //Caso contrário, ele simplesmente não entra na condição e segue executando as próximas linhas
			if (typeof proxNarra === "function") {
				proxNarra = proxNarra(jogador);
			}
      //Função que deleta os botões atuais, para dar lugar às opções da próxima narrativa
      deletaOpcoesAnteriores();
      //A função chama a si mesma, agora com um novo cenário como parâmetro, reiniciando o ciclo. Isso é feito até que o jogo termine.
			gerenciaCenarioseOpcoes(proxNarra, jogador);
		});

	}
}

$(botaoConcluirAvatarEl).click(function SymphonyOfBlades(){
  if(nomeEscolhido.innerHTML != '' &&  classeEscolhida.innerHTML != ''){
    campanha();
 }
});
