const btnCalcular = document.getElementById("btnCalcular");
let inputAltura = document.getElementById("txtAltura");
let inputPeso = document.getElementById("txtPeso");
let resultado = document.getElementById("resultado");
$('#txtAltura').mask('0.00');

 btnCalcular.addEventListener("click", calcularIMC);

 // Função para calcular o IMC
 function calcularIMC() {
    const altura = parseFloat(inputAltura.value);
    const peso = parseFloat(inputPeso.value);
    
    if(altura && peso && !isNaN(altura) && !isNaN(peso)) {
        const imc = (peso / (altura * altura)).toFixed(2);

        const estadoNutricional = determinarEstadoNutricional(imc)

        apresentarResultado(imc, estadoNutricional)
    }    
 }

 // Função para determinar o estado nutricional com base no IMC
function determinarEstadoNutricional(imc) {
    let estadoNutricional = '';

    switch (true) {
        case imc < 18.5:
            estadoNutricional = 'Abaixo do Peso';
            break;
        case imc >= 18.5 && imc < 24.9:
            estadoNutricional = 'Peso Normal';
            break;
        case imc >= 25 && imc < 29.9:
            estadoNutricional = 'Sobrepeso';
            break;
        case imc >= 30 && imc < 34.9:
            estadoNutricional = 'Obesidade Grau I';
            break;
        case imc >= 35 && imc < 39.9:
            estadoNutricional = 'Obesidade Grau II';
            break;
        case imc >= 40.0:
            estadoNutricional = 'Obesidade Grau III';
            break;
        default:
            break;
    }

    return estadoNutricional;
}

function apresentarResultado(imc, estadoNutricional) {

    resultado.removeAttribute('hidden');

    resultado.innerHTML = `Seu IMC é: <span id="resultado-imc">${imc}</span> <br>Estado nutricional: <span id="resultado-nutricional">${estadoNutricional}</span>`;
}