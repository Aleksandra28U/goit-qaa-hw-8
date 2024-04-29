// Zadanie 1

//para "name": "Josh",                //string
//para "weight": 175,                 //number
//para "age": 30,
//para "eyecolor": "brown",
//para "isHappy": true,               //boolean
// "cars": ["Chevy", "Honda"],        //array, para: cars: []
// "favoritBook": {                   //object, para: favoritBook: {}
//para     "title": "The Last Kingdom",
//para     "author": "Bernard Cornwell",
//para     "rating": 8.38
//   }

// Zarówno klucze jak i wartości są tutaj ujęte w cudzysłów, oprócz boolean i number

// Zadanie 2

const json = '{"name":"Mango","age":3,"isHappy":true}';
// konwersja json'a na obiekt
const obj = JSON.parse(json);
// wyświetlenie w konsoli
console.log(obj);

// Zadanie 3

const invalidJson = '{"name":"Mango,"age":3,"isHappy":true}';
// próba zamiany json'a na obiekt
try {
  const obj = JSON.parse(invalidJson);
  console.log(obj);
} catch (error) {
  // wychwycenie ewentualnego błędu
  console.error("Name: ", error.name),
    console.error("Message: ", error.message);
}
