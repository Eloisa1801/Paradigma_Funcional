function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = somar(3)(4)(5);
console.log(result);

function calcular(x) {
  return function (y) {
    return function (z) {
      return z(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const rCalcular = calcular(5)(6)(subtrair);
console.log(rCalcular);
