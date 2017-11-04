/*   FUNÇÕES PRIMORDIAIS E
       MAIS IMPORTANTES      */

function campanha(){

  //Atribui a 'jogador' o objeto que contém todos os dados do personagem
  //criado pelo usuário.
  let jogador = criaObjetoJogador();

  //Remove todo o HTML da criação de avatar para dar espaço ao container que
  //abriga os cenários do jogo

  containerAvatar.remove();
  botaoConcluirAvatarEl.remove();
  explicacoesSobreAvatar.remove();

  //Deixa o HUD visível e chama a função que o atualiza com os dados do jogador

  $('#containerHUD').removeClass('invisivel');
  atualizaHUD(jogador);

  //Chama a função principal, apenas uma única vez
  gerenciaCenarioseOpcoes('tavernaInicial', jogador);

}

//Função que cria [dinamicamente] as opções de diálogos (botões)
function criaOpcoesDialogo(conteudoOpcao){

  let novaOpcao = document.createElement('button');

  $(novaOpcao).addClass('botoesOpcoesDialogo');
  novaOpcao.innerHTML = conteudoOpcao;

  containerBotoes.append(novaOpcao);

  return;

}

//Função responsável por deletar as opções de Diálogo anteriores a do cenário atual.
function deletaOpcoesAnteriores(){
  let elementosAnteriores = $('.botoesOpcoesDialogo');

  for(let opcaoASerExcluida of elementosAnteriores){
    opcaoASerExcluida.remove();
  }
}

//Função que atualiza o HUD, para que o jogador possa ter controle sobre seu personagem.
function atualizaHUD(jogador){

  nomeAtual.innerHTML = jogador.nome;
  forcaAtual.innerHTML = jogador.forca;
  moedasAtuais.innerHTML = jogador.moedas;
  InteligenciaAtual.innerHTML = jogador.inteligencia;
  AgilidadeAtual.innerHTML = jogador.agilidade;
  CarismaAtual.innerHTML = jogador.carisma;
  KarmaAtual.innerHTML = jogador.karma;

}

/* FIM DAS FUNÇÕES PRIMORDIAIS */

//Funções que aumentam/diminuem atributos conforme a escolha do jogador

