const inputTexto = document.querySelector("#textarea"); /* Hace referencia al id textarea */
const mensaje = document.querySelector(".mensaje"); /* Hace referencia a la clase mensaje */
const titulo = document.querySelector(".ocultar_titulo"); /* Hace referencia a la clase ocultar_titulo */
const parrafo = document.querySelector(".ocultar_parrafo"); /* Hace referencia a la clase ocultar_parrafo */
const btnCopiar = document.querySelector("#copiar"); /* Hace referencia al id copiar */

/*  ENCRIPTACION */
function btnEncriptar(){ /* Funciones para BOTON Encriptar */
    const textoEncriptado = codificar(inputTexto.value); 
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    titulo.style.display = 'none'
    parrafo.style.display = 'none'
    btnCopiar.style.display = 'block'
}

function codificar(StringParaEncriptar) { /* Funciones para Encriptar */
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){ /* Recorre la matriz */
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) /* Realiza el cambio de caracteres */
        }
    }
    return StringParaEncriptar;
} 

/* DESENCRIPTACION */
function btnDesencriptar(){ /* Funciones para BOTON Encriptar */
    const textoEncriptado = decodificar(inputTexto.value); 
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    titulo.style.display = 'none'
    parrafo.style.display = 'none'
    btnCopiar.style.display = 'block'
}

function decodificar(StringParaEncriptar) { /* Funciones para desencriptar */
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){ /* Recorre la matriz */
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) /* Realiza el cambio de caracteres */
        }
    }
    return StringParaEncriptar;
} 

/* COPIAR*/
function copiarTexto() { 
    var content = document.getElementById('resultado');
    content.select();
    document.execCommand('copy');
    alert("Mensaje Copiado al Portapapeles");
}