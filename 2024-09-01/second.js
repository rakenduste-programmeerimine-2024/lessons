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

// Teema: map ja filter

// 8. Ülesanne: liita igale elemendile juurde +5, et uuel muutujale omandaks [6, 7, 8, 9, 10] väärtuse

// 9. Käime läbi ka erinevaid 3 parameetrit, mida saab map ja filtriga välja kutsuda

// 10. Muudame objektiks, et console.log-ides oleks paremini märgata

// Filter

// 11, Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

// 12. Ülesanne: Luua nimede massivi põhjal objektide massiv, mis koosneb sellisel kujul objektidest:

// {
//   name: 'Anni',
//   age: 24,
//   email: 'anni@company.com',
//   address: 'Anni Street 55',
//   username: 'innA'
// }

// 13. Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

// 14. Tahame muuta eelnevatest andmetest midagi jättes teised samaks

// 15. == / ===
