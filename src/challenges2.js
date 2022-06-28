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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    if (Math.abs(lineA - lineB) < lineC && Math.abs(lineB - lineC) < lineB && Math.abs(lineB - lineC) < lineA) {
      return true;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let numberPattern = /\d+/g;
  let numero = string.match(numberPattern);
  let soma = 0;

   for (let i = 0; i < numero.length; i += 1) {
     soma += Number(numero[i]);
   }
   if (soma === 1) {
     return (soma + ' copo de água');
   } else {
     return (soma + ' copos de água');
   }
 }

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
