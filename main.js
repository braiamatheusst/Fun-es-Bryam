const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Em seu estilo de vida saúdavel. Você se encaixa em qual estilo de atividade física? ",
        alternativas: [
            {
                texto: " Esportes",
                afirmacao: " Você se interessa mais por esportes coletivos, como futsal, futebol, vôlei, etc.",
            },
            {
                texto: " Força e Resistência ",
                afirmacao: " Você se interessa mais por esportes individuais, focado no desenvolvimento muscular e fortalecimento, como musculação e academia.",
            }
        ]
    },
    {
        enunciado: " Você se vê como uma pessoa disciplinada neste ramo de vida saúdavel? ",
        alternativas: [
            {
                texto: " Sim! ",
                afirmacao: " Além de se interessar pelo ramo, você é uma pessoa muito focada e tem bons hábitos de cuidar da sua saúde. ",
            },
            {
                texto: " Não! ",
                afirmacao: " Porém, apesar de se interessar, você não tem um grande foco na vida saudável; utiliza o esporte como uma maneira de se divertir, de passar seu tempo.  ",
            }
        ]
    },
    {
        enunciado: " Quais os alimentos que você inclui em sua rotina diária? ",
        alternativas: [
            {
                texto: " Alimentos ricos em proteinas, fibra vitaminas etc. ",
                afirmacao: " Alimentar-se de forma benéfica para a sua saúde é incrível! Consumir bastante carnes, frutas e tentar seguir uma rotina de dieta buscando sempre o melhor para a sua saúde é essencial.. ",
            },
            {
                texto: " Alimentos com alto teor de gorduras e calóricos. ",
                afirmacao: " Optar por alimentos prontos e rápidos não é uma boa escolha. Submeter-se a comidas congeladas e ultraprocessadas, sem se importar muito com seus hábitos alimentares, também não é recomendável. ",
            }
        ]
    },
    {
        enunciado: " Você acha que há desafios na sua busca por uma vida saudável? ",
        alternativas: [
            {
                texto: " Não tenho desafios que me prejudique! ",
                afirmacao: " Muito bem! Você não tem desafios; tem tudo ao seu alcance. Basta se manter no caminho certo e seguir em frente.  ",
            },
            {
                texto: " Sim, alguns desafios. ",
                afirmacao: " Desafios nesta área são o que mais temos. É necessário manter a calma; vergonha, sedentarismo e diversos outros obstáculos são comuns nos dias de hoje. Basta escolher se você está disposto(a) a mudar isso! ",
            }
        ]
    },
    {
        enunciado: " Você tem uma motivação que ajude em sua rotina saudável? ",
        alternativas: [
            {
                texto: " Tenho um objetivo em mente! ",
                afirmacao: "Este objetivo fara voce ser um legitimo campeao, dando tudo de si para estar enfrentando diversos obstaculos. ",
            },
            {
                texto: " Não tenho nenhum objetivo em mente. ",
                afirmacao: " Enfim, se você ainda não tem nenhum objetivo em mente, fique calmo. Com o tempo, você irá perceber qual é a sua motivação para uma rotina ideal. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);


    }
}

function respostasSelecionadas(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}


mostraPergunta();
