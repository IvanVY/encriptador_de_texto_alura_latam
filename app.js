//ocultar boton
document.getElementById("btn-copiar").style.display = "none";

function encriptar(){
    var texto = document.getElementById("caja-texto").value;
    var reemplazar = {
        "e":"enter", 
        "i":"imes", 
        "a":"ai", 
        "o":"ober", 
        "u":"ufat"
    };

    texto = texto.replace(/[eiaou]/g, function(match){
        return reemplazar[match];
    });

    document.getElementById("txt-resultado").textContent = texto;
    document.querySelector('.mensaje').style.backgroundImage = 'none';
    document.getElementById("caja-ocular").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
};

function desencriptar(){
    var textoEncriptado = document.getElementById("caja-texto").value;
    var reemplazar = {
        "enter":"e", 
        "imes":"i", 
        "ai":"a", 
        "ober":"o", 
        "ufat":"u"
    };

    textoOriginal = textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, function(match){
        return reemplazar[match];
    });

    document.getElementById("txt-resultado").textContent = textoOriginal;
    document.querySelector('.mensaje').style.backgroundImage = 'none';
    document.getElementById("caja-ocular").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
};

function copiartxt(){
    let texto = document.getElementById("txt-resultado").textContent;
    const copiarConenido = async () => {
        try {
            await navigator.clipboard.writeText(texto);  
        } catch (err) {
            console.error("error al copiar:", err);
        }
    }
    copiarConenido();
}