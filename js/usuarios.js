
// const inputNombre = document.getElementById("nombre");
// const inputApellido = document.getElementById("apellido");
// const inputEmail = document.getElementById("email");
// const inputContrasena = document.getElementById("contrasena");
// const form = document.querySelector("form");
// const crearUsuario = document.getElementById('crear-usuario');
// const listaUsuarios = document.getElementById('listaUsuarios');
// const inputs = document.querySelectorAll('#formRegistro input');

// const expresiones = {
//     usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
//     nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
//     password: /^.{8,12}$/,
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
// };

// const campos = {
//     nombreUsuario: false,
//     apellidoUsuario: false,
//     claveUsuario: false,
//     mailUsuario: false
// };

// const validarFormulario = (e) => {
//     switch (e.target.name) {
//         case "nombre":
//             if (expresiones.nombre.test(e.target.value)) {
//                 campos['nombreUsuario'] = true;
//                 parrafoNombre.textContent = "Párrafo correcto";
//             } else {
//                 campos['nombreUsuario'] = false;
//                 parrafoNombre.textContent = "Párrafo incorrecto";
//             }
//             break;
//         case "apellido":
//             if (expresiones.usuario.test(e.target.value)) {
//                 campos['apellidoUsuario'] = true;
//                 parrafoUsuario.textContent = "Párrafo correcto";
//             } else {
//                 campos['apellidoUsuario'] = false;
//                 parrafoUsuario.textContent = "Párrafo incorrecto";
//             }
//             break;
//         case "email":
//             if (expresiones.correo.test(e.target.value)) {
//                 campos['mailUsuario'] = true;
//                 parrafoMail.textContent = "Párrafo correcto";
//             } else {
//                 campos['mailUsuario'] = false;
//                 parrafoMail.textContent = "Párrafo incorrecto";
//             }
//             break;
//         case "contrasena":
//             if (expresiones.password.test(e.target.value)) {
//                 campos['claveUsuario'] = true;
//                 parrafoClave.textContent = "Párrafo correcto";
//             } else {
//                 campos['claveUsuario'] = false;
//                 parrafoClave.textContent = "Párrafo incorrecto";
//             }
//             break;
//     }
// };

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

// function uuidv4() {
//     return crypto.randomUUID();
// };
// let usuarios = [];
// const admin = {
//     id: "000",
//     nombre: "Coco",
//     apellido: "admin",
//     mail: "admin@coco.com",
//     clave: "AdminCoco",
// };
// usuarios.push(admin);
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

// const enviarFormulario = () => {
//     const nombre = inputNombre.value;
//     const apellido = inputApellido.value;
//     const mail = inputEmail.value;
//     const clave = inputContrasena.value;
//     const mode = form.dataset.mode;

//     if (mode === "add" && nombre !== "" && apellido !== "" && mail !== "" && clave !== "") {
//         const id = uuidv4();
//         const usuario = { id, nombre, apellido, mail, clave };
//         usuarios.push(usuario);
//     } else if (mode === "delete") {
//         const id = form.dataset.id;
//         const index = usuarios.findIndex((usuario) => usuario.id === id);
//         if (index !== -1) {
//             usuarios.splice(index, 1);
//         }
//     }

//     form.reset();
//     form.dataset.mode = "add";
//     guardarUsuariosEnLocalStorage();
//     window.location.href = '/index.html'
// };

// const guardarUsuariosEnLocalStorage = () => {
//     localStorage.setItem("usuarios", JSON.stringify(usuarios));
// };

// crearUsuario.addEventListener('click', enviarFormulario);
// console.log("Usuario creado")
// const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
// if (usuariosLocalStorage) {
//     usuarios = usuariosLocalStorage;
// }
const formRegistro = document.getElementById('formRegistro')
const nombreApellido = document.getElementById('nombreApellido')
const username = document.getElementById('username')
const mailUsu = document.getElementById('mailUsu')
const claveUsu = document.getElementById('claveUsu')
const botonSubmit = document.getElementById('botonSubmit')


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const admin = {
    id: "000",
    nombreApellido: "Coco",
    username: "admin",
    mailUsu: "admin@coco.com",
    claveUsu: "AdminCoco",
};
usuarios[0] = admin;

// usuarios.push(admin);
localStorage.setItem("usuarios", JSON.stringify(usuarios));

const confirmacionForm = () =>{
    Swal.fire({
        title: 'Listo!',
        text: 'Usuario registrado con exito!',
        icon: 'success',
        heightAuto: 'false'}
      )
}

formRegistro.addEventListener('input', ()=>{
    const valorNombreApellido = nombreApellido.value;
    const valorUsername = username.value;
    const valorMail = mailUsu.value;
    const valorClave = claveUsu.value;
    const patternNombre = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
    const patternUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const patternMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const patternClave = /^.{8,12}$/
    
    if (
        valorNombreApellido.length < 4 ||
        valorNombreApellido.length > 40 ||
        !patternNombre.test(valorNombreApellido)
      ) {
        nombreApellido.setCustomValidity(
          "Ingrese al menos 4 caracteres validos (solo letras)"
        );
      } else {
        nombreApellido.setCustomValidity("");
      }
      if (
        valorUsername.length < 4 ||
        valorUsername.length > 16 ||
        !patternUsuario.test(valorUsername)
      ) {
        username.setCustomValidity(
          "Ingrese entre 4 y 16 caracteres"
        );
      } else {
        username.setCustomValidity("");
      }
      if (valorMail < 3 || valorMail > 30 || !patternMail.test(valorMail)) {
        mailUsu.setCustomValidity(
          "Ingrese una direccion de correo electronico valida"
        );
      } else {
        mailUsu.setCustomValidity("");
      }
      if (
        valorClave.length < 8 ||
        valorClave.length > 16 ||
        !patternClave.test(valorClave)
      ) {
        claveUsu.setCustomValidity(
          "La contraseña ingresada debe ser de 4 a 12 digitos e incluir un numero"
        );
      } else {
        claveUsu.setCustomValidity("");
      };
})


function uuidv4() {
  return crypto.randomUUID();
};

formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const valorNombreApellido = nombreApellido.value;
  const valorUsername = username.value;
  const valorMail = mailUsu.value;
  const valorClave = claveUsu.value;
  const patternNombre = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
  const patternUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
  const patternMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const patternClave = /^.{8,12}$/;
  const id = uuidv4();
  let usuario = {id: id, nombreApellido: valorNombreApellido, username: valorUsername, mailUsu: valorMail };


  if (
    valorNombreApellido.length > 3 &&
    valorNombreApellido.length < 41 &&
    patternNombre.test(valorNombreApellido) &&
    valorUsername.length > 3 &&
    valorUsername.length < 17 &&
    patternUsuario.test(valorUsername) &&
    patternMail.test(valorMail) &&
    patternClave.test(valorClave)
  ) {
    usuario = {id: id, nombreApellido: valorNombreApellido, username: valorUsername, mailUsu: valorMail };
    usuarios.push(usuario);
    // localStorage.setItem("usuarios", JSON.stringify(usuarios));

    formRegistro.reset();
    confirmacionForm();
    console.log(usuario);
  }
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
});