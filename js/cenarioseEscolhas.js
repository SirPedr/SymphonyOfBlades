/*   FUNÇÕES PRIMORDIAIS E
       MAIS IMPORTANTES      */

function campanha(){

  //Struct que define os dados do jogador
  let jogador = {
    nome: opcoesDeNome.value,
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

  //Deixa o HUD visível
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

function aumentaMoedas(jogador){

  jogador.moedas += 10;
  console.log(jogador.moedas);
  return;

}

function aumentaForca(jogador){
  jogador.forca += 1;
  return;
}

function aumentaAgilidade(jogador){
  jogador.agilidade += 1;
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
      proxNarrativa: 'primeiraQuestBardoRevelaBoato'
    },{
      texto: 'Veja bem, o botao saberei em qualquer lugar, mas meu nome, só eu conheço. Qual valerá mais? [Carisma]',
      proxNarrativa: testeDeCarisma
    },{
      alteracao: mudaNomeConhecido,
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
    narratiava: 'Você tenta para o soco, mas sua força não é suficiente, e ele te acerta em cheio, te jogando contra uma mesa. Você se vira, e a única coisa no seu campo de visão é seu pé, pronto para lhe desferir um chute.',
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

  /*if(imagemCenario.width >= "360"){
    console.log(imagemCenario.width);
    $(imagemCenario).css("width", "15vw");
  }*/

  $(musicaDeFundo).attr('src', cenarios[proximoCenario].musica);
  $(musicaDeFundo).attr('volume', 0.65);

  if(tocarMusica === true){
    musicaDeFundo.play();
  }else{
    musicaDeFundo.pause();
  }

/*  if(645 <= screen.height <= 672){
    containerBotoes.id = 'botoesResponsive';
  }*/

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

      if(alteracaoAtributosCenario != undefined){
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
