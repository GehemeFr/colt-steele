### 9. Javascript basique
**Construction d'une boucle while :**
```
var num = 1;
while (num <= 10) {
  trucAFaire;
  num++;
}
```

**Construction d'une boucle for :**
```
for (var num = 1; num <= 10; num++) {
  trucAFaire;
}
```

! : Attention à ne pas lancer des boucles infinies sous peine de faire bugger le navigateur ou même l'ordinateur.

----

### 10. Functions
**Construction d'une fonction :**
```
function nomDeLaFonction (argument(s)Facultatif(s)) {
  Code de la fonction;
  ...;
}
```

----
### 11. Arrays
**Construction d'une _Array_ :**
```
var friends = ["Charlie", "Liz", "David"];
```
Autres méthodes (_Arrays_ vides) :
```
var friends = [];
var friends = new Array();
```
L'index commence à 0 et chaque partie correspond à un nombre.

On peut retrouver un élément par son index : ```console.log(friends[0]) ``` donnera ```"Charlie"```.

On peut modifier l'élément d'une *Array* : ```friends[0] = "Chuck"```.

On peut connaitre la longueur d'une _Array_ avec _length_:
```
var num = [43, 3, 29, 67];
num.length // donnera 4
```  

**Push / Pop :**

_push_ permet d'ajouter un élément à la fin de l'_array_: ```friends.push("Kevin") ```

_pop_ permet de supprimer le dernier élément l'_array_ (et le retourne): ```friends.pop() ```


**Shift / Unshift :**

_unshift_ permet d'ajouter un élément au début de l'_array_: ```friends.unshift("Kevin") ```

_shift_ permet de supprimer le premier élément l'_array_ (et le retourne): ```friends.shift() ``` retournera "Kevin" et le supprimera.

**IndexOf :**

_indexOf()_ trouve l'index d'un élément: ```friends.indexOf("Charlie")``` retournera ```0```. Si l'élément n'est pas présent ```-1```sera retourné. Si il y en a plusieurs, il ne retournera l'index que du premier.

**Slice :**

_slice()_ copie un ou des éléments d'une _array_: ```var bestFriends = friends.slice(0, 2)```.

**Splice :**

_slice()_ supprime un élément d'une _array_ en fonction de son index: ```Array.splice(#index, nbreElementASupprimer);```.

**Array iteration :**

Pour parcourir tous les éléments d'une _array_, on peut utiliser une boucle _for_ :
```
for (var i = 0, i < 10, i++) { console.log(array[i]); }
```
mais on peut surtout se servir de _forEach_ :
```
array.forEach(function(element){
  console.log(element);
  })
```

----
### 12. Objets (object)
**Construction :**
```
var person = {
  name: "Cindy",
  age: 32,
  city: "New-York"
}
```

Autres méthodes (_object_ vides) :
```
var person = {};
var person = new Object();
```

2 possibilités pour retrouver les données d'un _object_: ```person["name"]``` ou ```person.name```

On peut aussi ajouter une fonction à un objet avec _add_, ça s'appelle une méthode :
```
var obj = {
  name: "Bob",
  age: 31,
  isCool: false,
  add: function(x,y){
    return x + y;
  }
}
```
Pour appeler la fonction de l'objet precedant : ```obj.add(3,2)```.

Cela permet  d'organiser le code et de grouper des fonctions .
