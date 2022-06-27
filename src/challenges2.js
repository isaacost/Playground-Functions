// Desafio 11
function generatePhoneNumber(array) {
  let resultado;
  let contador = 0;
  let maiorContador = 0;

  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < 0 || array[i] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        let verificador = array[i];

        for (let j = 0; j < array.length; j += 1) {
          if (verificador === array[j]) {
            contador += 1;
          }
        }
        if (contador > maiorContador) {
          maiorContador = contador;
        }

        contador = 0;
        if (maiorContador >= 3) {
          resultado = 'não é possível gerar um número de telefone com esses valores';
        } else {
          resultado = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
        }
      }
    }
}
  return resultado;
}

console.log(generatePhoneNumber([-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
