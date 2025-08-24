let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
}
function exibirMensagemInicial(){

        exibirTextoNaTela("h1", "Jogo do número secreto nova versão");

        exibirTextoNaTela("p", "Escolha um número entre 1 e 10");        
}

exibirMensagemInicial();
function verificarChute(){
        let chute = document.querySelector("input").value;
        if(chute == numeroSecreto) {
                exibirTextoNaTela("h1", "Acertou");
                let palavraTentativa =  tentativa > 1 ? "tentativas" : "tentativa";
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
                exibirTextoNaTela("p", mensagemTentativas);
                document.getElementById("reiniciar").removeAttribute("disabled");
        }else {
                if(chute > numeroSecreto){
                        exibirTextoNaTela("p", `O número secreto é menor que ` + chute);
                }else {
                        if(chute < numeroSecreto){
                                exibirTextoNaTela("p", `O número secreto é maior que ` + chute);
                        }
                        tentativa++;
                        limparCampo();
                }
        }    

}

function gerarNumeroAleatorio(){
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
       let quantidadeDeElementosDaLista = listaNumerosSorteados.length;

        if(quantidadeDeElementosDaLista == numeroLimite){
                listaNumerosSorteados = [];
        }

       if(listaNumerosSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatorio();      
       } else {
                listaNumerosSorteados.push(numeroEscolhido);
                console.log(listaNumerosSorteados);
                return numeroEscolhido;
       }
}

function limparCampo(){
        chute = document.querySelector("input");
        chute.value = "";
}

function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        exibirMensagemInicial()
        tentativa = 1;    
}
