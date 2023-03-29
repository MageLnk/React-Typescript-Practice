// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);

const retornaPersona = ({ nombre, edad, clave, rango = "Soldado" }) => {
  console.log(nombre, edad, clave, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1414,
      lng: -12.1212,
    },
  };
};

const avenger = retornaPersona(persona);

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;

console.log(nombreClave, anios, lat, lng);
