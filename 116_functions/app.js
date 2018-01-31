// -------------------------
// Exercice 1
function isEven(x) {
  return (x % 2 === 0);
}

// -------------------------
// Exercice 2
function factorial(x) {
  var num = 1;
  for (var i = 1; i <= x; i++) {
    num *= i;
  }
  return num;
}

// -------------------------
// Exercice 3
function kebabToSnake(kebab) {
  return kebab.replace(/-/g , "_");
}
