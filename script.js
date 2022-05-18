const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"],["e", "enter"], ["i", "imes"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptar = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptar
    mensagem.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["ai", "a"],["enter", "e"], ["imes", "i"], ["ober", "o"],["ufat", "u"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptar;
}
