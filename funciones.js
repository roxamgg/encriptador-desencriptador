let strTexto = document.getElementById('valorTexto');
let strRespuesta = document.getElementById('valorRespuesta');
const divMsjAlternativo = document.querySelector('.mensaje-alternativo');
const divMensajeInfo = document.querySelector('.mensaje-info');
const placeholder = document.querySelector('.placeholder');
const containerMensaje = document.querySelector('.container-mensaje');

/*Llaves:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptarDesencriptar(strTexto.value, 'E');
    strRespuesta.value = textoEncriptado;
    strTexto.value = "";
    strRespuesta.style.backgroundImage = "none";
    if (strRespuesta.value.trim().length > 0) {
        btnCopiar.classList.add('visible'); //Muestra el botón si hay texto.
        containerMensaje.style.display = 'block';
        divMsjAlternativo.style.display = 'none';
        divMensajeInfo.style.display = 'none';
        placeholder.style.height = '27px';
    } else {
        btnCopiar.classList.remove('visible'); //Oculta el botón si no hay texto.
        divMsjAlternativo.style.display = 'block';
        divMensajeInfo.style.display = 'block';
        placeholder.style.height = '';
    }
}

function btnDesencriptar(){
    const textoDesencriptado = encriptarDesencriptar(strTexto.value, 'D');
    strRespuesta.value = textoDesencriptado;
    strTexto.value = "";
    strRespuesta.style.backgroundImage = "none";
    if (strRespuesta.value.trim().length > 0) {
        btnCopiar.classList.add('visible'); //Muestra el botón si hay texto.
        containerMensaje.style.display = 'block';
        divMsjAlternativo.style.display = 'none';
        divMensajeInfo.style.display = 'none';
        placeholder.style.height = '27px'
    } else {
        btnCopiar.classList.remove('visible'); //Oculta el botón si no hay texto.
        divMsjAlternativo.style.display = 'block';
        divMensajeInfo.style.display = 'block';
        placeholder.style.height = '';
    }
}

function encriptarDesencriptar(texto, accion){
    /*accion = encriptar.*/
    if(accion == 'E'){
        for(let i = 0; i < matrizLlaves.length; i++){            
            if(texto.includes(matrizLlaves[i][0])){
                texto = texto.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1])
            }
                
        }
    }
    else{ /*accion = desencriptar.*/
        for(let i = 0; i < matrizLlaves.length; i++){
            if(texto.includes(matrizLlaves[i][1])){
                texto = texto.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0])
            }
                
        }
    }

    return texto;
}

function copiarInfo(){    
    strTexto.value = strRespuesta.value;
}

function permitirSoloLetrasMinusculasSinAcentos(event) {
    //Se obtiene el código ASCII de la tecla presionada.
    const codigoTecla = event.charCode || event.which;

    //Se verifica si el código está en el rango de letras minúsculas (a-z).
    //Los códigos ASCII para 'a' a 'z' son del 97 a 122.
    if (codigoTecla < 97 || codigoTecla > 122) {
        //Previene la entrada de caracteres no permitidos.
        event.preventDefault();
    }
}

//Se agrega evento 'keypress' en el campo de entrada para validar los datos de entrada.
strTexto.addEventListener('keypress', permitirSoloLetrasMinusculasSinAcentos);
