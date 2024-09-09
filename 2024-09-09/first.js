// 10. Muudame objektiks, et console.log-ides oleks paremini märgata

// console.log({ threeParameters: threeParameters });

// Filter

// 11, Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

const array = [1, 2, 3, 4, 5, 6];

// const filteredArray = array.filter((element) => element > 4);

const filteredArray = array.filter((element) => {
  console.log(element > 4);

  return element > 4;
});

console.log({ filteredArray });
console.log({ filteredArray: filteredArray });
console.log(filteredArray);

// 12. Ülesanne: Luua nimede massivi põhjal objektide massiv, mis koosneb sellisel kujul objektidest:

const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map((name) => {
  return {
    name: name,
    age: name.length + 20,
    email: `${name}@company.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join(""),
  };
});

console.log({ objectifiedNames });

// {
//   name: 'Anni',
//   age: 24,
//   email: 'anni@company.com',
//   address: 'Anni Street 55',
//   username: 'innA'
// }

// 13. Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

let raimo = {
  name: "Raimo",
  school: "TLÜ",
};

raimo = { ...raimo, height: 191 };

console.log({ raimo });

// 15. == / ===

console.log(1 == "1");
console.log(1 === "1");

// async/await Promise

const myPromise = () => {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await myPromise());
};

runPromise();

// setTimeout(() => console.log("timeout"), 2000);
