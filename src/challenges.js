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

  for (let i = 0; i < array.length; i += 1){
    if (array[i] === maiorNumero) {
      contador += 1
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1'
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
