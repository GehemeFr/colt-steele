console.log("************");
console.log("Exercice 1 chargé : printReverse()");
function printReverse(array) {
  var index = array.length - 1;
  for (var i = index; i >= 0; i--) {
    console.log(array[i]);
  }
}

console.log("Exercice 2 chargé : isUniform()");
function isUniform(array) {
  var comparateur = array[0];
  var compteur = 0; // Si = 0 => vrai, si > 0 => faux
  array.forEach(function(i){
    if (i !== comparateur) {
      compteur++
    }
  });
  if (compteur > 0) {
    return false;
  }
  return true;
}

console.log("Exercice 3 chargé : sumArray()");
function sumArray(array) {
  var sum = 0;
  array.forEach(function(element){
    sum += element;
  });
  console.log(sum);
}


console.log("Exercice 4 chargé : max()");
function max(array) {
  var max = array[0];
  array.forEach(function(i){
    if (i > max) {
      max = i;
    }
  })
  console.log(max);
}
