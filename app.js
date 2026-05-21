//Enquanto a função iniciarContagem estiver ativa (sempre)
//  Pede o input
//  diferente de zero:
//      mostrar contagem atual
//      se contagem menor que zero: +1, se não: -1
//  igual a zero:
//      mostra "0"

function iniciarContagem() {
    while (true) {
        let contagem = parseInt(prompt('Digite qualquer número para começar a contagem (pro)regressiva:'));
        while (contagem !== 0) {
            alert(contagem);
            contagem += contagem < 0 ? 1 : -1;
        }
    alert(0)
    }
}

iniciarContagem();