function diminuiCarisma(jogador){
  jogador.carisma -= 1;
  if(jogador.carisma <= 0){
    jogador.carisma = 0;
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

function diminuiKarma(jogador){
  jogador.karma -= 1;

  return;
}

function aumentaKarma(jogador){
  jogador.karma += 1;
  return;
}

function diminuiMoedas(jogador){
  jogador.moedas -= 10;
  if(jogador.moedas <= 0){
    jogador.moedas = 0;
  }
  return;
}

function aumentaMoedas(jogador){

  jogador.moedas += 10;
  console.log(jogador.moedas);
  return;

}

function aumentaMoedasMaiorQt(jogador){
  jogador.moedas += 100;
  return;
}

function diminuiInteligencia(jogador){
  jogador.inteligencia -= 1;
  if(jogador.inteligencia < 0){
    jogador.inteligencia = 0;
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

function aumentaForca(jogador){
  jogador.forca += 1;
  return;
}

function diminuiForca(jogador){
  jogador.forca -= 1;
  return;
}

function aumentaAgilidade(jogador){
  jogador.agilidade += 1;
  return;
}

function aumentaAtributosCombate(jogador){
  jogador.forca += 1;
  jogador.agilidade +=1;
  jogador.inteligencia += 1;
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

function testeDeCarisma(jogador) {

  if(jogador.carisma > 2){
    console.log(jogador.carisma);
    return 'primeiraQuestBardoRevelaBoato';
  }else{
    console.log(jogador.carisma);
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

function bardoMorrera(jogador){
  jogador.proximaMorte = 'bardo';
  return;
}

function taberneiroMorrera(jogador){
  jogador.proximaMorte = 'taverneiro';
  return;
}

function testeDeForcaMaior(jogador){
  if(jogador.forca > 3 ){
    return 'bloqueioTrue';
  }else{
    return 'bloqueioFalse';
  }
}

function testeDeForcaTaverna(jogador){

  if(jogador.forca >= 2){
    return 'bloqueioNecromanteTrue';
  }else{
    return 'bloqueioNecromanteFalse';
  }
}

function testeDeAgilidadeTaverna(jogador){

    if(jogador.agilidade >= 3){
      return 'desvioTrue';
    }else{
      return 'desvioFalse';
    }

}

function testeDeAgilidadeTavernaPart2(jogador){
  if(jogador.agilidade > 3){
    return 'desvioChuteSucesso';
    console.log('sucesso');
  }else{
    return 'desvioChuteFracasso';
    console.log('fracasso');
  }
}

function testeDeAgilidadeContraAtq(jogador){

  if(jogador.agilidade > 3){
    return 'ConAtqTrue';
  }else{
    return 'ConAtqFalse';
  }

}

function mortePersonagem(jogador){
  if(jogador.proximaMorte === 'taverneiro'){
    return 'morteTaverneiro';
  }else if(jogador.proximaMorte === 'bardo'){
    return 'morteBardo';
  }
}

function testeDeKarmaCap1(jogador){
  if(jogador.karma < 0){
    return 'finalCap1JogadorPreso';
  }else{
    return 'finalCap1JogadorProtegido';
  }
}

function testeDeCarismaMagnus(jogador){
  if(jogador.carisma > 3){
    return 'infoMagnusGratis';
  }else{
    return 'infoMagnusNaoGratis';
  }
}

function testeDeForcaMagnus(jogador){
  if(jogador.forca > 3){
    return 'intimidacaoMagnusSucesso';
  }else{
    return 'intimidacaoMagnusFracasso';
  }
}

function pagamentoMagnus(jogador){
  jogador.moedas -= 60;
  return;
}

function defineFesta(jogador){
  jogador.eventoCap2 = 'eventoFesta';
  return;
}

function defineEvacuacao(jogador){
  jogador.eventoCap2 = 'eventoEvacuacao';
  return;
}

function defineComunicado(jogador){
  jogador.eventoCap2 = 'eventoComunicado';
}

function qualEvento(jogador){
  if(jogador.eventoCap2 === 'eventoFesta'){
    return 'eventoFesta';
  }else if(jogador.eventoCap2 === 'eventoEvacuacao'){
    return 'eventoEvacuacao';
  }else{
    return 'eventoComunicado';
  }
}

function testeDestreza(jogador){
  if(jogador.agiliade > 3){
    return 'arremessoMestre';
  }else{
    return 'arremessoFalho';
  }
}
//Object (struct) que contém todos os cenários possíveis no jogo. Todos são compostos por uma imagem, uma narrativa e 3
//opções, que desencadeam um novo cenário (exceto pelas escolhas de mais peso, que tem apenas 2 opções).

var cenarios = {

  /*       CENÁRIOS E RAMIFICAÇÕES
               DO CAPÍTULO 1                   */

/*SINOPSE: O VIAJANTE (JOGADOR) CHEGA PELA NOITE NA CIDADE DE ARGON, UMA CIDADE ENTRE AS MONTANHAS. LÁ, ELE ENTRA EM UMA TAVERNA, PROCURANDO UM LUGAR PARA
  PASSAR A NOITE. CHEGANDO LÁ, ELE FALA COM ALGUÉM (UM BARDO OU O TAVERNEIRO) E DESCORBE QUE HÁ UMA PRAGA AMEAÇANDO A CIDADE. O JOGADOR DECIDE FICAR E INVESTIGAR.*/

	tavernaInicial: {
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/TabernSongCap1.mp3",
		imagem: 'imgs/Capitulos/cenarioTavernaCap1.jpg',
		narrativa: 'A taverna está bastante movimentada, com bárbaros jogando cartas em uma mesa, comerciantes contando suas moedas em outra, casais nos fundos, etc. O cheiro é de puro hidromel e rum. Há uma elfa tocando uma música dançante, que atrai a atenção de várias donzelas, bárbaros e outros bardos. O taverneiro, anão, está limpando o balcão.',
		opcoes: [{
			texto: 'Pedir uma bebida',
			proxNarrativa: 'dialogoTaverneiro'
		},{
      texto: 'Ir até o bardo',
      proxNarrativa: 'dialogoBardo'
    }]
	},

  dialogoTaverneiro: {
    alteracao: taberneiroMorrera,
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
    alteracao: bardoMorrera,
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'A elfa está tocando de olhos fechados algo animado, que faz alguns poucos bárbaros dançarem. Você puxa uma cadeira próxima e se senta. Algumas pessoas estão jogando um jogo de cartas qualquer, gritando, rindo e bebendo. A elfa nota sua presença, e abre os olhos. "Veja bem, se não é um viajante que temos aqui! Um comerciante? Não..Um aventureiro! Diga-me: de onde vem?"',
    opcoes: [{
      texto: 'Não se preocupe comigo, apenas estou apreciando a música. Continue, por favor.',
      proxNarrativa: 'lendasDoBardo'
    },{
      alteracao: aumentaCarisma,
      texto: 'Vim da grande Cidade Porto. Sou um aventureiro, de fato, buscando uma grande aventura e uma bela mulher',
      proxNarrativa: 'lendasDoBardo'
    },{
      alteracao: diminuiCarisma,
      texto: 'Apenas toque. Não vim aqui para conversar.',
      proxNarrativa: 'lendasDoBardo'
    }]
  },

  lendasDoBardo:{
    imagem: 'imgs/Capitulos/cenarioBardoCap1.jpg',
    narrativa: 'Ela ri. Ainda tocando, ela para por pouco tempo e pega um saco de moedas no ar, destinado para ela, e o guarda. Seja o que for sua reação, ela a percebe e ri. "Vá se acostumando: nós de Argon somos curiosos, sim, e no mínimo interessantes. Aproveite nossa companhia, pois se a praga continuar nos atacando, nem eu nem ninguém aqui iremos durar muito. A propósito, qual seu nome?"',
    opcoes: [{
      texto: 'Viajante, prazer em conhecê-la. Você disse algo sobre uma praga? O que é?',
      proxNarrativa: 'primeiraQuestBardoPart1'
    },{
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
      proxNarrativa: 'primeiraQuestBardoRevelaBoato'
    },{
      texto: 'Veja bem, o botao saberei em qualquer lugar, mas meu nome, só eu conheço. Qual valerá mais? [Carisma]',
      proxNarrativa: testeDeCarisma
    },{
      texto: 'Apenas um aventureiro, é o que sou. Toda Hesteren aos poucos ficará sabendo, com ou sem minha intervenção. Não há porque esconder tal lenda de mim, veja bem.',
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
    narrativa: 'Você joga um pequeno saco de moedas para ela, e ela o pega e guarda, justamente como fez com o outro saco que havia aparecido anteriormente. "A cidade de Argon agradece sua doação, viajante! Boa sorte em tua investigação, farei questão de tocar alguma melodia em teu funeral. Se quer meu conselho, fique por aqui. Não ficarei nesta taverna hoje à noite, então lhe darei a chave do meu quarto." [Ela para a música por alguns segundos e lhe entrega a chave].',
    opcoes: [{
      texto: 'Que os deuses o acompanhem, elfa. [Pegar a Chave e Ir Para o Quarto]',
      proxNarrativa: 'jogadorNoQuarto'
    }]
  },

  jogadorNoQuarto: {
    alteracao: checkpoint,
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/AmbientSong.mp3",
    imagem: 'imgs/Capitulos/cenarioQuartoCap1.jpg',
    narrativa: 'O quarto foi feito para duas pessoas, não apenas uma. Teria você conseguido a vantagem de ter um quarto só para ti? Talvez. O único som audível é o da festa que acontece no andar de baixo, e que deve durar por mais algumas horas. A luz da lua junto a uma ou outra lamparina espalhadas pelo quarto são sua única fonte de iluminação. Há também, próximo à porta, uma estante com alguns poucos livros velhos.',
    opcoes: [{
      texto: '[Descansar]',
      proxNarrativa: 'ataqueATaverna'
    },{
      alteracao: aumentaMoedas,
      texto: '[Procurar No Quarto Qualquer Coisa Que Possa Ser Útil]',
      proxNarrativa: 'achouMoedasNoQuarto'
    },{
      alteracao: aumentaInteligencia,
      texto: '[Ler um Livro]',
      proxNarrativa: 'leuLivroNoQuarto'
    }]
  },

  achouMoedasNoQuarto: {
    imagem: 'imgs/Capitulos/cenarioQuartoCap1.jpg',
    narrativa: 'Você procura nas gavetas, e acha 10 moedas de ouro.',
    opcoes: [{
      alteracao: aumentaMoedas,
      texto: '[Descansar]',
      proxNarrativa: 'ataqueATaverna'
    }]
  },

  leuLivroNoQuarto: {
    imagem:'imgs/Capitulos/cenarioQuartoCap1.jpg',
    narrativa: 'Você lê alguns capítulos de um livro velho sobre Magia Negra, que, pelo que parece, é o assunto do momento.',
    opcoes: [{
      alteracao: aumentaInteligencia,
      texto: '[Descansar]',
      proxNarrativa: 'ataqueATaverna'
    }]
  },

  ataqueATaverna: {
    imagem: 'imgs/Capitulos/cenarioQuartoCap1.jpg',
    narrativa: 'No meio de seu profundo sono, você é acordado pelo som de lâminas e gritos, e até mesmo o de fogo. Rapidamente, você se veste e arruma seus pertences.',
    opcoes: [{
      texto: '[Descer e Ver o Que Está Acontecendo]',
      proxNarrativa: 'ataqueNecromantes'
    }]
  },

  ataqueNecromantes: {
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/BattleSong1.mp3",
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você desce as escadas rapidamente, preparado (ou não) para qualquer ataque que possa ser feito contra você. Chegando no primeiro andar, tudo o que você vê são alguns corpos inconscientes no chão, seres variados lutando com socos e espadas, e bastante sangue derramado. Seria uma briga ocasional que acontece em qualquer taverna? Poderia ser, mas você nota uma figura um tanto quanto estranha, que não estava presente antes: uma pessoa, com um manto cinzento um pouco rasgado, com pouco do rosto revelado, pele bem clara e unhas grandes e de formato triangular. Perto dela, não há nada que se aproxime sem ser alvejada com ataques rápidos e visivelmente dolorosos; avança por todo o estabelecimento, que não é pequeno, atacando todos em seu caminho, e está vindo em direção a você.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'ataqueNecromantesPart2'
    }]
  },

  ataqueNecromantesPart2: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Ele passa pela última pessoa que estava entre você e ele, e se prepara para te atacar. Não porta nenhum tipo de arma, somente as mãos, envoltas por uma camada de energia negra. Ele se aproxima mais e tenta desferir um soco bem no seu rosto.',
    opcoes: [{
      texto: '[Bloquear o Soco]',
      proxNarrativa: testeDeForcaTaverna
    },{
      texto: '[Desviar do Soco]',
      proxNarrativa: testeDeAgilidadeTaverna
    },{
      texto: '[Contra-Atacar]',
      proxNarrativa: testeDeAgilidadeContraAtq
    }]
  },

  bloqueioNecromanteTrue: {
    alteracao: aumentaForca,
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você consegue parar o soco do necromante com sua mão, mas com bastante esforço, e não vai durar muito tempo. Ele de imediato se assuta, mas é ágil o suficiente para te dar um chute nas costelas.',
    opcoes: [{
      texto: '[Desviar do Chute]',
      proxNarrativa: testeDeAgilidadeTavernaPart2
    },{
      texto: '[Bloquear o Chute]',
      proxNarrativa: testeDeForcaMaior
    }]
  },

  bloqueioNecromanteFalse: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você tenta para o soco, mas sua força não é suficiente, e ele te acerta em cheio, te jogando contra uma mesa. Você se vira, e a única coisa no seu campo de visão é seu pé, pronto para lhe desferir um chute.',
    opcoes: [{
      texto: '[Desviar do Chute]',
      proxNarrativa: testeDeAgilidadeTavernaPart2
    },{
      texto: '[Bloquear o Chute]',
      proxNarrativa: testeDeForcaMaior
    }]
  },

  desvioTrue: {
    alteracao: aumentaAgilidade,
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você desvia para o lado rapidamente e o soco é em vão. O necromante se assusta, mas, tão rapidamente quanto, pula em sua direção, lhe desferindo um chute bem no peito.',
    opcoes: [{
      texto: '[Desviar do Chute]',
      proxNarrativa: testeDeAgilidadeTavernaPart2
    },{
      texto: '[Bloquear o Chute]',
      proxNarrativa: testeDeForcaMaior
    }]
  },

  desvioFalse: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você não é rápido o suficiente, e o soco vai bem no seu rosto, e dói...Muito. Você cai no chão de joelhos e, ao se levantar, se depara com o pé do homem misterioso vindo até seu peito. Bom, é um chute.',
    opcoes: [{
      texto: '[Desviar do Chute]',
      proxNarrativa: testeDeAgilidadeTavernaPart2
    },{
      texto: '[Bloquear o Chute]',
      proxNarrativa: testeDeForcaMaior
    }]
  },

  ConAtqTrue: {
    alteracao: aumentaAgilidade,
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Ágil como um pica-pau, você consegue agarrar o braço dele, puxar para si e desferir um soco bem no queixo, que derruba ele no chão. No mesmo instante, ele se levanta com um salto e tenta te desferir um chute bem no peito.',
    opcoes: [{
      texto: '[Desviar do Chute]',
      proxNarrativa: testeDeAgilidadeTavernaPart2
    },{
      texto: '[Bloquear o Chute]',
      proxNarrativa: testeDeForcaMaior
    }]
  },

  ConAtqFalse: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você tenta dar um outro soco paralelo, mas o homem misterioso é mais rápido e você cai no chão imediatamente, batendo a cabeça numa mesa, te deixando inconsciente.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: mortePersonagem
    }]
  },

  bloqueioTrue: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você consegue segurar a perna do homem misterioso, e o joga contra a parede. Você se afasta, e se prepara para lhe desferir um soco. Antes que você pudesse fazer qualquer coisa, a energia negra que cobria suas mãos se espalha pelo seu corpo; ele toma impulso na parede e consegue lhe desferirum soco que te joga no chão e te deixa inconsciente.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: mortePersonagem
    }]
  },

  bloqueioFalse: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você tenta segurar a perna do homem misterioso, mas você não é forte o suficiente e, mesmo com uma potência menor, você recebe o chute, perde o equilíbrio e bate a cabeça contra uma mesa de madeira, te deixando inconsciente.',
    opcoes:[{
      texto: '[Continuar]',
      proxNarrativa: mortePersonagem
    }]
  },

  desvioChuteSucesso: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Você se afasta do homem misterioso e consegue se esquivar do chute. Entretanto, ele se mostra ágil como um pica-pau, e dá um salto contra você, lhe desferindo um outro chute no ar que te acerta em cheio. Você pade a cabeça na parede e cai, inconsciente.',
    opcoes:[{
      texto: '[Continuar]',
      proxNarrativa: mortePersonagem
    }]
  },

  desvioChuteFracasso: {
    imagem: 'imgs/Capitulos/cenarioatqNecroCap1.png',
    narrativa: 'Mesmo tendo feito os movimentos certos, você acaba não sendo rápido o suficiente, e leva o chute em cheio, sendo lançado contra uma mesa de madeira. Na colisão, você acaba batendo sua cabeça na ponta desta, e cai, inconsciente.',
    opcoes:[{
      texto: '[Continuar]',
      proxNarrativa: mortePersonagem
    }]
  },

  morteBardo: {
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/DarkAmbientMusic.mp3",
    imagem: ' ',
    narrativa: 'Você acorda, com a visão turva e meio zonzo; não consegue estipular o tempo que ficou inconsciente, mas presume que foi bastante: a taverna agora está completamente destruída: móveis quebrados, sangue no chão e nas paredes, e alguns corpos no chão. Se estes estão mortos, é difícil dizer, mas há um em especial que você reconhece, preso na parede por uma lança negra. Você se aproxima, e, na medida que seus sentidos vão voltando ao normal, você consegue identificar o corpo: uma elfa, de cabelos loiros, com um alaúde quebrado ao lado, com os trajes cheios de sangue; o bardo, lá estava, a beira da morte.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'morteBardoPt2'
    }]
  },

  morteBardoPt2: {
    imagem: ' ',
    narrativa: 'Você se aproxima, e a elfa levanta a cabeça repentinamente, olhando para você; ela tosse bastante, e cospe muito sangue. "Eu disse para aproveitar nossa companhia, viajante. Nada é capaz de impedir tal criatura. Ela irá destruir tudo em seu caminho para conseguir o que quer."',
    opcoes: [{
      texto: 'O que aconteceu com você?',
      proxNarrativa: 'explicacaoMorteNPC'
    },{
      texto: 'Tola, você deveria ter partido o quanto antes.',
      proxNarrativa: 'discursoPreMorteBardo'
    },{
      texto: '[Examinar a Lança]',
      proxNarrativa: 'finalCap1Part1'
    }]
  },

  explicacaoMorteNPC: {
    imagem: ' ',
    narrativa: '"Você já tinha subido quando aconteceu. Nós ouvimos gritos e sons de batalha do lado de fora, e então trancamos tudo. Foi só uma questão de tempo até eles invadirem a taverna e matassem todos. [Tosse]. Parece que a sorte está ao seu lado, não é mesmo, viajante? Que os deuses nos recebam em seus aposentos.". Poucos segundos depois, esta pessoa que antes estava entre a vida e a morte, morre.',
    opcoes: [{
      texto: '[Examinar a Lança]',
      proxNarrativa: 'finalCap1Part1'
    }]
  },

  discursoPreMorteBardo: {
    imagem: ' ',
    narrativa: '"E adiar o inevitável? Um bardo jamais nega seu destino, nós vivemos cada momento como se fosse o último, cantando, bebendo e dançando. Nós acreditamos que cada música que fazemos é responsável por narrar uma parte da história de Hesteren, e minha parte termina aqui. Adeus viajante, que os deuses me recebam com alegria...E um novo alaúde." Poucos segundos após dito, a elfa morre, com um sorriso no rosto.',
    opcoes: [{
      texto: '[Examinar a Lança]',
      proxNarrativa: 'finalCap1Part1'
    }]
  },

  morteTaverneiro: {
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/DarkAmbientMusic.mp3",
    imagem: ' ',
    narrativa: 'Você acorda, com a visão turva e meio zonzo; não consegue estipular o tempo que ficou inconsciente, mas presume que foi bastante: a taverna agora está completamente destruída: móveis quebrados, sangue no chão e nas paredes, e alguns corpos no chão. Se estes estão mortos, é difícil dizer, mas há um em especial que você reconhece, preso na parede por uma lança negra. Quando você se aproxima, você enxerga uma figura com trajes de início brancos, mas que estão agora manchados de sujeira e sangue. Botas esfarrapadas e velhas. Quando sua visão começa a voltar ao normal, você consegue ver o rosto: trata-se de um homem branco, calvo e com uma barba volumosa. O taverneiro ali está, a beira da morte.',
    opcoes: [{
      texto: 'O que aconteceu com você?',
      proxNarrativa: 'explicacaoMorteNPC'
    },{
      texto: 'Idiota, por que não partiste? Uma taverna pode ser construída em qualquer lugar!',
      proxNarrativa: 'discursoPreMorteTaverneiro'
    },{
      texto: '[Examinar a Lança]',
      proxNarrativa: 'finalCap1Part1'
    }]
  },

  discursoPreMorteTaverneiro: {
    imagem: ' ',
    narrativa: '"Não posso negar o meu destino, filho. Sabe, há anos eu desafio a morte, mas dessa vez, eu não consegui enganá-la. Ninguém consegue, nem mesmo estes que atacaram minha taverna. Eles irão perecer, e eu estarei no inferno, junto a eles, quando acontecer.". É dito isto que o taverneiro dá seu último suspiro, e caminha para a morte.',
    opcoes: [{
      texto: '[Examinar a Lança]',
      proxNarrativa: 'finalCap1Part1'
    }]
  },

  finalCap1Part1: {
    imagem: 'imgs/Capitulos/organizacaoSimbolo.png',
    narrativa: 'Você não consegue remover a lança da parede, mas nela há um símbolo esculpido, extremamente detalhado, que você conhece: é o símbolo do Culto dos Sete Olhos de Deus, um culto extremamente mal visto por Hesteren que pratica atos envolvendo magia negra e necromancia. Enquanto todos estes pensamentos passam por sua cabeça e você começa a encaixar as peças, você ouve, do lado de fora, os sons do que parecem ser várias pessoas conversando. Os sons de lâminas também sugerem que podem estar armadas.',
    opcoes: [{
      texto: '[Se Esconder]',
      proxNarrativa: 'finalCap1Part2Alt'
    },{
      texto: '[Sair]',
      proxNarrativa: testeDeKarmaCap1
    }]
  },

  finalCap1Part2Alt: {
    imagem: ' ',
    narrativa: 'Você fica atrás do balcão, uma das poucas coisas que não fora completamente destruída. Pouco tempo depois, você ouve o som de vários passos, que se aproximam mais e mais. Uma multidão de pessoas entram na taverna com espadas, escudos e lanças, e se deparam com toda aquela cena. Não demora muito para que eles comecem a averiguar o lugar. Você tenta permanecer furtivo, mas um camponês armado com uma espada lhe encontra embaixo de uma mesa, e anuncia para todos os outros. Você é feito de refém e posto de joelhos.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'finalCap1FinalAt'
    }]
  },

  finalCap1FinalAt: {
    imagem: ' ',
    narrativa: '"Este bruxo estava tentando se esconder de nós! Ele é a praga que os deuses nos enviaram para nos atormentar!", grita o homem. Eles te amarram, e tampam sua boca. Você não consegue se pronunciar nem se manifestar. "Nós o capturamos! Levem-no para a masmorra, já! O lorde Iron Wood o levará ao encontro com a morte!". Nisso, alguém lhe bate com o pomo da espada, e você cai no chão, inconsciente,',
    opcoes:[{
      texto: '[Fim do Capítulo 1]',
      proxNarrativa: 'Cap2InicioPreso'
    }]
  },

  finalCap1JogadorPreso: {
    imagem: 'imgs/Capitulos/escolhaFugaDaTavernaCap1.jpg',
    narrativa: 'Você sai da taverna, esperando ficar seguro ao lado de outras pessoas? Pedir ajuda, talvez? O que quer que seja, não importa: assim que você sai, várias lâminas são apontadas diretamente para você, seguradas por elfos, humanos, orcs, etc. "Ele é o bruxo! Levem-no para o lorde Iron Wood!", grita um deles. No mesmo instante, alguem bate com o pomo da espada na sua cabeça, e você cai, inconsciente.',
    opcoes:[{
      texto: '[Fim do Capítulo 1]',
      proxNarrativa: 'Cap2InicioPreso'
    }]
  },

  finalCap1JogadorProtegido: {
    imagem: ' ',
    narrativa: 'Você sai da taverna, esperando ficar seguro ao lado de outras pessoas? Pedir ajuda, talvez? De qualquer forma, assim que você sai, as lâminas que poderiam estar apontadas para você se abaixam, e você se depara com vários elfos, orcs, humanos, etc. "Um sobrevivente!", grita um elfo; este se aproxima até você. "Temos um sobrevivente ao ataque dessa noite! Rápido, parece ferido! Vamos levá-lo até o lorde Iron Wood!", ele diz. No mesmo instante, um orc com roupas de camponês se aproxima de você faz um sinal para segui-lo. "Venha, viajante. Você precisa ver o lorde Iron Wood. Você foi a única pessoa que conseguiu sobreviver a um ataque dessa praga nos últimos 4 dias."',
    opcoes:[{
      texto: '[Fim do Capítulo 1]',
      proxNarrativa: 'Cap2InicioSobrevivente'
    }]
  },

  /*       CENÁRIOS E RAMIFICAÇÕES
               DO CAPÍTULO 2                  */

  Cap2InicioPreso: {
    alteracao: checkpoint,
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/DarkAmbientMusic.mp3",
    imagem: 'imgs/Capitulos/cenarioPrisaoCap2.jpg',
    narrativa: 'Tudo parece muito confuso para você. Por que lhe acusaram? Por que disseram "eles" se você só lutou com um único ser? O que ele queria naquela taverna? São pensamentos que passam pela sua mente quando você acorda numa cela. O lugar tem um cheiro horrível, é feito de pedra e com vários corpos e ossos espalhados no chão. Você se encontra apoiado na grade, que é sua única barreira para com a liberdade. Você ouve, ao fundo, passos, que parecem se aproximar mais e mais.',
    opcoes: [{
      texto: '[Olhar em Volta]',
      proxNarrativa: 'percepcaoCela'
    },{
      texto: '[Esperar]',
      proxNarrativa: 'inicioInterrogatorio'
    },{
      texto: '[Tentar Emboscar Quem Está Vindo]',
      proxNarrativa: 'tentativaEmboscada'
    }]
  },

  percepcaoCela: {
     imagem: 'imgs/Capitulos/cenarioPrisaoCap2.jpg',
     narrativa: 'Não há nada que você consiga ver se não alguns ossos e sangue seco nas paredes. Você até tenta arrancar uma barra que possa estar frouxa, mas sem sucesso.',
     opcoes: [{
       texto: '[Continuar]',
       proxNarrativa: 'inicioInterrogatorio'
     }]
  },

  inicioInterrogatorio: {
    imagem: 'imgs/Capitulos/cenarioPrisaoCap2.jpg',
    narrativa: 'Após alguns poucos minutos, você começa a ouvir passos, que vão se aproximando cada vez mais. Você se levanta, e quando se vira, se vê de frente com um homem, de cabelos e barba curtos e grisalhos, trajando uma armadura de ferro competa, com uma espada na bainha e um escudo preso nas costas."Gregor Iron Wood é meu nome.", ele diz." Dizem que você é a praga que está aterrorizando minha cidade. Pois bem, venha comigo." Ele abre a cela e lhe amarra com um nó bem forte e te guia pelo corredor.',
    opcoes: [{
        texto: '[Continuar]',
        proxNarrativa: 'dialogoIronWood'
      }]
  },

  tentativaEmboscada: {
     imagem: 'imgs/Capitulos/cenarioPrisaoCap2.jpg',
     narrativa: 'Você pega um osso quebrado, que em casos extremos como este, pode servir como lâmina. Você espera quem quer que esteja vindo se aproximar e, quando julga ser o momento, ouve uma voz de um homem: "Nem tente, filho, não passarás nem da porta desta sala com vida". Você pensa que pode ser alguém de mais idade e, quado ele se revela, de fato é: um homem com cabelos e barba curtos e grisalhos, usando uma armadura completa de ferro, com uma espada na bainha e um escudo preso nas cosatas. "Gregor Iron Wood é meu nome. Dizem que você é a praga que está aterrorizando minha cidade. Pois bem, venha comigo." Ele abre a cela e lhe amarra com um nó bem forte e te guia pelo corredor.',
     opcoes: [{
       texto: '[Continuar]',
       proxNarrativa: 'dialogoIronWood'
     }]
  },

  dialogoIronWood: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: 'Vocês dois seguem caminhando. O único som é o dos passos e das goteiras do teto. Vocês passam por alguns guardas, que batem continência quando veem o lorde Iron Wood. "Filho, tenho de ser sincero: você não me parece uma praga necromante que tenha coragem de matar pessoas.", ele diz.',
    opcoes: [{
      alteracao: aumentaKarma,
      texto: 'De fato não sou. Fui acusado injustamente!',
      proxNarrativa: 'dialogoIronWoodPart2'
    },{
      texto: '[Ficar em Silêncio]',
      proxNarrativa: 'dialogoIronWoodPart2'
    },{
      alteracao: diminuiCarisma,
      texto: 'Então qual o motivo de me manter preso? É uma estupidez. Não seja ridículo.',
      proxNarrativa: 'dialogoIronWoodPart2Alt'
    }]
  },

  dialogoIronWoodPart2Alt: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: '"Estupidez seria eu lhe libertar, não concorda? Você é o único sobrevivente em 3 dias de massacres em Argon, e, considerando que você não apresenta nenhum ferimento visível, eu teria motivos suficientes para mandá-lo à forca. Eu sugiro que colabore comigo e me conte a verdade."',
    opcoes: [{
      texto: '[Ficar em Silêncio]',
      proxNarrativa: 'dialogoIronWoodPart2'
    },{
      texto: 'Que seja. Quem quer que tenha atacado a taverna deixou uma lança com os símbolos do Culto dos Sete Olhos de Deus cravado em um corpo. É o máximo que sei',
      proxNarrativa: 'descobertaSimbolo'
    },{
      alteracao: diminuiCarisma,
      texto: 'Estará cometendo um erro, Iron Wood. Quando perceber que os massacres não irão parar, verás que nada mais é do que um rei tolo como qualquer outro.',
      proxNarrativa: 'dialogoIronWoodPart2'
    }]
  },

  dialogoIronWoodPart2: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: 'Veja bem. Um lord piedoso, é do que me chamam, e esta fama não veio do nada. Darei-lhe uma chance de dizer a verdade, e somente a verdade. Se feito, irá sair pela porta da frente completamente livre.',
    opcoes: [{
      texto: 'Muito bem. Quem quer que tenha nos atacado, deixou uma lança com o símbolo do Culto dos Sete Olhos de Deus cravada em um corpo. É tudo o que sei.',
      proxNarrativa: 'descobertaSimbolo'
    },{
      texto: 'O Culto dos Sete Olhos de Deus está voltando após sua inatividade.',
      proxNarrativa: 'descobertaSimbolo'
    },{
      texto: 'Os maiores necromantes de Hesteren estão voltando, e deixarão este lugar em pedaços.',
      proxNarrativa: 'descobertaSimbolo'
    }]
  },

  descobertaSimbolo: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: 'Quando você termina de dizer tais palavras, Iron Wood para. Você se vira, e a expressão dele é de puro espanto, talvez medo. "Impossível! O Culto foi dizimado há 5 séculos! Se eles conseguirem o que querem, terão capacidade de passar por cima de toda Hesteren!"',
    opcoes: [{
      texto: 'O que eles querem, afinal?',
      proxNarrativa: 'explicacaoIronWood'
    },{
      texto: 'Isso significa que acreditas em mim? Deixe-me ir, então.',
      proxNarrativa: 'jogadorLivrePrisao'
    },{
      texto: 'Não só podem como vão. Quem quer que tenha me atacado, possui técnicas de combate impressionantes e domínio sobre magia negra.',
      proxNarrativa: 'explicacaoIronWood'
    }]
  },

  explicacaoIronWood: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: '"Eles precisam do domínio completo sobre necromancia e a habilidade de ressucitar os mortos. Quando digo mortos, não são apenas pessoas, mas criaturas, incluindo dragões e Trolls, extintos há mais de 3 milênios. Devemos detê-los enquanto ainda estão concentrados em Argon. Alguns dizem que você entrou em combate com um membro do Culto, e aqui está, vivo. Se for verdade, eu e meu exército precisaremos de sua ajuda."',
    opcoes: [{
      texto: 'Significa que estou livre?',
      proxNarrativa: 'jogadorLivrePrisao'
    },{
      texto: 'Estarei disposto a fazer o que for preciso.',
      proxNarrativa: 'jogadorLivrePrisao'
    },{
      alteracao: aumentaCarisma,
      texto: 'Basta me dar a liberdade total, que seguirei suas ordens.',
      proxNarrativa: 'jogadorLivrePrisao'
    }]
  },

  jogadorLivrePrisao: {
    imagem: 'imgs/Capitulos/corredorMasmorraCap2.jpg',
    narrativa: '"Sim, sim, contente em ouvir isso. Me acompanhe, você será liberto imediatamente..Não temos nenhum tempo a perder.". Vocês seguem pelo resto do corredor, até chegarem à sala que liga a masmorra com o Hall. Lá, um guarda corta suas amarras e devolve suas roupas originais. Gregor Iron Wood faz um sinal para que lhe acompanhei.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'jogadorNaCidade'
    }]
  },

  jogadorNaCidade: {
    musica: 'https://sirpedr.github.io/ArquivosAuxiliaresSymphony/ArgonTownSong.mp3',
    imagem: 'imgs/Capitulos/cidadeAbertaCap2.jpg',
    narrativa: 'Você acompanha Iron Wood até a cidade. Há várias casas e edifícios ao redor, e algumas pouca pessoas que passam pelo lugar cumprimentam o lorde Iron Wood; outras lhe olham assustado e com desprezo. Iron Wood se volta para você. "Precisarei de tempo para reunir meus homens, mas precisamos saber ao máximo sobre este novo Culto. Os comerciantes que passam por aqui, bardos e taverneiros contam rumores sobre um homem que vive em Argon, que vê e ouve tudo. Comece por ele; rumores indicam que ele vive ao lado de uma loja voltada para Alquimistas, em uma construção velha. Veja o que ele sabe."',
    opcoes: [{
      texto: 'Será feito. Que os deuses o tenham, Iron Wood.',
      proxNarrativa: 'jogadorComHomemMisterioso',
    },{
      texto: 'Eu irei, mas nada garante meu retorno com as informações. Passar bem, Lord Iron Wood.',
      proxNarrativa: 'jogadorComHomemMisterioso'
    }]
  },

  Cap2InicioSobrevivente: {
    alteracao: checkpoint,
    musica: "https://sirpedr.github.io/ArquivosAuxiliaresSymphony/DarkAmbientMusic.mp3",
    imagem:'imgs/Capitulos/hallArgonCap2.jpg',
    narrativa: 'Você é levado pelo Orc até a entrada de um grande castelo, que se destacava bastante das demais construções próximas. Lá, após explicada a situação, os guardas, com armaduras pesadas de ferro e armados com lanças, de guiam pelo castelo. Não falam nada, e você também não. Vergonha, talvez? Ou seria o choque de ver alguém conhecido morrer bem na sua frente? Seus pensamentos variam, até que você chega no que parece ser a sala do trono. É imensa, com janelas enormes que deixam a luz do sol entrar. Várias colunas de mármore sustentam o lugar, protegido por vários e vários guardas. No fundo, um trono, gigante, com vários detalhes esculpidos. Ao se aproximar, você vê que se trata de uma batalha entre humanos e dragões. Sentado nele, um homem, de cabelo e barba curtos e grisalhos que, ao perceber sua presença, se levanta e vai em sua direção.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'conhecendoIronWood'
    }]
  },

  conhecendoIronWood: {
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: 'Quando perto, ele faz uma reverência, e você a reproduz. "Saudações. Sou Gregor Iron Wood, O Piedoso. Pelo que me foi informado, você nada mais é do que um sobrevivente do massacre a Taverna de Argon da noite passada. Estou certo ou errado?"',
    opcoes: [{
      texto: 'Está certo. É um prazer conhecê-lo.',
      proxNarrativa: 'conhecendoIronWoodPart2'
    },{
      texto: 'Os rumores se confirmam. É uma honra estar em sua presença.',
      proxNarrativa: 'conhecendoIronWoodPart2'
    },{
      alteracao: diminuiCarisma,
      texto: 'Se já sabes, então por que pergunta? Minha jornada nesta cidade ainda não terminou; seja breve, por favor.',
      proxNarrativa: 'conhecendoIronWoodPart2'
    }]
  },

  conhecendoIronWoodPart2: {
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Muito bem. Confesso que de imediato o considerei um suspeito, mas fontes confiáveis dizem que você entrou em combate com aquele que o atacou. Se assim foi, deixe-me ser o primeiro a reconhecer suas habilidades. Agora me diga: o que você viu? Símbolos, rostos, nomes? São informações de extrema importância!"',
    opcoes: [{
      alteracao: aumentaMoedasMaiorQt,
      texto: 'Quanto valem essas informações?',
      proxNarrativa: 'informacoesPagas'
    },{
      texto: 'Um símbolo, sim, foi o que vi. O símbolo do Culto dos Sete Olhos de Deus.',
      proxNarrativa: 'IronWoodDescobreSimbolo'
    },{
      texto: 'O Culto dos Sete Olhos de Deus está de volta. É tudo o que sei.',
      proxNarrativa: 'IronWoodDescobreSimbolo'
    }]
  },

  informacoesPagas: {
    imagem:'imgs/Capitulos/lordIronWood.png',
    narrativa: '"É justo. Que assim seja." [Ele te entrega um saco com 100 Moedas de Ouro, e você conta sobre o símbolo.]',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'IronWoodDescobreSimbolo'
    }]
  },

  IronWoodDescobreSimbolo: {
    imagem:'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Quando você termina de dizer tais palavras, Iron Wood para, e a expressão dele é de puro espanto, talvez medo. "Impossível! O Culto foi dizimado há 5 séculos! Se eles conseguirem o que querem, terão capacidade de passar por cima de toda Hesteren!"',
    opcoes: [{
      texto: 'Precisaremos agir rápido. Não temos tempo a perder!',
      proxNarrativa: 'despedidaCasteloIronWood'
    },{
      texto: 'Eu poderia ajudar...Por um preço.',
      proxNarrativa: 'despedidaCasteloIronWoodAlt'
    },{
      texto: 'Ele irá destruir Argon. Esta cidade é completamente despreparada para o combate.',
      proxNarrativa: 'despedidaCasteloIronWood'
    }]
  },

  despedidaCasteloIronWood: {
    imagem:'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Sim, sim, você tem razão. Mesmo não sendo preparada para combate, Argon tem suas cartas na manga. Mas vamos, o nosso tempo é curtíssimo! Me acompanhe."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'jogadorNaCidade'
    }]
  },

  despedidaCasteloIronWoodAlt: {
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Se você, viajante, tiver um papel importante nesta história, Argon lhe dará uma quantidade de dinheiro capaz de lhe tornar uma das pessoas mais influentes de Hesteren se fizer os investimentos certos. Mas devemos agir rápido e agora; não temos nenhum tempo a perder. Me acompanhe."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'jogadorNaCidade'
    }]
  },

  jogadorComHomemMisterioso: {
    imagem: 'imgs/Capitulos/becoArgonCap2.jpg',
    narrativa: 'Você começa a caminhar pela cidade, seguindo o caminho que Lord IronWood lhe informou. A cidade não está muito movimentada; os cidadãos preferem a segurança de suas casas em tempos difíceis. Os poucos que estão na rua te olham e se afastam, seja por medo ou respeito. Você chega perto de uma das únicas lojas para Alquimistas em Argon, e, ao lado dela, de fato há uma construção velha, caindo aos pedaços, com uma porta de madeira. Você tenta abrir, mas está trancada.',
    opcoes: [{
      texto: '[Bater na Porta]',
      proxNarrativa: 'dialogoMagnus'
    },{
      texto: '[Chamar Alguém do Lado De Dentro]',
      proxNarrativa: 'dialogoMagnus'
    },]
  },

  dialogoMagnus: {
    musica: 'https://sirpedr.github.io/ArquivosAuxiliaresSymphony/AmbientSong.mp3',
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: 'Pareceu instantâneo. Você mal se mexeu, e se viu dentro da construção. Por dentro, o lugar é bem diferente: as madeiras estão novas e limpas, não há nada quebrado. O lugar ainda é pequeno, mas espaçoso o suficiente para se viver sozinho. Uma mesa de madeira, com vários livros em cima, uma cadeira atrás dela e um homem sentado nesta são sua visão. Ele é alto, careca, com um bigode e um projeto de costeleta. Ele te ignora por um tempo, e fica brincando com uma faca feita puramente de energia branca.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'dialogoMagnusPart2'
    }]
  },

  dialogoMagnusPart2: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"Os boatos correm rápido, você sabe. Num dia você é só mais um viajante, e no outro é um sobrevivente de um massacre! Deve ser esquisito. Meu nome é Magnus, é um prazer. O que posso fazer por ti?"',
    opcoes: [{
      texto: 'Como você fez isso?',
      proxNarrativa: 'dialogoMagnusPart3Alt'
    },{
      texto: 'Preciso de informações sobre o Culto dos Sete Olhos de Deus. Eles voltaram e estão ameaçando toda a cidade Argon.',
      proxNarrativa: 'dialogoMagnusPart3'
    },{
      alteracao: aumentaInteligencia,
      texto: 'Um mago, não é? Interessante. Belos truques você tem. O que pode me dizer sobre o Culto dos Sete Olhos de Deus?',
      proxNarrativa: 'dialogoMagnusPart3'
    }]
  },

  dialogoMagnusPart3Alt: {
    alteracao: diminuiInteligencia,
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: 'São magias, meu caro. Magias. Nada mais do que isto. Agora, estamos perdendo tempo aqui. Qual seu propósito?',
    opcoes: [{
      texto: 'Destruir o Culto dos Sete Olhos. Eles voltaram.',
      proxNarrativa: 'dialogoMagnusPart3'
    },{
      texto: 'Lord IronWood me mandou aqui para reunir informações sobre o Culto dos Sete Olhos.',
      proxNarrativa: 'dialogoMagnusPart3'
    },]
  },

  dialogoMagnusPart3: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"O Culto dos Sete Olhos? Não ouço esse nome há alguns bons anos, se quer saber. Eles são tão antigos quanto a própria Hesteren. De fato, se eles aprenderem a arte da necromancia, esta cidade deixará de existir em pouquíssimo tempo. Mas veja bem, eu não trabalho de graça, e minhas informações são muito valiosas."' ,
    opcoes: [{
      texto: 'Você tem as informações, eu tenho a moeda. [60 Moedas]',
      proxNarrativa: 'MagnusInfoPagas'
    },{
      texto: 'Vai realmente colocar o dinheiro na frente da integridade da cidade onde vive? Se eles avançarem, seu túmulo estará preenchido em pouco tempo.',
      proxNarrativa: testeDeCarismaMagnus
    },{
      texto: 'Não vou pagar tanto por informações que posso tirar à força. [Intimidação]',
      proxNarrativa: testeDeForcaMagnus
    }]
  },

  MagnusInfoPagas: {
    alteracao: pagamentoMagnus,
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: 'Você joga um saco de moedas para ele, que o guarda numa gaveta. "Muito bom fazer negócios com você.", ele diz. "O Culto dos Sete Olhos, como eu disse, é tão antiga quanto a própria Hesteren, e tem como objetivo dominar a arte da necromancia para ressucitar não só pessoas, elfos, orcs etc, mas trolls e dragões, criaturas extintas há vários milênios. Com esse poder, eles não poderão ser barrados nem pelo próprio Merlin. Se estão em Argon, é porque ainda estão fracos, e podem ser detidos até mesmo por alguém como você.", ele ri. "Meu palpite é que na taverna, eles foram atrás de algum livro, documento ou algo do gênero sobre magia negra ou derivado, para aumentar o conhecimento. Se for o caso, estamos falando de alguém inexperiente neste campo da magia, o que é bom."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'InfoPagasPart2'
    }]
  },

  InfoPagasPart2: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"Mas eu sei que isso não vai deixar você satisfeito. Pois bem, o pagamento foi bom, devo dizer, então direi mais. Há algumas semanas, comerciantes alertaram às autoridades locais da Cidade Porto atividades suspeitas de alguns homens, alegando práticas de magia negra, e tentativas de necromancia; mas nenhuma alma foi ferida lá. Eles até chegaram a prender um suspeito, Baltazhar, que fugiu dias depois, e seu paradeiro é desconhecido. Minha melhor opção é que Baltazhar é um seguidor do Culto dos Sete Olhos e está tentando chegar à ascensão novamente, mas com dificuldades. Sorte a nossa. Até agora, os ataques em Argon aconteceram em lugares movimentados, com várias pessoas. Isso deve ajudar."',
    opcoes: [{
      texto: '[Finalizar]',
      proxNarrativa: 'InfoPagasPartFinal'
    }]
  },

  InfoPagasPartFinal: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: 'Ele termina de falar, e começa a olhar para você. Provavelmente esperando que vá embora, ou faça uma pergunta.',
    opcoes: [{
      texto: '[Ir Embora]',
      proxNarrativa: 'posDialogoMagnus'
    },{
      texto: 'O que você sugere fazer?',
      proxNarrativa: 'sugestaoMagnus'
    },{
      texto: 'Apenas isto? Não é suficiente! Preciso de mais!',
      proxNarrativa: 'posDialogoMagnus'
    }]
  },

  infoMagnusGratis: {
    alteracao: aumentaCarisma,
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"Muito bem, então. Por onde eu deveria começar...Ah, sim. Bom, O Culto dos Sete Olhos, como eu disse, é tão antiga quanto a própria Hesteren, e tem como objetivo dominar a arte da necromancia para ressucitar não só pessoas, elfos, orcs etc, mas trolls e dragões, criaturas extintas há vários milênios. Com esse poder, eles não poderão ser barrados nem pelo próprio Merlin. Se estão em Argon, é porque ainda estão fracos, e podem ser detidos até mesmo por alguém como você.", ele ri. "Meu palpite é que na taverna, eles foram atrás de algum livro, documento ou algo do gênero sobre magia negra ou derivado, para aumentar o conhecimento. Se for o caso, estamos falando de alguém inexperiente neste campo da magia, o que é bom."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'infoMagnusGratisPart2'
    }]
  },

  infoMagnusGratisPart2: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: 'Você me parece esperto, mas mesmo assim, só isso não lhe deve ser suficiente. Que seja. Há algumas semanas, comerciantes alertaram às autoridades locais da Cidade Porto atividades suspeitas de alguns homens, alegando práticas de magia negra, e tentativas de necromancia; mas nenhuma alma foi ferida lá. Eles até chegaram a prender um suspeito, Baltazhar, que fugiu dias depois, e seu paradeiro é desconhecido. Minha melhor opção é que Baltazhar é um seguidor do Culto dos Sete Olhos e está tentando chegar à ascensão novamente, mas com dificuldades. Sorte a nossa. Até agora, os ataques em Argon aconteceram em lugares movimentados, com várias pessoas. Isso deve ajudar."',
    opcoes: [{
        texto: '[Finalizar]',
        proxNarrativa: 'InfoPagasPartFinal'
    }]
  },

  infoMagnusNaoGratis: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"Veja bem, garoto. Eu sou um mago. consigo me mover daqui até a Cidade Porto em poucos segundos. O Culto dos Sete Olhos não irão me achar. Considere o que estou fazendo aqui como um favor...Pago."',
    opcoes: [{
      texto: 'Vou ter esse dinheiro de volta. [60 Moedas]',
      proxNarrativa: 'MagnusInfoPagas'
    }]
  },


  intimidacaoMagnusSucesso: {
    alteracao: diminuiKarma,
    imagem: 'imgs/Capitulos/becoArgonCap2.jpg',
    narrativa: '"Ei, se acalme! Não vamos criar conflitos aqui; Argon já tem suficientes. Eu direi o que você quer saber.  O Culto dos Sete Olhos, como eu disse, é tão antiga quanto a própria Hesteren, e tem como objetivo dominar a arte da necromancia para ressucitar não só pessoas, elfos, orcs etc, mas trolls e dragões, criaturas extintas há vários milênios. Com esse poder, eles não poderão ser barrados nem pelo próprio Merlin. Se estão em Argon, é porque ainda estão fracos, e podem ser detidos até mesmo por alguém como você.", ele ri. "Meu palpite é que na taverna, eles foram atrás de algum livro, documento ou algo do gênero sobre magia negra ou derivado, para aumentar o conhecimento. Se for o caso, estamos falando de alguém inexperiente neste campo da magia, o que é bom."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'intimidacaoMagnusSucessoPart2'
    }]
  },

  intimidacaoMagnusSucessoPart2: {
    imagem: 'imgs/Capitulos/becoArgonCap2.jpg',
    narrativa: '"Confesso que você me assusta, então...Eu vou falar mais um pouco. Há algumas semanas, comerciantes alertaram às autoridades locais da Cidade Porto atividades suspeitas de alguns homens, alegando práticas de magia negra, e tentativas de necromancia; mas nenhuma alma foi ferida lá. Eles até chegaram a prender um suspeito, Baltazhar, que fugiu dias depois, e seu paradeiro é desconhecido. Minha melhor opção é que Baltazhar é um seguidor do Culto dos Sete Olhos e está tentando chegar à ascensão novamente, mas com dificuldades. Sorte a nossa. Até agora, os ataques em Argon aconteceram em lugares movimentados, com várias pessoas."',
    opcoes: [{
      texto: '[Finalizar]',
      proxNarrativa: 'InfoPagasPartFinal'
    }]
  },

  intimidacaoMagnusFracasso: {
    imagem: 'imgs/Capitulos/becoArgonCap2.jpg',
    narrtiva: '"Vê esta adaga? Ela pode parar no seu peito no momento em que eu quiser, e nem preciso estar perto de você. Todos que um dia me enfrentaram se encontram a sete palmos do solo, e eu tenho certeza que você não quer se tornar um deles. Agora, o pagamento, por favor."',
    opcoes: [{
      texto: 'Isso não ficará assim, mago. [60 Moedas]',
      proxNarrativa: 'MagnusInfoPagas'
    }]
  },

  sugestaoMagnus: {
    imagem: 'imgs/Capitulos/magnusCap2.jpg',
    narrativa: '"Não é óbvio? Reúna um grupo de pessoas num lugar qualquer e espere a mágica acontecer...Esses viajantes estão cada vez mais burros e despreparados.", diz ele."Agora, se me permite, eu tenho coisas a fazer. Até mais, viajante. Espere por mim em seu funeral."',
    opcoes: [{
      texto: '[Ser Expulso]',
      proxNarrativa: 'posDialogoMagnus'
    }]
  },

  posDialogoMagnus: {
    imagem: 'imgs/Capitulos/becoArgonCap2.jpg',
    narrativa: 'Num piscar de olhos, as magias arcanas de Magnus o teletransportam para fora do lugar. Você está exatamente no lugar que estava antes de entrar, mas a construção não está mais ali. Ilusionismo, talvez? É possível, mas não é importante agora. Você sabe o que fazer, e precisa voltar e comunicar ao Lorde IronWood.',
    opcoes: [{
      texto: '[Voltar até o Castelo IronWood]',
      proxNarrativa: 'organizacaoEventoIronWood'
    }]
  },

  organizacaoEventoIronWood: {
    alteracao: checkpoint,
    musica: '',
    imagem: 'imgs/Capitulos/hallArgonCap2.jpg',
    narrativa: 'Você volta até o castelo do Lorde IronWood. Reunir várias pessoas em um lugar só? Como? Uma festa, talvez? Ou quem sabe um plano de evacuar a cidade? Estes são seus pensamentos enquanto você caminha em encontro a Gregor IronWood, que está com a mesma armadura de ferro, ao lado de vários homens trajados da mesma forma, armados com espadas longas e escudos.',
    opcoes: [{
      texto: 'Lorde IronWood! Trago notícias.',
      proxNarrativa: 'organizacaoEventoIronWoodPart2'
    },{
      texto: 'Prepare a bebida, IronWood! Daremos uma grande festa!',
      proxNarrativa: 'organizacaoFesta'
    },{
      texto: 'Gregor, precisamos conversar.',
      proxNarrativa: 'organizacaoEventoIronWoodPart2'
    }]
  },

  organizacaoEventoIronWoodPart2: {
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: 'Ele se vira para você, e dispensa os homens que estavam com ele. "Espero que tenha feito um progresso melhor que o meu, filho. O que conseguiste reunir?"',
    opcoes: [{
      texto: 'Vamos precisar fazer uma festa se quisermos capturar o Culto',
      proxNarrativa: 'organizacaoFesta'
    },{
      texto: 'Precisamos reunir as pessoas para evacuar a cidade se quisermos capturar o Culto.',
      proxNarrativa: 'organizacaoEvacuacao'
    },{
      texto: 'Faça um comunicado de extrema importância que reúna toda a população.',
      proxNarrativa: 'organizaoComunicado'
    }]
  },

  organizacaoFesta: {
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Uma festa? Em tempos como esses? Estás louco? O povo não quer comemorar, o povo quer segurança!"',
    opcoes: [{
      texto: 'Então faça a festa! Precisamos de várias pessoas num mesmo lugar.',
      proxNarrativa: 'organizacaoFestaPart2'
    },{
      texto: 'É verdade. Nesse caso, reúna todos para que a cidade possa ser evacuada.',
      proxNarrativa: 'organizacaoEvacuacao'
    },{
      alteracao: diminuiCarisma,
      texto: 'Ou você faz esta festa, ou todos nós acabaremos mortos por tua causa.',
      proxNarrativa: 'organizacaoFestaPart2'
    }]
  },

  organizacaoFestaPart2: {
    alteracao: defineFesta,
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Pois bem, viajante. Lhe darei um voto de confiança. De fato, se a população estiver reunida, é provável que nosso alvo também esteja lá. Certo, não vamos demorar muito: acontecerá hoje a noite. Mandarei meus homens fazerem o comunicado para o povo. Quando o sol se por, me encontre aqui; vamos organizar uma emboscada."',
    opcoes: [{
      texto: 'Estarei aqui. Que os deuses o acompanhem. [Pular Para a Festa]',
      proxNarrativa: 'festaIronWood'
    },{
      texto: 'Certo. Isso me dará tempo para me preparar. [Continuar]',
      proxNarrativa: 'preparacaoJogador'
    }]
  },

  organizacaoEvacuacao: {
    alteracao: defineEvacuacao,
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"Evacuar a cidade? Pode fazer sentido. Se parecer que estamos tentando salvar a população, o Culto virá para tentar impedir e nós o emboscamos! É uma boa ideia. Me encontre no portão da cidade quando o sol se por; mandarei meus homens fazerem o comunicado."',
    opcoes: [{
      texto: 'Estarei lá. Que os deuses o acompanhem. [Pular Para a Evacuação]',
      proxNarrativa: 'evacuacaoIronWood'
    },{
      texto: 'Certo. Isso me dará tempo para me preparar. [Continuar]',
      proxNarrativa: 'preparacaoJogador'
    }]
  },

  organizaoComunicado: {
    alteracao: defineComunicado,
    imagem: 'imgs/Capitulos/lordIronWood.png',
    narrativa: '"É uma ideia interessante. É muito arriscado deixar a mim e a população expostos desse jeito, mas se traçarmos o plano certo, conseguiremos deter o Culto. Muito bem, me encontre na região central de Argon ao por do sol; mandarei meus homens anunciarem para a população."',
    opcoes: [{
      texto: 'Estarei lá. Que os deuses o acompanhem. [Pular Para o Comunicado]',
      proxNarrativa: 'comunicadoIronWood'
    },{
      texto: 'Certo. Isso me dará tempo para me preparar. [Continuar]',
      proxNarrativa: 'preparacaoJogador'
    }]
  },

  preparacaoJogador: {
    musica: 'https://sirpedr.github.io/ArquivosAuxiliaresSymphony/ArgonTownSong.mp3',
    alteracao: aumentaAtributosCombate,
    imagem: ' ',
    narrativa: 'Fora do castelo, você se vê na mesma cena de antes: a cidade pouco movimentada, com alguns comércios abertos, outros fortemente fechados. Ainda é cedo, então você lê livros de sobre necromancia, e até chega a treinar nos espaços reservados para os guerreiros de IronWood.',
    opcoes: [{
      texto: '[Avançar Para Hora do Evento]',
      proxNarrativa: qualEvento
    }]
  },

  eventoFesta: {
    imagem: 'eventoFestaCap2.jpg',
    narrativa: 'Chega a hora maracada, e você e IronWood se encontram no castelo. Por incrível que pareça, grande parte da população está festejando; talvez seja bom deixar os problemas de lado um pouco, ou simplesmente afogá-los em hidromel. De qualquer forma, as pessoas dançam, cantam e bebem, despreocupadas. Enquanto isso, você, Gregor IronWood e seus homens fazem a vigilância do lugar, tanto em terra quanto nos telhados. Poderia não ser um problema para o Culto eliminar esses homens, mas ao menos você saberia que ele está ativo.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'eventoFestaPart2'
    }]
  },

  eventoFestaPart2: {
    imagem: 'eventoFestaCap2.jpg',
    narrativa: 'Numa de suas patrulhas, você consegue ver Magnus bebendo com alguns bárbaros e mulheres em volta. Suspeito? Talvez, mas você continua sua patrulha. No teto, você percebe o movimento normal.',
    opcoes: [{
      texto: '[Prosseguir Patrulha]',
      proxNarrativa: 'eventosEstranhosTelhadoPart1'
    },{
      texto: '[Olhar nos Telhados]',
      proxNarrativa: 'eventosEstranhosTelhadoPart2'
    },{
      texto: '[Conversar com Lorde IronWood]',
      proxNarrativa: 'IronWoodCloneDialogo1'
    }]
  },

  IronWoodCloneDialogo1: {
    imagem: 'imgs/Capitulos/lordIronWood.jpg',
    narrativa: 'Você se aproxima de IronWood, que está estressado, gritando com seus homens. "Precisamos achá-lo já!"',
    opcoes: [{
      texto: 'Lord IronWood, está tudo bem?',
      proxNarrativa: 'IronWoodCloneDialogo2'
    },{
      texto: 'Tudo em paz por enquanto, IronWood.',
      proxNarrativa: 'IronWoodCloneDialogo2'
    }]
  },

  IronWoodCloneDialogo2: {
    imagem: 'imgs/Capitulos/lordIronWood.jpg',
    narrativa: '"Certo, certo. Continue.", ele diz, sem ao menos te olhar. "Vá averiguar os telhados."',
    opcoes: [{
      texto: 'Se acalme, Gregor. Nós vamos pegá-lo.',
      proxNarrativa: 'eventosEstranhosTelhadoPart1'
    },{
      texto: '[Patrulha nos Telhados]',
      proxNarrativa: 'eventosEstranhosTelhadoPart2'
    }]
  },

  eventoEvacuacao: {
    musica: '',
    imagem: 'imgs/Capitulos/eventoEvacuacaoComunicadoCap2.jpg',
    narrativa: 'Grande parte da população de Hesteren se reúne, e é orientada pelos guardas de IronWood. Os portões, entretanto, estão fechados, com a desculpa de que precisam de toda a população para começar a evacuação. Você, IronWood e seus homens fazem a guarda do lugar, patrulhando. Não há nada anormal ou incomum no momento.',
    opcoes: [{
      texto: '[Prosseguir Patrulha]',
      proxNarrativa: 'eventosEstranhosTelhadoPart1'
    },{
      texto: '[Olhar nos Telhados]',
      proxNarrativa: 'eventosEstranhosTelhadoPart2'
    },{
      texto: '[Conversar com Lorde IronWood]',
      proxNarrativa: 'IronWoodCloneDialogo1'
    }]
  },

  eventoComunicado: {
    musica: '',
    imagem: 'imgs/Capitulos/eventoEvacuacaoComunicadoCap2.jpg',
    narrativa: 'A população toda se reúne perto dos portões de Argon, extremamente preocupada. Iria Lord Gregor IronWood anunciar que a batalha foi perdida? Ou seria somente uma tentativa em vão de tranquilizar a população? De qualquer forma, você segue patrulhando, atento a qualquer movimento suspeito. Por enquanto, a cidade segue calma.',
    opcoes: [{
      texto: '[Prosseguir Patrulha]',
      proxNarrativa: 'eventosEstranhosTelhadoPart1'
    },{
      texto: '[Olhar nos Telhados]',
      proxNarrativa: 'eventosEstranhosTelhadoPart2'
    },{
      texto: '[Conversar com Lorde IronWood]',
      proxNarrativa: 'IronWoodCloneDialogo1'
    }]
  },

  eventosEstranhosTelhadoPart1: {
    imagem: ' ',
    narrativa: 'Você volta a patrulhar e, num certo momento, você percebe que, nos telhados, a quantidade de arqueiros diminuiu. Certamente não pararam para o intervalo, e é algo que deve ser investigdo.',
    opcoes: [{
      texto: '[Verificar os Telhados]',
      proxNarrativa: 'eventosEstranhosTelhadoPart2'
    }]
  },

  eventosEstranhosTelhadoPart2: {
    imagem: 'imgs/Capitulos/cenarioTelhadosCap2.jpg',
    narrativa: 'Nos telhados, você anda um pouco e se afasta da multidão que estava em terra. Você consegue ver alguns arqueiros em sua formação original, patrulhando normalmente; porém, mais a frente, há uma figura em pé, com trajes diferentes dos da guarda de IronWood, que está lhe encarando. Não está muito longe, mas o suficiente para te impedir de ver o rosto completamente. Ela percebe sua presença de fato e, numa velocidade que lhe impede de reagir, dá um salto para perto de você, e se senta nas telhas.',
    opcoes: [{
      texto: 'Quem é você?',
      proxNarrativa: 'dialogoBaltazhar'
    },{
      texto: '[Gritar a Guarda]',
      proxNarrativa: 'dialogoBaltazhar'
    },{
      texto: 'Se afaste, criatura.',
      proxNarrativa: 'dialogoBaltazhar'
    }]
  },

  dialogoBaltazhar: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: '"Não é incrível como as pessoas são vulneráveis? Todas têm seu ponto fraco, aquele detalhe que ninguém percebe, que parecia ser o ponto mais resistente da armadura. O mundo seria um lugar muito mais divertido se as pessoas soubessem disso."',
    opcoes: [{
      texto: 'Você é Baltazhar?',
      proxNarrativa: 'dialogoBaltazharPart2'
    },{
      texto: 'Renda-se, imediatamente! O lugar inteiro está cercado.',
      proxNarrativa: 'dialogoBaltazharPart3'
    },{
      texto: '[Atacar Baltazhar]',
      proxNarrativa: 'combateBaltazhar'
    }]
  },

  dialogoBaltazharPart2: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: '"Baltazhar, Agnium, tenho vários nomes, se quer saber. Sabe, as pessoas tendem a esquecer o passado ou superá-lo depois de um tempo, mas eu não. O passado carrega uma história sobre quem somos, e é uma bela história. Sinceramente, fico triste em deixá-la ir embora, e é por isso que eu a trago de volta."',
    opcoes: [{
      texto: 'Nada mais é do que um lunático.',
      proxNarrativa: 'dialogoBaltazharPart3'
    },{
      texto: '[Atacar Baltazhar]',
      proxNarrativa: 'combateBaltazhar'
    }]
  },

  dialogoBaltazharPart3: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: '"Me chame de louco, lunático, do que quiser, mas os verdadeiros loucos são você e toda sua estúpida guarda lá embaixo, que não vão conseguir impedir nem a mim muito menos o Culto. Você nos descobriu, parabéns! Agora você nada mais sabe do que o nome daquele que te levará ao túmulo. Venha, viajante, e prove seu valor."',
    opcoes: [{
      texto: '[Atacar Baltazhar]',
      proxNarrativa: 'combateBaltazhar'
    }]
  },

  combateBaltazhar: {
    musica: 'https://sirpedr.github.io/ArquivosAuxiliaresSymphony/BattleSong1.mp3',
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'No que você avança, Baltazhar desaparece. Seu ataque atinge o ar, e você é atingido nas costas por um chute, fazendo você cair. Você se levanta, se vira e Baltazhar está li. "Será que é rápido o suficiente para me alcançar?", ele diz, rindo.',
    opcoes: [{
      texto: '[Dar um Soco em Baltazhar]',
      proxNarrativa: 'socoBaltazhar'
    },{
      texto: '[Dar um Chute em Baltazhar]',
      proxNarrativa: 'chuteBaltazhar'
    },{
      texto: '[Arremessar um Lâmina]',
      proxNarrativa: testeDestreza
    }]
  },

  socoBaltazhar: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'Baltazhar avança contra você, mas subestimara seu oponente. Você dá um soco bem em seu rosto, e ele cambaleia para o lado. Ele se levanta, e limpa o sangue da boca. "Parece que você não é tão ruim assim, não é? Vamos ver.", ele diz, e com a mão direita, conjura uma espécie de barreira de magia negra, que envolve todo seu antebraço. Ele avança contra você, pronto para leh desferir um soco.',
    opcoes: [{
      texto: '[Desviar do Soco]',
      proxNarrativa: 'socoDesviado'
    },{
      texto: '[Bloquear o Soco]',
      proxNarrativa: 'socoEfeitoMagia'
    }]
  },

  socoDesviado: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'Num movimento rápido, você sai do caminho de Baltazhar, que erra o soco. Você está bem atrás dele.',
    opcoes: [{
      texto: '[Acertar Baltazhar na Cabeça]',
      proxNarrativa: 'propostaBaltazhar'
    },{
      texto: '[Acertar A Perna de Baltazhar]',
      proxNarrativa: 'propostaBaltazhar'
    },{
      texto: '[Imobilizar Baltazhar]',
      proxNarrativa: 'propostaBaltazhar'
    }]
  },

  socoEfeitoMagia: {
    alteracao: diminuiForca,
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'Você consegue segurar o soco, e fica de frente a frente com Baltazhar, que te encara, rindo. Pouco tempo depois, a energia negra que estava somente na mão dele começa a percorrer sua mão, também, até chegar ao seu antebraço. Quando acontece, você perde completamente a força no braço afetado, e sente um dor imensa, que se propaga pelo seu corpo. Você cai de joelhos, e Baltazhar, rindo, te olha de cima.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'propostaBaltazharAlt'
    }]
  },

  arremessoMestre: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'Baltazhar havia subestimado seu oponente. Você arremessa de forma certeira um adaga no peito de Baltazhar, que cambaleia e fica de joelhos. Ele a retira, e a dor é visível em seu rosto. Ele te olha, e sua face agora está repleta de veias, mas veias negras: as artes da necromancia são capazes de corromper qualquer um, até que este vire apenas mais um louco. Ele avança em sua direção, lhe dando um soco bem no meio do rosto.',
    opcoes: [{
      texto: '[Desviar do Soco]',
      proxNarrativa: 'socoDesviado'
    },{
      texto: '[Bloquear o Soco]',
      proxNarrativa: 'socoEfeitoMagia'
    }]
  },

  arremessoFalho: {
    imagem: 'imgs/Capitulos/Baltazhar.jpg',
    narrativa: 'Você puxa uma pequena Adaga, mas Baltazhar é mais rápido: ele avnaça contra você antes que você pudesse fazer o arremesso, e lhe dá um soco que faz você cambalear e cair. Antes que você se levante, ele te dá um chute, fazendo você quase cair do telhado. Você está na borda, e Baltazhar te olha, em pé, rindo. "Vê? Você não é capaz de me parar."',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'propostaBaltazharAlt'
    }]
  },

  propostaBaltazhar: {
    imagem: ' ',
    narrativa: 'Você se prepara para atacar mas, quando está prestes a fazer o golpe, você grita de dor. Você olha para seu joelho, e vê uma flecha atravessando-o. Você cai, e mal consegue se sustentar. Do telhado, surge alguma criatura, mas não um humano, elfo ou orc: um morto-vivo, com os olhos brilhando verde, sem nenhuma armadura. Baltazhar se vira para você, e se aproxima. "Além do mais, o passado te ajuda nos momentos difíceis.", Ele ri.',
    opcoes: [{
      texto: '[Continuar]',
      proxNarrativa: 'propostaBaltazharAlt'
    }]
  },

  propostaBaltazharAlt: {
    imagem: ' ',
    narrativa: 'Você olha para Baltazhar. É difícil para ele identificar sua emoção no momento: raiva? Tristeza? Ódio? Talvez até..Admiração? Isso o leva a pensar por alguns segundos. É então que ele se afasta alguns passos. "Eu acabei de lhe provar que o passado é melhor que o futuro, veja bem. Eu não posso usar o futuro ao meu favor, porque ele é imprevisível, ainda não aconteceu; mas o passado, não: sei exatamente o que aconteceu, e consigo manipulá-lo graças às artes negras, e fazer dele um poderoso aliado. Entretanto, não posso fazer tudo com ele: ele se vai rápido; não dura muito no presente e é um processo trabalhoso trazê-lo de volta a vida. O Culto saiu de Argon há 2 dias, julgando ser possível apenas um homem tomar a cidade. Mas eu acho que não."',
    opcoes:[{
      texto: '[Continuar]',
      proxNarrativa: 'finalCap2'
    }]
  },

  finalCap2: {
    imagem: '',
    narrativa: '"Você se mostrou notável dentre os bárbaros estúpidos que vi aqui e os guardas de IronWood incrivelmente patéticos. Junte-se a mim, e terás um lugar ao meu lado governando a cidade de Argon.", ele estenda a mão, esperando que você a aperte. Esta está completamente nua, sem energia negra, luvas, nada.',
    opcoes: [{
      texto: '[Se Aliar a Baltazhar]',
      proxNarrativa: 'telhadoCap3Aliado'
    },{
      texto: '[Golpear Baltazhar]',
      proxNarrativa: 'telhadoCap3Inimigo'
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

  //Atualiza o HUD do jogador, com os atributos atuais
  atualizaHUD(jogador);
  //Aplica o 'src' da nova imagem à imagem que aparece ao jogador e a coloca no Container
  $(imagemCenario).attr('src', cenarios[proximoCenario].imagem);

  $(musicaDeFundo).attr('src', cenarios[proximoCenario].musica);
  $(musicaDeFundo).attr('volume', 0.65);

  if(tocarMusica === true){
    musicaDeFundo.play();
  }else{
    musicaDeFundo.pause();
  }


  containerCenarioGeral.append(imagemCenario);
  //Coloca dentro do 'p' a narração que descreve o cenário atual e o coloca no Container, após a img
  narracaoCenarioAtual.innerHTML = cenarios[proximoCenario].narrativa;
  containerCenarioGeral.append(narracaoCenarioAtual);

  //Cria as opções de diálogo de acordo com o número de elementos disponível no vetor 'opcoes[]'
  for(let i = 0; i < cenarios[proximoCenario].opcoes.length; i++){
    criaOpcoesDialogo(cenarios[proximoCenario].opcoes[i].texto);
  }

  containerCenarioGeral.append(containerBotoes);
  //Coloca o container no Body; torna-o visível ao jogador
  BodyEl.append(containerCenarioGeral);

  //Seleciona todos os elementos com a classe 'botoesOpcoesDialogo', ou seja, todos os botões que representam
  //As escolhas possíveis.

  let botoesOpcoesDialogo = $('.botoesOpcoesDialogo'),
      alteracaoAtributosCenario = cenarios[proximoCenario].alteracao;

  if(alteracaoAtributosCenario === checkpoint){
    console.log(proximoCenario);
    alteracaoAtributosCenario = alteracaoAtributosCenario(jogador, proximoCenario);
  }else if(alteracaoAtributosCenario != undefined){
    alteracaoAtributosCenario = alteracaoAtributosCenario(jogador);
  }

  //Cria uma estrutura de repetição que percorre todos os elementos com essa classe
  for(let i = 0; i < botoesOpcoesDialogo.length ; i++){

    //Aplica o data 'proxNarrativa' no botão, e atribui a seu valor o conteúdo do elemento 'proxNarrativa' da opção
		$(botoesOpcoesDialogo[i]).data("proxNarrativa", cenarios[proximoCenario].opcoes[i].proxNarrativa);



    //Quando algum dos 3 botões é clicado, ele ativa o evento que leva o jogador ao próximo cenário
		botoesOpcoesDialogo[i].addEventListener("click", function (e){

        //Isola o botão clicado
  			let opcaoClicada = e.currentTarget;

        let alteracaoAtributosDialogo = cenarios[proximoCenario].opcoes[i].alteracao;

  			let proxNarra = $(opcaoClicada).data("proxNarrativa");

        //Algumas escolhas resultam na alteração de algum atributo do personagem: força, carisma, etc.
        //essas escolhas tem a propriedade 'alteracao', que direciona até a função que faz a mudança necessária. Se esse campo existir, ele executa a função e a alteração é feita.

        if(alteracaoAtributosDialogo != undefined){
          alteracaoAtributosDialogo = alteracaoAtributosDialogo(jogador);
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
