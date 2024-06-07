const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas = [
    {
        enunciado: "Questões ambientais são perturbações no funcionamento usual dos ecossistemas. Além disso, essas questões podem ser causadas pelos humanos ou podem ser naturais vamos dar uma olhada sobre?",
        alternativas: [
            "Sim, seria ótimo!",
            "tenho interesse!"
        ]
    },
    {
        enunciado: "A poluição da água, um dos principais problemas ambientais do mundo, é causada principalmente por atividades antrópicas, ou seja, é derivada das ações dos seres humanos o que você faria para ajudar em relação a isso?.",
        alternativas: [
            " Ajudo na utilização de produtos químicos nas lavouras, o que gera resíduos químicos nos cursos de água.",
            "Não sou capaz de ajudar"
        ]
    },
    {
        enunciado: "Sobre o fenômeno da inversão térmica, pode-se afirmar que é responsável pela difusão de problemas respiratórios na população residente em grandes centros urbanos, você concorda com esse fato?.",
        alternativas: [
            "Sim, está certo.",
            "Não isso esta totalmente errado!."
        ]
    },
    {
        enunciado: "Você ajuda o meio ambiente?",
        alternativas: [
            "Sim, sempre gosto de ajudar",
            "Não, mas pretendo no futuro."
        ]
    },
    {
        enunciado: "Você acha que economizar a água é algo bom para o meio ambiente? ",
        alternativas: [
            "Sim, pois ajuda a reduzir a poluição",
            "Creio que não ajude o meio ambiente."
        ]
    }
];
