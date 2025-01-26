let ListaNumerosSorteados = [];
let numeroLimite = 40
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Número secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 40');
}

exibirTextoNaTela('h1','Número secreto');
exibirTextoNaTela('p' , 'Escolha um número entre 1 e 40');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O número secreto é menor ');
        } else{
            exibirTextoNaTela('p' , 'O número secreto é maior');
            //tentativas = tentativas + 1 (exemplificado abaixo)
        } tentativas++
        limparCampo();
        
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1 );
   let quantidadeDeElementosNaLista = ListaNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
            ListaNumerosSorteados = [];
        }


   if (ListaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
}else {
    ListaNumerosSorteados.push(numeroEscolhido);
    console.log(ListaNumerosSorteados);
   }    return numeroEscolhido;
}
function limparCampo(){
let chute = document.querySelector('input');
chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);
}
