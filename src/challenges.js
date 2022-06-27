// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let indice = array.length;
  let resultado = (array[indice - 1] + ', ' + array[0]);

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);

  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  let contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let resultado = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      resultado += '1';
    } else if (string[i] === 'e') {
      resultado += '2';
    } else if (string[i] === 'i') {
      resultado += '3';
    } else if (string[i] === 'o') {
      resultado += '4';
    } else if (string[i] === 'u') {
      resultado += '5';
    } else {
      resultado += string[i];
    }
  }
  return resultado;
}

console.log(encode('hello'));

function decode(string) {
  let resultado = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      resultado += 'a';
    } else if (string[i] === '2') {
      resultado += 'e';
    } else if (string[i] === '3') {
      resultado += 'i';
    } else if (string[i] === '4') {
      resultado += 'o';
    } else if (string[i] === '5') {
      resultado += 'u';
    } else {
      resultado += string[i];
    }
  }
  return resultado;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
