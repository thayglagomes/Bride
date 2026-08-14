/*
 * ARQUIVO PRINCIPAL PARA PERSONALIZAÇÃO
 *
 * Altere neste arquivo:
 * - título e explicação da capa;
 * - perguntas;
 * - alternativas;
 * - resposta correta;
 * - instrução física;
 * - texto revelado;
 * - posição do cenário panorâmico.
 *
 * A propriedade backgroundPosition aceita valores de 0 a 100.
 * Ela determina qual trecho da imagem aparecerá em cada etapa.
 */

export const gameConfig = {
  title: "O caminho até a última porta",
  coupleName: "T&J",
  storageKey: "caminho-do-amor-progresso-v1",

  cover: {
    eyebrow: "Jogo T&J",
    title: "Cinco perguntas e Cinco passos.",
    description:
      "Você responderá a cinco perguntas sobre nós. Cada resposta correta liberará uma instrução, um objeto e um texto especial. Siga o caminho com calma.",
    rules: [
      "Responda com calma.",
      "Quando acertar, siga a instrução mostrada na tela.",
      "Leia o texto revelado antes de avançar para a próxima fase.",
    ],
    buttonLabel: "Começar a caminhada",
    backgroundPosition: 0,
    contentPosition: "left",
  },

  questions: [
    {
      id: 1,
      eyebrow: "Pergunta 1 de 5",
      question:
        "Qual data marcou oficialmente o início da nossa história?",
      hint:
        "Uma data pode guardar muito mais do que apenas números.",
      alternatives: [
        {
          id: "a",
          label: "6 de novembro de 2023",
          description: "O dia que passou a guardar oficialmente o nosso começo.",
        },
        {
          id: "b",
          label: "12 de junho de 2024",
          description: "Uma data romântica, mas não o início da nossa história.",
        },
        {
          id: "c",
          label: "1º de janeiro de 2024",
          description: "Um novo ano que já encontrou nossos caminhos unidos.",
        },
      ],
      correctAnswerId: "a",
      successAction: "1. Pegue o livro ",
      successIcon: "📖",
      successTitle: "1ª carta",
      successText: `A vida não nos trouxe até aqui por um caminho fácil. Cada passo foi marcado por lutas, medos e batalhas que, muitas vezes, só nós duas conhecemos.

Quando você decidiu entrar na minha vida, talvez ainda carregasse armaduras construídas para proteger o seu coração. Existiam receios, dúvidas e sentimentos que não eram simples de revelar. Eu também tinha os meus medos e minhas formas de me proteger. Mas, aos poucos, essas armaduras foram caindo. Entre conversas sinceras, silêncios compreendidos e gestos de cuidado, fomos aprendendo que amar também é crescer, reconhecer nossas limitações e permitir que a outra faça parte das nossas mudanças.

Por isso, escolhi te presentear com **Mindset**. Quero que este livro represente algo que desejo para nós duas: que nunca enxerguemos nossos erros, diferenças ou dificuldades como um ponto final, mas como oportunidades de aprender, amadurecer e construir uma relação cada vez melhor. Que tenhamos a humildade de mudar quando for necessário, a coragem de tentar novamente e a certeza de que um relacionamento também se constrói todos os dias. **Que o nosso mindset seja sempre o de duas pessoas que não precisam ser perfeitas para dar certo, mas que escolhem crescer juntas para fazer o amor dar certo.**`,
      wrongMessage:
        "Ainda não é essa data. Volte às primeiras cores da nossa história.",
      backgroundPosition: 22,
      contentPosition: "right",
    },

    {
      id: 2,
      eyebrow: "Pergunta 2 de 5",
      question:
        "Local em que nossa amizade foi se transformando em algo maior?",
      hint:
        "Escolha a lembrança que representa o início dessa mudança.",
      alternatives: [
        {
          id: "a",
          label: "Na Festa das Cores",
          description: "Quando nossos caminhos começaram a se aproximar.",
        },
        {
          id: "b",
          label: "Na padaria Oliveira terminando na praia",
          description:
            "Quando conquistar seu coração deixou de ser apenas uma brincadeira.",
        },
        {
          id: "c",
          label: "Quando o Ben chegou",
          description: "Quando nossa família começou a crescer.",
        },
      ],
      correctAnswerId: "b",
      successAction: "2. Entre em casa e Abra o saquinho",
      successIcon: "👝",
      successTitle: "2ª carta",
      successText: `Bom entre conversas, olhares e momentos que pareciam simples, Deus já estava conduzindo os nossos caminhos para que, no tempo certo, eles se encontrassem.
      
      Hoje compreendo que o nosso encontro não aconteceu por acaso. Antes mesmo de sabermos o que viveríamos, Deus já conhecia os nossos sentimentos, os nossos medos, os desafios que enfrentaríamos e tudo aquilo que ainda construiríamos juntas.
      
      Foi Nesses encontros de café da manhã que se estendia para um almoço na praia que você começou a ocupar um lugar diferente em meu coração. Ali não guarda apenas lembranças: ela guarda o início de uma história abençoada, construída com amor, amizade, coragem e fé.
      
      Nem sempre entendemos os caminhos escolhidos por Deus, mas acredito que Ele permitiu que cada passo nos conduzisse uma até a outra. E, desde então, mesmo nos momentos difíceis, nunca estivemos verdadeiramente sozinhas.
      
      Além disso para que em seus caminhos não haja tropeço te presenteio com este Terço, muito representativo, pois eu orava por um amor que nem o seu.`,
      wrongMessage:
        "Essa lembrança também importa, mas não é a resposta deste caminho. Tente novamente.",
      backgroundPosition: 43,
      contentPosition: "left",
    },

    {
      id: 3,
      eyebrow: "Pergunta 3 de 5",
      question:
        "Quem chegou para deixar nossa história ainda mais completa?",
      hint:
        "Algumas chegadas transformam o significado da palavra família.",
      alternatives: [
        {
          id: "a",
          label: "Um gato chamado Tom",
          description: "Uma companhia carinhosa que poderia fazer parte do lar.",
        },
        {
          id: "b",
          label: "O Ben",
          description: "Uma chegada pequena que tornou nosso amor ainda maior.",
        },
        {
          id: "c",
          label: "Um passarinho chamado Azul",
          description: "Uma lembrança leve, mas não quem completou nossa família.",
        },
      ],
      correctAnswerId: "b",
      successAction: "3. Abra a Casinha do Ben",
      successIcon: "👜",
      successTitle: "3ª carta",
      successText: `Agora chega às suas mãos um buquê branco porque representa tudo aquilo que desejo para a nossa nova caminhada: firmeza, tranquilidade, paz e a certeza de um amor construído para permanecer.

O branco não significa que a nossa história foi perfeita ou que nunca enfrentaremos dificuldades. Ele representa a paz que encontramos depois das batalhas, a maturidade de quem aprendeu com os próprios medos e a coragem de começar um novo capítulo com o coração aberto.

Cada flor separadas são delicadas; reunidas, tornam-se fortes. Assim também somos nós: 2 pessoas inteiras que escolheram caminhar juntas e fortalecer uma à outra.

Ao olhar para estas flores brancas, quero que você se lembre de que o novo não precisa causar medo. O novo também pode ser abrigo, esperança e recomeço. Pode ser uma casa preenchida por paz, uma rotina construída com carinho e uma vida em que possamos continuar escolhendo uma à outra todos os dias.

Este buquê representa a minha intenção de construir uma relação segura, sincera e firme, na qual você possa descansar o coração e saber que o meu amor permanece.

Receba estas flores como símbolo da paz que encontro em você, da firmeza da nossa HISTÓRIA.`,
      wrongMessage:
        "Pense em quem chegou pequeno no tamanho, mas ocupou um espaço enorme em nossa família.",
      backgroundPosition: 56,
      contentPosition: "right",
    },

    {
      id: 4,
      eyebrow: "Pergunta 4 de 5",
      question:
        "O que manteve nosso amor firme mesmo quando a distância dificultou o caminho?",
      hint:
        "A resposta não está em um lugar, mas em uma escolha.",
      alternatives: [
        {
          id: "a",
          label: "A sorte",
          description: "O acaso pode aproximar, mas não sustenta uma história.",
        },
        {
          id: "b",
          label: "A escolha de permanecermos juntas",
          description: "A decisão que renovamos mesmo nos dias mais difíceis.",
        },
        {
          id: "c",
          label: "O tempo passando rapidamente",
          description: "O tempo seguiu, mas foi nossa escolha que nos manteve.",
        },
      ],
      correctAnswerId: "b",
      successAction: "4. Vá até a cozinha e abra a Caixa",
      successIcon: "🤍",
      successTitle: "4ª carta",
      successText: `Então este presente é tão representativo sabe? Comprei ele pesando muito na certeza que eu queria te dar, o véu significa um sonho de futuro que tenho para nós e toda nova caminhada começa com uma escolha: deixar para trás aquilo que já não cabe mais e seguir em direção ao que o coração reconhece como verdadeiro.

      Simboliza um futuro e o início de uma nova etapa, a coragem de construir uma vida juntas e de que não quero apenas viver momentos ao seu lado — quero compartilhar com você todos os meus caminhos.
      
      Sei que o futuro pode trazer mudanças, desafios e dias em que precisaremos ser mais fortes. Mas quero que você tenha segurança no amor que sinto. Não é um sentimento passageiro, nem uma promessa feita apenas para este momento. É uma escolha que renovo todos os dias.
      
      Este véu também representa confiança de que podemos atravessar qualquer distância, enfrentar qualquer medo e recomeçar sempre que for necessário. Porque o amor que sinto por você não se limita ao que já vivemos: ele alcança tudo aquilo que ainda desejamos construir.
      
      Antes de entrar no quarto e ver o que planejei para nós, Responda a última pergunta e leia o texto`,
      wrongMessage:
        "Não foi acaso nem facilidade. Pense no que continuamos fazendo todos os dias.",
      backgroundPosition: 76,
      contentPosition: "left",
    },

    {
      id: 5,
      eyebrow: "Pergunta 5 de 5",
      question:
        "Se nossa história fosse um filme, qual cena você escolheria viver para sempre?",
      hint:
        "Esta é a última resposta antes de descobrir o final.",
      alternatives: [
        {
          id: "a",
          label: "A primeira conversa",
          description: "A cena em que tantas possibilidades começaram a nascer.",
        },
        {
          id: "b",
          label: "O primeiro encontro",
          description: "O momento em que estar perto ganhou um novo significado.",
        },
        {
          id: "c",
          label: "A cena em que começamos nosso próximo capítulo",
          description: "A cena que transforma nossa história em um futuro juntas.",
        },
      ],
      correctAnswerId: "c",
      successAction: "LEIA O TEXTO",
      successIcon: "🚪",
      successTitle: "5ª carta",
      successText: `Antes de abrir esta porta, e me ver de Lingerie kkkkk. Talvez, por alguns segundos, a nossa história inteira passe pela sua cabeça como as cenas mais bonitas de um filme: o nosso encontro, os primeiros olhares, os abraços, as risadas, a saudade, os medos vencidos e todos os momentos que fizeram você se tornar o grande amor da minha vida.
      
      Você mudou a forma como enxergo o amor. Fez nascer em mim o desejo de construir uma vida, compartilhar os dias comuns, enfrentar os difíceis e celebrar todas as alegrias ao seu lado. Em você encontrei amor, paz, companheirismo e um lugar onde posso ser inteiramente quem sou.
      
      Talvez esta seja a nossa cena de filme. Entre com o coração aberto e veja o que planejei para nós.
      
      CLIQUE EM CONCLUIR O CAMINHO`,
      wrongMessage:
        "Nossa história não precisa ficar presa ao passado. Pense na cena que ainda começaremos a viver.",
      backgroundPosition: 100,
      contentPosition: "left",
    },
  ],
};
