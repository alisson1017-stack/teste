//definir variavel "contagem" = 'A' + 1
//definir variavel "input" com prompt
//remover 'A' de contagem
//adicionar input a contagem
//iniciar loop while contagem for diferente de "A0"
//    =0
//        mostrar
//        pedir novo input
//        adicionar input a contagem
//    <0
//        mostrar
//        adicionar 1
//    >0
//        mostrar
//        subtrair 1
//]
let contagem = 'A1';
let input = prompt('Digite qualquer número para começar a contagem (pro)regressiva:');
if (contagem == 'A1') {
    contagem = parseInt(contagem) + input;
}
if (contagem != 'A1'){
        if (contagem == 0) {
            alert(contagem);
            contagem = parseInt(prompt('Digite um número para começar uma nova contagem (pro)regressiva:'));
        }
    else if (contagem < 0) {
        alert(contagem);
        contagem++;
    }
    else if (contagem > 0) {
        alert(contagem);
        contagem--;
    }
}