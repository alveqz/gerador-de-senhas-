const numeroSenha = document.querySelector(".parametro-senha__texto")
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'la senha.'

let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = '0123456789'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha

const botoes =  document.querySelectorAll(".parametro-senha__botao")

botoes[0].onclick = diminuir;

function diminuir() {
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
    
}

botoes[1].onclick = aumentar

    function aumentar() {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;

    }

geraSenha()

function geraSenha(){
    let senha = ''
    // lOOP - Repetições
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
        campoSenha.value = senha;
}