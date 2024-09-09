// 1. Ülesanne: Luua array numbritega ja leida spetsiifilise numbri index

const array = [1, 2, 3, 4, 5, "hi"];

function findIndex(array, num) {
  return array.indexOf(num);
}

console.log(findIndex(array, 5));

// Arrow functions
// 2. Ülesanne: Funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function addNumbersFn(num1, num2) {
  return num1 + num2;
}

console.log(addNumbersFn(1, 2));

// 3. Ülesanne: ümber kirjutada arrow funktsioonina

const addNumbersArrowFn = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbersArrowFn(1, 2));

// 4. Ülesanne: ümber kirjutada shorthand arrow funktsioonina

const addNumbersArrowFnShort = (num1, num2) => num1 + num2;

// () => { return ... }
// () => (return) ...

console.log(addNumbersArrowFnShort(1, 5));

// Nested

// 5. Ülesanne:
// Luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:

function addNumbersNested(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

console.log(addNumbersNested(3)(99));

// 6. Ülesanne: Looge samast funktsioonist arrowfunktsioon

const addNumbersNestedAF = (num1) => (num2) => num1 + num2;

console.log(addNumbersNestedAF(9)(102));

// 7. Ülesanne: AF printida "Hello (nimi)" ja kasutada string literals

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());
console.log(greet("Raimo"));

// Teema: map ja filter

// 8. Ülesanne: liita igale elemendile juurde +5, et uuel muutujale omandaks [6, 7, 8, 9, 10] väärtuse

const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map((element) => element + 5);

console.log(addedArray);

// 9. Käime läbi ka erinevaid 3 parameetrit, mida saab map ja filtriga välja kutsuda

const threeParameters = newArray.map((element, index, array) => {
  console.log(element, index, array);

  const added = 1 + 2;

  return element + 5;
});
