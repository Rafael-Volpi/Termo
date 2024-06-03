var height = 6; // número de tentativas
var width = 5; // comprimento da palavra

var row = 0; // tentativa atual
var col = 0; // letra atual

var gameOver = false;
var gameOver1 = false;

var wordList = ["termo", "suíte", "ávido", "festa", "bebia", "honra", "ouvir", "pesco", "fungo", "pagam", "ginga", "pinta", "poder", "útero", "pilha", "sarar", "fruta", "piano", "notar", "musgo", "tensa", "melão", "feliz", "miojo", "pagos", "texto", "mamãe", "ameno", "chuva", "coral", "forte", "tonta", "temor", "ligar", "rolar", "navio", "limbo", "calvo", "fedor", "balde", "oxalá", "talco", "lábia", "crime", "grade", "carta", "flora", "comum", "fatal", "pecar", "feroz", "vírus", "armar", "couro", "êxito", "ecoar", "balão", "falir", "tecer", "arena", "justo", "árido", "ruiva", "múmia", "fogão", "dupla", "touca", "sogro", "ósseo", "treta", "átomo", "sadio", "cólon", "pátio", "molas", "certo", "risco", "bossa", "porre", "tigre", "vocal", "treze", "sueco", "verbo", "latim", "povos", "longo", "lotar", "depor", "cento", "trava", "latão", "ditos", "tórax", "polir", "cacos", "túnel", "lindo", "pegar", "pilar", "passo", "piada", "puxar", "taças", "manta", "barba", "subir", "tosse", "adega", "veias", "mesma", "mirim", "mansa", "nobre", "grama", "ritmo", "samba", "ardor", "daqui", "bravo", "surfe", "tanto", "imune", "lucro", "finos", "bocas", "toldo", "major", "cabos", "estar", "focal", "ações", "queda", "juros", "elite", "burro", "fundo", "duelo", "breve", "bolso", "linha", "parir", "furar", "quina", "pasta", "suíno", "dosar", "cervo", "sujar", "corda", "macia", "reler", "musas", "verme", "focar", "maçãs", "noção", "anual", "aérea", "cerco", "sócio", "porca", "fraco", "punho", "acima", "varão", "bolha", "tanga", "globo", "rampa", "goela", "reais", "cheio", "fosso", "pouco", "danos", "salas", "mimar", "sanha", "óxido", "suave", "época", "antro", "total", "jóias", "polvo", "jejum", "atriz", "recuo", "ágeis", "trenó", "fluir", "muito", "ópera", "ficar", "bucha", "magro", "frota", "série", "ácido", "ápice", "líder", "idoso", "multa", "primo", "garça", "banal", "juíza", "jorro", "sismo", "mercê", "pônei", "etapa", "modas", "colar", "muita", "papel", "ruela", "meias", "gripe", "causa", "menor", "nulos", "caule", "rubor", "optar", "redor", "nação", "galho", "roubo", "parto", "cenas", "pódio", "lesar", "telão", "reúso", "odiar", "usual", "latir", "altos", "livre", "vosso", "geada", "etnia", "trevo", "rezar", "bucal", "vetor", "filho", "miolo", "ordem", "valor", "filha", "antes", "vetar", "surra", "prata", "ceder", "pirão", "frear", "quilo", "rombo", "lomba", "praia", "urnas", "aveia", "picar", "arcar", "única", "mágoa", "jaula", "gerar", "trena", "gemer", "riste", "lábio", "busto", "visar", "velha", "aéreo", "adaga", "crase", "feras", "missa", "cobra", "idéia", "briga", "dardo", "berço", "palmo", "ralar", "reles", "blusa", "super", "grata", "longa", "tarso", "vulto", "lenda", "grego", "pinos", "flúor", "obeso", "sauna", "assim", "troco", "úteis", "infra", "pudor", "cofre", "prece", "junho", "manco", "pisar", "posse", "copas", "ninfa", "gruta", "regra", "citar", "mural", "gíria", "ruína", "fases", "faraó", "míope", "mando", "frios", "gelar", "chave", "sobra", "opaco", "lagos", "corpo", "doses", "basco", "caída", "vinda", "sujos", "igual", "lápis", "julho", "acaso", "dados", "favor", "pente", "beata", "chulo", "rumos", "cubos", "tento", "toque", "polpa", "ombro", "raras", "pneus", "canil", "funil", "perto", "coala", "amplo", "orgia", "doces", "sobre", "tédio", "pinça", "motel", "trufa", "voraz", "azedo", "coeso", "ácaro", "calmo", "enfim", "mitos", "feios", "palha", "andar", "crepe", "pingo", "avelã", "malte", "saída", "monge", "salto", "lótus", "rímel", "lauda", "damas", "sadia", "truco", "sério", "oeste", "selva", "reter", "bolsa", "anexo", "renda", "lobos", "vício", "zebra", "modos", "praxe", "pudim", "birra", "praça", "pedra", "olhar", "pizza", "banho", "bucho", "afins", "maior", "cabra", "visão", "irado", "razão", "macio", "troca", "salmo", "casta", "mídia", "trupe", "morna", "falso", "lidar", "afeto", "verso", "belos", "páreo", "vídeo", "denso", "herói", "moeda", "vaiar", "cópia", "coçar", "aulas", "ganho", "chapa", "jarra", "velho", "grilo", "sigma", "farsa", "sigla", "clone", "cesta", "anjos", "rugir", "luzes", "árdua", "parvo", "censo", "virar", "apito", "gosto", "casto", "fraca", "agudo", "sovar", "fatos", "torso", "tumba", "veste", "leões", "secar", "berro", "sutis", "bispo", "loção", "pesar", "digno", "bamba", "broca", "hiato", "clube", "totem", "prumo", "meios", "vulgo", "esqui", "épico", "minha", "ainda", "remar", "manso", "ousar", "viral", "óvulo", "trote", "artes", "facas", "brava", "meiga", "campo", "levar", "preta", "lebre", "pobre", "gesso", "sabiá", "freio", "marte", "clara", "magos", "reino", "murro", "calar", "prosa", "feita", "folga", "terço", "patas", "vogal", "zíper", "divas", "borda", "penar", "errar", "névoa", "morto", "forma", "áureo", "vapor", "circo", "faixa", "beijo", "bufão", "pedir", "tropa", "vital", "vento", "cárie", "vespa", "negro", "pardo", "local", "beato", "quais", "frase", "sucos", "botão", "balsa", "foice", "nozes", "dente", "cedro", "aceno", "repor", "leque", "drama", "forno", "tarde", "sarro", "certa", "trama", "milho", "dreno", "carma", "poeta", "máfia", "lenço", "nunca", "ficha", "ótica", "molho", "barão", "cútis", "toada", "trens", "chalé", "ciclo", "leigo", "golpe", "haver", "varal", "ritos", "fibra", "nervo", "irmãs", "sagaz", "gente", "pombo", "zinco", "pavor", "feixe", "pular", "titia", "deter", "axila", "brejo", "rever", "naipe", "arder", "então", "pleno", "parma", "juízo", "noite", "seiva", "furor", "janta", "mover", "vidro", "votar", "brasa", "areal", "jarro", "poços", "ninja", "nossa", "boiar", "outra", "pires", "regar", "boato", "sumir", "lenta", "loira", "cinza", "fisco", "agora", "lazer", "pista", "pulga", "fosca", "males", "conto", "tocha", "retas", "cuspe", "persa", "gêmeo", "tenda", "águia", "meros", "robôs", "lados", "areia", "impor", "vigor", "médio", "matiz", "órgão", "senso", "novas", "turco", "densa", "balas", "bicho", "galão", "atual", "monte", "tribo", "tarda", "baita", "ampla", "floco", "banjo", "olhos", "gasto", "fácil", "acesa", "torto", "horta", "alçar", "vivos", "gaita", "solto", "cetro", "redes", "criar", "sacro", "banir", "prato", "gorro", "miúdo", "moída", "aliar", "bater", "fauna", "norte", "haste", "alado", "bloco", "pinga", "ético", "corja", "morno", "ideal", "fusão", "verão", "vozes", "bílis", "ímpar", "sogra", "jovem", "testa", "metal", "falsa", "bruto", "tenso", "dique", "fator", "sutil", "grupo", "matar", "motor", "meses", "vazio", "cujos", "parda", "carpa", "árabe", "plebe", "advir", "punir", "rival", "trave", "tricô", "lento", "sarda", "gozar", "caber", "sexta", "sacra", "rolha", "açude", "casos", "cisão", "chata", "ossos", "expor", "venda", "casco", "banco", "bomba", "sinal", "horto", "ramos", "fonte", "leito", "cobre", "tíbia", "cinco", "noiva", "ponto", "aluno", "traje", "canal", "rouco", "boate", "mútuo", "caros", "lente", "lares", "sacar", "porém", "feudo", "vezes", "carga", "invés", "presa", "geral", "negar", "atuar", "ciúme", "fiado", "força", "corvo", "gordo", "tutor", "duros", "exame", "caldo", "cupim", "ótimo", "mamar", "índio", "autos", "pavio", "fobia", "jeito", "votos", "tesão", "lagoa", "pampa", "diodo", "parte", "ambas", "farda", "sonar", "bacon", "gatas", "banca", "meigo", "pavão", "fixos", "doido", "valer", "girar", "fofas", "caspa", "opção", "macro", "prego", "perda", "enjoo", "longe", "ícone", "ferro", "braço", "unida", "lição", "roçar", "bambu", "dorso", "moral", "ameba", "viril", "amora", "magna", "rural", "penal", "abuso", "sunga", "poção", "erros", "surda", "beber", "cifra", "móvel", "atrás", "farol", "fugaz", "zerar", "menta", "estes", "vênus", "vista", "final", "nevar", "norma", "leste", "nudez", "telas", "tinto", "saber", "bingo", "cacau", "fardo", "morar", "bioma", "domar", "grega", "coice", "ervas", "medir", "mista", "atroz", "raios", "tosar", "muros", "santa", "desde", "posto", "cesto", "abril", "penta", "celta", "mudar", "cacho", "bando", "caixa", "resto", "libra", "régua", "calda", "preto", "tênue", "vazar", "reger", "usina", "vazia", "todos", "durar", "rimar", "angra", "selos", "aliás", "preço", "bufar", "nuvem", "ética", "lapso", "união", "civis", "grito", "bônus", "cinto", "matos", "safra", "algoz", "letra", "dogma", "pesca", "linho", "tchau", "graxa", "casal", "lidos", "zonas", "lorde", "larva", "gnomo", "casca", "botar", "tinta", "prado", "ânimo", "bacia", "magia", "saque", "grato", "bares", "rolos", "loura", "óbvio", "viola", "linda", "sábio", "cueca", "santo", "couve", "susto", "ostra", "altar", "fúria", "limpo", "trair", "ídolo", "deusa", "usura", "caçar", "todas", "obter", "tampa", "fossa", "lavar", "gueto", "lunar", "panda", "vácuo", "rigor", "humor", "pulso", "terno", "anéis", "donos", "coxão", "civil", "bocal", "aroma", "soldo", "morro", "coxas", "cupom", "jogos", "furos", "arcos", "louca", "peste", "crise", "homem", "duplo", "táxis", "pauta", "canja", "cauda", "dizer", "rapaz", "atlas", "jogar", "sítio", "guiar", "babar", "trono", "trigo", "novos", "massa", "horas", "junto", "ômega", "salsa", "pinho", "brisa", "ambos", "guria", "brega", "motim", "rumor", "sutiã", "ducha", "misto", "farto", "pólen", "débil", "dicas", "canto", "cargo", "seita", "graus", "baile", "zelar", "apelo", "arroz", "canoa", "perna", "tarja", "vasos", "fluxo", "falar", "dobro", "órfão", "leite", "curso", "comer", "cisne", "fêmea", "cheia", "lugar", "prazo", "letal", "seção", "fiapo", "vinte", "puxão", "revés", "clipe", "tomar", "manto", "gesto", "praga", "áudio", "ânsia", "tripé", "licor", "álibi", "inato", "lance", "rédea", "mútua", "vagão", "lesma", "beira", "abono", "salão", "russo", "caqui", "pelos", "servo", "facão", "barro", "filme", "rouca", "nisto", "corar", "idade", "lisos", "selim", "peixe", "untar", "sanar", "grana", "panos", "relva", "plena", "besta", "banda", "sódio", "feira", "pompa", "veloz", "belas", "poema", "tecla", "adeus", "dobra", "fruto", "sorte", "sabão", "sushi", "quibe", "corno", "tênis", "tosco", "valsa", "lacre", "fosco", "neném", "clero", "dever", "dúzia", "ração", "terça", "sótão", "fuzuê",
"aviso", "prole", "costa", "manga", "metro", "pirar", "verde", "único", "vacas", "suado", "fixar", "loiro", "fogos", "dunas", "radar", "baixa", "frevo", "terra", "calva", "harpa", "dueto", "prova", "pluma", "irmão", "justa", "pagar", "farpa", "cerca", "vôlei", "rosca", "euros", "curar", "fenda", "farra", "áreas", "unhas", "nomes", "tábua", "gosma", "capuz", "ileso", "lenha", "perua", "padre", "fazer", "tocar", "bruxo", "lojas", "lerdo", "nisso", "golfo", "topar", "usada", "ruivo", "saúde", "nadar", "lixar", "vidas", "pomba", "êxodo", "acolá", "dotar", "raiar", "batom", "ontem", "torpe", "oásis", "cloro", "curva", "surto", "ricos", "ursos", "hiena", "vasta", "risos", "febre", "fumar", "fórum", "lutar", "catar", "trela", "litro", "surdo", "menos", "choro", "chefe", "vasto", "cetim", "traço", "cílio", "extra", "greve", "tapar", "tufão", "sarau", "rosas", "touro", "trapo", "lírio", "abano", "delta", "cação", "anzol", "sarna", "clave", "refém", "hífen", "claro", "nasal", "burra", "conde", "ponte", "ondas", "quota", "mexer", "verba", "aonde", "obras", "idosa", "signo", "frias", "lesão", "mundo", "gênio", "legal", "tempo", "âmbar", "culta", "vinho", "livro", "ninho", "germe", "culto", "pasto", "podre", "mirar", "teses", "ébrio", "naves", "afago", "laudo", "ditar", "selar", "garra", "folia", "pedal", "ninar", "tirar", "fugir", "calor", "naval", "porta", "âmago", "ponta", "calma", "capaz", "genro", "almas", "feias", "senão", "barco", "zonzo", "senha", "focos", "óssea", "rosto", "socar", "carne", "garfo", "luvas", "chiar", "vazão", "porco", "gases", "úmido", "boina", "laços", "ferir", "média", "roupa", "duque", "bonde", "tiros", "avaro", "exato", "dócil", "basta", "viver", "placa", "disso", "poros", "arame", "outro", "sopas", "ótima", "bruxa", "raiva", "museu", "astro", "rente", "lombo", "bordo", "cinta", "manhã", "palco", "peões", "folha", "treco", "casar", "louco", "turvo", "rádio", "tipos", "somar", "achar", "macho", "ajuda", "times", "meter", "graça", "mosca", "milha", "carro", "algum", "conta", "nicho", "sabor", "natal", "tátil", "cerne", "torta", "apoio", "símio", "fetal", "hotel", "setor", "vesgo", "amada", "firma", "hábil", "calça", "aspas", "latas", "quase", "creme", "telha", "teias", "assar", "lousa", "baque", "rubro", "fotos", "adiar", "dólar", "polar", "limão", "lança", "coroa", "pomar", "tripa", "mesmo", "jegue", "álbum", "custo", "fútil", "laico", "dedos", "ganso", "visor", "abrir", "dedão", "bazar", "gerir", "mania", "rodar", "turno", "anões", "sexto", "palma", "parco", "pouso", "moela", "ótico", "áries", "tenor", "amido", "solar", "poste", "urubu", "coisa", "seara", "xampu", "dieta", "rocha", "turma", "paiol", "vilão", "nível", "pouca", "vinil", "frade", "tonto", "cavar", "lilás", "nariz", "torre", "parar", "supor", "gambá", "cravo", "árduo", "tosca", "clima", "sósia", "chato", "moita", "vagar", "pausa", "truta", "podar", "fuçar", "posar", "autor", "cruel", "quiçá", "avião", "retro", "dores", "credo", "hinos", "capim", "tango", "vocês", "jurar"];
var word1 = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
var word1SemAcento = removerAcentos(word1);

