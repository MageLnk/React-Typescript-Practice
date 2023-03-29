console.log("Ola k ase");

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const something = (valor) => {
  return [valor, () => console.log("Ola k ase")];
};

const [nombre, setNombre] = something("Gokú");

console.log(nombre);
setNombre();
