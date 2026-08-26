const livros = [
    {
        id: 1,
        titulo: "A Biblioteca da Meia-Noite",
        autor: "Matt Haig",
        genero: "Fantasia",
        ano: 2020,
        avaliacao: 4.1,
        isbn: "9786558380542",
        descricao: "Nora Seed encontra uma biblioteca entre a vida e a morte onde pode experimentar diferentes versões de sua própria vida.",
        sinopse: "Nora Seed chega aos 35 anos carregando uma grande quantidade de arrependimentos sobre as escolhas que fez ao longo da vida. Em meio a uma profunda crise, ela se encontra em uma misteriosa biblioteca que existe entre a vida e a morte. Cada livro presente naquele lugar representa uma vida diferente que Nora poderia ter vivido caso tivesse tomado outras decisões. Com a ajuda da bibliotecária Sra. Elm, ela começa a experimentar essas possibilidades e descobre versões completamente diferentes de si mesma. Em algumas vidas, Nora possui sucesso profissional, em outras encontra novos relacionamentos ou realiza sonhos que abandonou. Porém, ao conhecer diferentes possibilidades, ela percebe que nenhuma vida é perfeita e que todas possuem dificuldades, perdas e incertezas. Aos poucos, Nora começa a compreender que talvez não exista uma única escolha capaz de tornar uma vida perfeita e que o verdadeiro sentido está em aprender a valorizar as possibilidades que ainda existem.",
        capa: "https://covers.openlibrary.org/b/isbn/9786558380542-L.jpg"
    },

    {
        id: 2,
        titulo: "Contagem dos Inocentes",
        autor: "Fernando Bins",
        genero: "Mistério",
        ano: 2013,
        avaliacao: 4.3,
        isbn: "9788599089705",
        descricao: "Um assassinato leva diferentes personagens a investigar uma série de acontecimentos misteriosos.",
        sinopse: "A história começa com um crime que parece ser apenas mais um caso policial, mas rapidamente revela uma série de acontecimentos muito mais complexos. Enquanto as investigações avançam, diferentes personagens passam a se envolver na tentativa de descobrir quem está por trás dos crimes e quais são suas verdadeiras motivações. A narrativa combina investigação, mistério e diferentes pontos de vista, fazendo com que novas informações sejam reveladas gradualmente. Conforme as pistas aparecem, as certezas dos investigadores são constantemente colocadas em dúvida, levando a uma investigação cada vez mais complicada. O passado dos envolvidos também começa a ganhar importância, mostrando que os acontecimentos não são tão independentes quanto pareciam inicialmente.",
        capa: "capas/contagem-inocentes.jpg"
    },

    {
        id: 3,
        titulo: "Uma Vida Pequena",
        autor: "Hanya Yanagihara",
        genero: "Drama",
        ano: 2015,
        avaliacao: 4.4,
        isbn: "9788501071545",
        descricao: "Quatro amigos acompanham uns aos outros durante décadas, enquanto enfrentam mudanças, perdas e traumas.",
        sinopse: "A história acompanha quatro amigos que se conhecem durante a juventude e permanecem ligados ao longo de décadas. Cada um constrói sua própria trajetória profissional e pessoal, mas a narrativa se concentra especialmente em Jude, um homem extremamente reservado que carrega consigo um passado traumático. À medida que os anos passam, os amigos começam a descobrir partes da história de Jude que ele passou a vida tentando esconder. Seu passado influencia profundamente sua maneira de enxergar a si mesmo, seus relacionamentos e sua própria capacidade de receber afeto. Enquanto enfrentam mudanças, perdas, sucesso, fracassos e conflitos pessoais, os quatro personagens precisam aprender a lidar com a força dos vínculos que construíram e com aquilo que não conseguem controlar.",
        capa: "https://covers.openlibrary.org/b/isbn/9788501071545-L.jpg"
    },
    {
        id: 4,
        titulo: "Suicidas",
        autor: "Raphael Montes",
        genero: "Suspense",
        ano: 2012,
        avaliacao: 4.4,
        isbn: "9788535929447",
        descricao: "Nove jovens se reúnem em uma casa de campo para uma experiência que termina de maneira brutal.",
        sinopse: "Um grupo de nove jovens é encontrado morto após participar de uma espécie de jogo mortal em uma casa de campo. A polícia passa a investigar o que realmente aconteceu naquela noite e tenta descobrir por que aqueles jovens decidiram participar de algo tão extremo. Paralelamente à investigação, acontecimentos do passado dos personagens começam a ser revelados, mostrando relacionamentos, conflitos, segredos e ressentimentos. Conforme as peças são reunidas, a narrativa apresenta diferentes versões dos acontecimentos e coloca o leitor diante de novas perguntas sobre o que realmente aconteceu naquela noite. A história mistura suspense psicológico, violência e mistério enquanto conduz a investigação até suas últimas revelações.",
        capa: "https://covers.openlibrary.org/b/isbn/9788535929447-L.jpg"
    },

    {
        id: 5,
        titulo: "Tudo é Rio",
        autor: "Carla Madeira",
        genero: "Drama",
        ano: 2014,
        avaliacao: 4.3,
        isbn: "9786555871784",
        descricao: "Dalva, Venâncio e Lucy têm suas vidas ligadas por uma relação marcada por amor, perda e conflitos.",
        sinopse: "Dalva e Venâncio formam um casal cuja vida é profundamente transformada por uma tragédia. O relacionamento entre os dois passa a ser marcado por dor, culpa e ressentimento, enquanto cada um tenta lidar de uma maneira diferente com aquilo que aconteceu. Nesse cenário surge Lucy, uma prostituta que passa a ocupar um espaço inesperado na vida do casal. A presença dela provoca novas tensões e faz com que os personagens precisem enfrentar sentimentos que tentavam esconder. A narrativa explora relações humanas complexas, mostrando como amor, desejo, culpa, violência e perdão podem se misturar de maneira difícil de separar.",
        capa: "https://covers.openlibrary.org/b/isbn/9786555871784-L.jpg"
    },

    {
        id: 6,
        titulo: "O Primeiro a Morrer no Final",
        autor: "Adam Silvera",
        genero: "Romance",
        ano: 2022,
        avaliacao: 4.3,
        isbn: "9786555603514",
        descricao: "Dois jovens se conhecem em uma época em que o serviço da Morte ainda está começando.",
        sinopse: "Anos antes dos acontecimentos de Os Dois Morrem no Final, a sociedade começa a conhecer o serviço responsável por avisar às pessoas que elas morrerão nas próximas vinte e quatro horas. Valentino Prince chega a Nova York cheio de expectativas para começar uma nova fase de sua vida, enquanto Orion Pagan vive de maneira muito diferente depois de descobrir que seu próprio tempo pode estar chegando ao fim. Os dois se encontram e desenvolvem uma conexão inesperada justamente quando a Morte passa a fazer parte de suas vidas. Enquanto tentam aproveitar o tempo que possuem juntos, precisam lidar com a incerteza do futuro e com a possibilidade de que o destino já tenha decidido como aquela história terminará.",
        capa: "capas/primeiro-morrer-final.jpg"
    },

    {
        id: 7,
        titulo: "O Morro dos Ventos Uivantes",
        autor: "Emily Brontë",
        genero: "Clássico",
        ano: 1847,
        avaliacao: 4.0,
        isbn: "9788537815755",
        descricao: "A relação entre Catherine Earnshaw e Heathcliff mistura amor, obsessão, vingança e conflitos familiares.",
        sinopse: "A história gira em torno de Catherine Earnshaw e Heathcliff, que crescem juntos em meio às propriedades da família Earnshaw. Apesar da profunda ligação entre os dois, as diferenças sociais e as escolhas de Catherine acabam separando o casal. Catherine decide se casar com Edgar Linton, enquanto Heathcliff abandona a região e retorna anos depois transformado e determinado a se vingar de todos aqueles que considera responsáveis por seus sofrimentos. Sua vingança atinge não apenas Catherine e Edgar, mas também as gerações seguintes. A narrativa apresenta uma relação marcada por paixão, ressentimento, obsessão e sofrimento, explorando as consequências que as escolhas dos personagens provocam ao longo dos anos.",
        capa: "capas/morro-ventos-uivantes.jpg"
    },

    {
        id: 8,
        titulo: "Dexter: A Mão Esquerda de Deus",
        autor: "Jeff Lindsay",
        genero: "Suspense",
        ano: 2004,
        avaliacao: 4.1,
        isbn: "9786555355024",
        descricao: "Dexter Morgan trabalha na polícia de Miami enquanto esconde uma vida secreta como assassino.",
        sinopse: "Dexter Morgan trabalha como especialista em análise de sangue para a polícia de Miami e aparenta levar uma vida perfeitamente normal. Porém, por trás dessa imagem existe um segredo: Dexter possui impulsos violentos e segue um código que determina quais pessoas merecem morrer. Durante uma investigação, ele começa a se deparar com um assassino que parece possuir métodos muito semelhantes aos seus. O novo criminoso desperta a curiosidade de Dexter e faz com que ele questione se alguém conhece sua verdadeira identidade. Enquanto participa da investigação policial, Dexter precisa equilibrar sua profissão, sua vida pessoal e seus próprios instintos sem permitir que seu segredo seja descoberto.",
        capa: "capas/dexter.jpg"
    },

    {
        id: 9,
        titulo: "Homens São de Marte, Mulheres São de Vênus",
        autor: "John Gray",
        genero: "Autoajuda",
        ano: 1992,
        avaliacao: 3.3,
        isbn: "9788532505170",
        descricao: "O livro apresenta diferenças de comunicação e comportamento entre homens e mulheres nos relacionamentos.",
        sinopse: "O autor utiliza a ideia de que homens e mulheres seriam como habitantes de planetas diferentes para discutir as diferenças percebidas na forma como cada grupo se comunica, reage aos problemas e demonstra afeto. O livro apresenta diversas situações comuns em relacionamentos e procura explicar por que determinadas atitudes podem ser interpretadas de maneiras diferentes por cada pessoa. A partir dessas comparações, são apresentadas sugestões para melhorar a comunicação, compreender necessidades emocionais e reduzir conflitos entre parceiros. A obra busca mostrar como entender melhor o comportamento do outro pode contribuir para relacionamentos mais equilibrados.",
        capa: "https://covers.openlibrary.org/b/isbn/9788532505170-L.jpg"
    },

    {
        id: 10,
        titulo: "Em Águas Profundas",
        autor: "F. T. Lukens",
        genero: "Fantasia",
        ano: 2021,
        avaliacao: 4.1,
        isbn: "9786559571383",
        descricao: "Um jovem príncipe com poderes mágicos se envolve em uma aventura cercada por piratas e perigos.",
        sinopse: "Tal é um príncipe de dezessete anos que possui poderes mágicos capazes de alterar sua aparência e influenciar o mundo ao seu redor. Apesar de sua origem nobre, ele prefere passar despercebido e viver longe das responsabilidades da realeza. Sua vida muda quando seu irmão desaparece e Tal acaba envolvido em uma série de acontecimentos que o levam para longe de casa. Ao embarcar em uma aventura cercada por piratas, magia e perigos, ele conhece personagens que o ajudam a compreender melhor seus próprios poderes e sua identidade. Enquanto tenta descobrir o que aconteceu com seu irmão, Tal precisa enfrentar ameaças que podem colocar em risco não apenas sua família, mas também todo o reino.",
        capa: "capas/aguas-profundas.jpg"
    },

    {
        id: 11,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins",
        genero: "Distopia",
        ano: 2008,
        avaliacao: 4.5,
        isbn: "9786555321449",
        descricao: "Katniss Everdeen se oferece para participar dos Jogos Vorazes no lugar de sua irmã.",
        sinopse: "Em uma sociedade dividida em distritos e controlada pelo poderoso governo de Panem, os jovens são obrigados a participar dos Jogos Vorazes, uma competição em que apenas um participante pode sobreviver. Quando sua irmã mais nova é escolhida para participar, Katniss Everdeen decide ocupar seu lugar voluntariamente. Ao lado de Peeta Mellark, outro jovem selecionado de seu distrito, Katniss é levada para a capital e precisa aprender a sobreviver diante das câmeras e dos outros competidores. Enquanto luta para permanecer viva, ela percebe que os Jogos também fazem parte de uma estratégia política para manter a população sob controle.",
        capa: "https://covers.openlibrary.org/b/isbn/9786555321449-L.jpg"
    },

    {
        id: 12,
        titulo: "O Clube do Livro dos Homens",
        autor: "Lyssa Kay Adams",
        genero: "Romance",
        ano: 2019,
        avaliacao: 4.2,
        isbn: "9786555650655",
        descricao: "Um homem entra em um clube secreto de leitura para tentar salvar seu casamento.",
        sinopse: "Gavin Scott acredita que seu casamento está chegando ao fim depois de descobrir que sua esposa não está satisfeita com o relacionamento dos dois. Quando seus amigos percebem a situação, apresentam a ele um clube secreto formado por homens que utilizam romances para tentar compreender melhor seus relacionamentos. Mesmo achando a ideia absurda no início, Gavin decide ler os livros recomendados pelo grupo para tentar reconquistar a esposa. Ao longo dessa tentativa, ele começa a perceber que seus maiores problemas não estão apenas ligados à vida amorosa, mas também à dificuldade de conversar sobre sentimentos e reconhecer seus próprios erros.",
        capa: "capas/clube-livro-homens.jpg"
    },

    {
        id: 13,
        titulo: "A Garota do Lago",
        autor: "Charlie Donlea",
        genero: "Mistério",
        ano: 2016,
        avaliacao: 3.8,
        isbn: "9788562409882",
        descricao: "Uma estudante é encontrada morta e uma jornalista começa a investigar os segredos escondidos por trás do crime.",
        sinopse: "Becca Eckersley é uma jovem estudante encontrada morta em uma pequena cidade durante uma viagem. O assassinato choca a comunidade e parece não ter uma explicação clara. Algum tempo depois, a jornalista Kelsey Castle chega ao local para investigar o caso e escrever uma reportagem sobre a morte da estudante. Conforme começa a conversar com pessoas que conheciam Becca, Kelsey descobre que a jovem escondia segredos e que muitos moradores tinham motivos para não contar toda a verdade. A investigação passa a revelar acontecimentos do passado e relações que ajudam a reconstruir o que aconteceu na noite do crime.",
        capa: "https://covers.openlibrary.org/b/isbn/9788562409882-L.jpg"
    },

    {
        id: 14,
        titulo: "Maze Runner: Correr ou Morrer",
        autor: "James Dashner",
        genero: "Distopia",
        ano: 2009,
        avaliacao: 4.3,
        isbn: "9788576382478",
        descricao: "Thomas acorda sem memória em um lugar cercado por um enorme labirinto cheio de perigos.",
        sinopse: "Thomas desperta dentro de um elevador sem conseguir lembrar seu próprio passado. Quando as portas se abrem, ele descobre que está em um lugar chamado Clareira, onde vive um grupo de jovens que também perdeu as próprias memórias. Ao redor deles existe um enorme labirinto que muda constantemente e é habitado por criaturas perigosas. Todos os dias, alguns dos jovens chamados Corredores entram no labirinto para tentar encontrar uma saída. Thomas sente imediatamente que precisa entender aquele lugar e começa a se envolver cada vez mais com os mistérios da Clareira. Quando uma nova garota chega trazendo uma mensagem inesperada, as regras daquele mundo começam a mudar.",
        capa: "capas/maze-runner.jpg"
    },

    {
        id: 15,
        titulo: "O Cão dos Baskervilles",
        autor: "Arthur Conan Doyle",
        genero: "Mistério",
        ano: 1902,
        avaliacao: 4.1,
        isbn: "9788525408730",
        descricao: "Sherlock Holmes investiga uma morte ligada à antiga lenda de um cão monstruoso.",
        sinopse: "A família Baskerville é cercada por uma antiga lenda segundo a qual seus integrantes são perseguidos por uma criatura sobrenatural semelhante a um enorme cão. Quando Sir Charles Baskerville é encontrado morto em circunstâncias misteriosas, a possibilidade de que a lenda seja verdadeira começa a assustar todos ao redor. Sherlock Holmes recebe o caso e decide investigar os acontecimentos enquanto seu amigo Dr. Watson é enviado para acompanhar Sir Henry Baskerville, o novo herdeiro da família. Entre paisagens isoladas, suspeitos e acontecimentos estranhos, Holmes precisa descobrir se existe realmente algo sobrenatural por trás da morte ou se alguém está usando a antiga história como parte de um plano criminoso.",
        capa: "capas/cao-baskervilles.jpg"
    },

    {
        id: 16,
        titulo: "O Príncipe Cruel",
        autor: "Holly Black",
        genero: "Fantasia",
        ano: 2018,
        avaliacao: 4.4,
        isbn: "9788501115553",
        descricao: "Jude cresce no mundo das fadas e precisa enfrentar intrigas e disputas pelo poder.",
        sinopse: "Quando ainda era criança, Jude é levada juntamente com suas irmãs para o mundo das fadas depois que seus pais são assassinados. Criada na corte do Alto Rei, ela cresce cercada por criaturas mágicas, mas nunca deixa de ser humana e, por isso, é frequentemente tratada como inferior. Determinada a conquistar seu próprio espaço, Jude começa a se envolver nas disputas políticas da corte. Ao mesmo tempo, entra em conflito com Cardan, um dos jovens príncipes mais poderosos e cruéis daquele mundo. Conforme as intrigas aumentam, Jude percebe que existem segredos e planos muito maiores acontecendo ao seu redor e que sua própria sobrevivência pode depender de sua capacidade de jogar o perigoso jogo político das fadas.",
        capa: "capas/principe-cruel.jpg"
    }
];