var wordListSemAcento = wordList.map(removerAcentos);

console.log(word1);
console.log(word1SemAcento);

window.onload = function() {
    start();
}

function start() {
    // Criar o jogo 1
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = "jogo1-" + r.toString() + '-' + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("jogo1").appendChild(tile);
        }
    }

    // Criar teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerHTML = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            } else if (key == "⌫") {
                keyTile.id = "Backspace";
            } else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }
            keyTile.addEventListener("click", processKey);
            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    // Receber a letra
    document.addEventListener("keyup", (e) => {
        processInput(e);
    });
}

function processKey() {
    let e = { "code": this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            // letra do jogo 1
            if (!gameOver1) {
                let currTile = document.getElementById("jogo1-" + row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col++;
                }
            }
        }
    } else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
            if (!gameOver1) {
                let currTile = document.getElementById("jogo1-" + row.toString() + '-' + col.toString());
                currTile.innerText = "";
            }
        }
    } else if (e.code == "Enter") {
        if (col == width) {
            update();
        }
    }

    if (gameOver == false && row == height) {
        gameOver = true;
        document.getElementById("resposta").innerText = word1;
    }
}

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function update() {
    let tentativa1 = "";
    document.getElementById("resposta").innerText = "";

    // receber a palavra da tentativa
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById("jogo1-" + row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        tentativa1 += letter;
    }

    tentativa1 = removerAcentos(tentativa1).toUpperCase();
    if (!gameOver1 && !wordListSemAcento.includes(tentativa1.toLowerCase())) {
        document.getElementById("resposta").innerText = "Palavra não aceita.";
        return;
    }

    let correto1 = 0;
    let letterCount1 = {};
    for (let i = 0; i < word1.length; i++) {
        let letter = word1SemAcento[i];
        if (letterCount1[letter]) {
            letterCount1[letter] += 1;
        } else {
            letterCount1[letter] = 1;
        }
    }

    // verificar letras na palavra
    for (let c = 0; c < width; c++) {
        let currTile1 = document.getElementById("jogo1-" + row.toString() + '-' + c.toString());
        let letter1 = currTile1.innerText;

        if (!gameOver1) {
            if (word1SemAcento[c] == letter1) {
                currTile1.classList.add("correto");
                let keyTile = document.getElementById("Key" + letter1);
                keyTile.classList.add("correto");
                correto1 += 1;
                letterCount1[letter1] -= 1;
            }
            if (correto1 == width) {
                gameOver1 = true;
                document.getElementById("mensagem").innerText = "Parabéns!";

            }
        }
        if (gameOver1) {
            gameOver = true;
        }
    }

    // verificar se as letras estão em outra posição ou não estão na palavra
    for (let c = 0; c < width; c++) {
        let currTile1 = document.getElementById("jogo1-" + row.toString() + '-' + c.toString());
        let letter1 = currTile1.innerText;

        if (!gameOver1 && !currTile1.classList.contains("correto")) {
            if (word1SemAcento.includes(letter1) && letterCount1[letter1] > 0) {
                currTile1.classList.add("contem");
                let keyTile = document.getElementById("Key" + letter1);
                if (!keyTile.classList.contains("correto")) {
                    keyTile.classList.add("contem");
                }
                letterCount1[letter1] -= 1;
            } else {
                currTile1.classList.add("errado");
                let keyTile = document.getElementById("Key" + letter1);
                if (keyTile) {
                    keyTile.classList.add("disabled");  // Apagar a tecla do teclado se não estiver na palavra
                }
            }
        }
    }
    row += 1;
    col = 0;


}

    document.addEventListener("DOMContentLoaded", function() {
        var openBtn = document.getElementById("openOverlayBtn");
        var overlay = document.getElementById("overlay");
    
        openBtn.addEventListener("click", function() {
            overlay.style.display = "flex";
        });
    
        overlay.addEventListener("click", function(event) {
            if (event.target === overlay) {
                overlay.style.display = "none";
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    
    // Função para alternar tema
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
    };

    // Verifica o tema preferido do usuário
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        document.body.classList.add('dark-theme');
    }

    // Alterna tema ao clicar no botão
    toggleThemeBtn.addEventListener('click', toggleTheme);

    const openOverlayBtn = document.getElementById('openOverlayBtn');
    const overlay = document.getElementById('overlay');

    openOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});


