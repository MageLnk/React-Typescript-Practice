const saludar = (nombre) => `Hola ${nombre}`;

const getUsuarioActivo = (nombre) => ({ uid: "ABC1234", username: nombre });

const usuarioActivo = getUsuarioActivo("Goku");

console.log(usuarioActivo);
