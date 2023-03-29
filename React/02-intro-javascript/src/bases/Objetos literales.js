const persona = {
  nombre: "Tony",
  lastName: "Stark",
  age: 45,
  direction: {
    city: "New York",
    zip: 0303456,
    lat: 14.323232,
    lng: 34.923333,
  },
};

console.log("Before All", persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log("After all", persona);
console.log("After all", persona2);
