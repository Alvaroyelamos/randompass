const Mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Minusculas = "abcdefghijklmnopqrstuvwxyz"
const Numeros = "1234567890"
const Simbolos = "~!@#$%^&*()_+/"

const Resultado = document.getElementById("Resultado")
const TotalCaracteres = document.getElementById("Caracteres")
const BotonMayusc = document.getElementById("mayuscula")
const BotonMinusc = document.getElementById("minuscula")
const BotonNum = document.getElementById("numero")
const BotonSim = document.getElementById("simbolo")

const DatoAleatorio = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (BotonMayusc.checked) {
        password += DatoAleatorio(Mayusculas)
    }
    if (BotonMinusc.checked) {
        password += DatoAleatorio(Minusculas)
    }
    if (BotonNum.checked) {
        password += DatoAleatorio(Numeros)
    }
    if (BotonSim.checked) {
        password += DatoAleatorio(Simbolos)
    }
    if (password.length < TotalCaracteres.value) {
        return generatePassword(password)
    }

    // Resultado.innerText = truncateString(password, TotalCaracteres.value);
}

generatePassword();

document.getElementById("boton").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

BotonMayusc.addEventListener(
    "click",
    function() {
        if (BotonMayusc.checked) {
            document.getElementById("F1").innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        } else {
            document.getElementById("F1").innerHTML = "<s>ABCDEFGHIJKLMNOPQRSTUVWXYZ</s>"
        }    
    }
)

BotonMinusc.addEventListener(
    "click",
    function() {
        if (BotonMinusc.checked) {
            document.getElementById("F2").innerHTML = "abcdefghijklmnopqrstuvwxyz"

        } else {
            document.getElementById("F2").innerHTML = "<s>abcdefghijklmnopqrstuvwxyz</s>"
        }    
    }
)

BotonNum.addEventListener(
    "click",
    function() {
        if (BotonNum.checked) {
            document.getElementById("F3").innerHTML = "1234567890"

        } else {
            document.getElementById("F3").innerHTML = "<s>1234567890</s>"
        }    
    }
)

BotonSim.addEventListener(
    "click",
    function() {
        if (BotonSim.checked) {
            document.getElementById("F4").innerHTML = "~!@#$%^&*()_+/"

        } else {
            document.getElementById("F4").innerHTML = "<s>~!@#$%^&*()_+/</s>"
        }    
    }
)