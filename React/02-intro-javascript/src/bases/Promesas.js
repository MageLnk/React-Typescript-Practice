import { getHeroeById } from "./bases/Imports, exports, basics methods";

console.log("Ola k ase");

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("2 segundos después");
//     const heroe = getHeroeById(2);
//     //console.log(heroe);
//     resolve(heroe);
//     reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((data) => {
//     console.log("Then de la promesa", data);
//   })
//   .catch((err) => console.error(err));

const getHeroeByIdAsync = async (id) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (!heroe) reject("No se pudo encontrar el héroe");
      resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(7)
  .then((heroe) => console.log(heroe))
  .catch(console.error);
