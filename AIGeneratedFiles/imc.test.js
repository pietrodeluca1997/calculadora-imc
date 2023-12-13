
const assert = require('assert');

function calcularIMC(altura, peso) {
  const imc = (peso / (altura * altura)).toFixed(2);
  return imc;
}

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

// Testes para calcularIMC()
assert.strictEqual(calcularIMC(1.70, 70), '24.22');
assert.strictEqual(calcularIMC(1.80, 90), '27.78');
assert.strictEqual(calcularIMC(1.60, 50), '19.53');

// Testes para determinarEstadoNutricional()
assert.strictEqual(determinarEstadoNutricional(16), 'Abaixo do Peso');
assert.strictEqual(determinarEstadoNutricional(22), 'Peso Normal');
assert.strictEqual(determinarEstadoNutricional(28), 'Sobrepeso');
assert.strictEqual(determinarEstadoNutricional(32), 'Obesidade Grau I');
assert.strictEqual(determinarEstadoNutricional(38), 'Obesidade Grau II');
assert.strictEqual(determinarEstadoNutricional(42), 'Obesidade Grau III');
