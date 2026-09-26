// //funções
// //criação da função

// function soma() {
//     const resultado = 10 + 10;
//     console.log(resultado);
// }

// soma();

// function divisao() {
//     const resultado = 10 / 10;
//     console.log(resultado);
// }

// divisao();

// function multiplicacao() {
//     const resultado = 10 * 10;
//     console.log(resultado);
// }

// multiplicacao();

// function subtracao() {
//     const resultado = 10 - 10;
//     console.log(resultado);
// }

// subtracao();

const operacoes = [
    function soma() {
        const resultado = 10 + 10;
        console.log("Soma:"+resultado);
    },
    function divisao() {
        const resultado = 10 / 10;
        console.log("Divisão:"+resultado);
    },
    function multiplicacao() {
        const resultado = 10 * 10;
        console.log("Multiplicação:"+resultado);
    },
    function subtracao() {
        const resultado = 10 - 10;
        console.log("Subtração:"+resultado);
    }
];

operacoes.forEach(funcao => funcao());
