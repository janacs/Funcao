//funções
// bloco de codigo que executa uma tarefa
/*
function nomeDaFuncao(parametro) {
    codigo a ser executado;
}
ativando a função:
nomeDaFuncao();
*/
function msg() {
    console.log("Bom diaa!! Sextouuuu!!");
    console.log("Tem coisa boa chegando!");
}
//invocando/chamando/ativando
msg();

// const nomeDosCantores = {}; //objeto
// const comida = []; // array
// const karyNight = true; //variavel

//                   function(parametro)
const pessoaSorteada = function(nome, cidade) {
    console.log(nome);
    console.log(cidade);
};

pessoaSorteada("Fellipe", "Rio de Janeito");

//ex:
const boasVindas = function() {
    console.log("Seja bem vindos!!");
}

boasVindas();

function soma() {
    let a = 2;
    let b = 2;
    let total = a + b;
    return total;
}
console.log(soma());