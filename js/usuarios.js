

let usuarios = [];

const listaUsuarios = document.getElementById('listaUsuarios');
const agregarUsuario = document.getElementById('form-registro');
const nombreUsuario = document.getElementById('nombre');
const apellidoUsuario = document.getElementById('apellido')
const mailUsuario = document.getElementById('email');
const claveUsuario = document.getElementById('contrasena')
const crearUsuario = document.getElementById('crear-usuario');
const parrafoNombre = document.querySelector('.parrafoNombre')
const parrafoUsuario = document.querySelector('.parrafoUsuario')
const parrafoMail = document.querySelector('.parrafoMail')
const parrafoClave = document.querySelector('.parrafoClave')

const inputs = document.querySelectorAll('#formRegistro input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
  nombreUsuario: false,
  apellidoUsuario: false,
  claveUsuario: false,
  mailUsuario: false
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        campos['nombreUsuario'] = true;
        parrafoNombre.textContent = "Párrafo correcto";
      } else {
        campos['nombreUsuario'] = false;
        parrafoNombre.textContent = "Párrafo incorrecto";
      }
      break;
    case "apellido":
      if (expresiones.usuario.test(e.target.value)) {
        campos['apellidoUsuario'] = true;
        parrafoUsuario.textContent = "Párrafo correcto";
      } else {
        campos['apellidoUsuario'] = false;
        parrafoUsuario.textContent = "Párrafo incorrecto";
      }
      break;
    case "email":
      if (expresiones.correo.test(e.target.value)) {
        campos['mailUsuario'] = true;
        parrafoMail.textContent = "Párrafo correcto";
      } else {
        campos['mailUsuario'] = false;
        parrafoMail.textContent = "Párrafo incorrecto";
      }
      break;
    case "contrasena":
      if (expresiones.password.test(e.target.value)) {
        campos['claveUsuario'] = true;
        parrafoClave.textContent = "Párrafo correcto";
      } else {
        campos['claveUsuario'] = false;
        parrafoClave.textContent = "Párrafo incorrecto";
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

function uuidv4() {
    return crypto.randomUUID();
  };
  // const admin = {
  //   id: "000",
  //   nombre: "Coco",
  //   apellido: "admin",
  //   mail: "admin@coco.com",
  //   clave: "AdminCoco",
  //   mode: "add"
  // };
  // usuarios.push(usuario);
const enviarFormulario = () => {
    const nombre = nombreUsuario.value;
    const apellido = apellidoUsuario.value;
    const mail = mailUsuario.value;
    const clave = claveUsuario.value;
    const mode = agregarUsuario.dataset.mode;
  
    if (mode === "add" && nombre !== "" && apellido !== "" && mail !== "" && clave !== "") {
      const id = uuidv4();
      const usuario = { id, nombre, apellido, mail, clave};
      usuarios.push(usuario);
    } else if (mode === "delete") {
      const id = agregarUsuario.dataset.id;
      const index = usuarios.findIndex((usuario) => usuario.id === id);
      if (index !== -1) {
        usuarios.splice(index, 1);
      }
    }
  
    agregarUsuario.reset();
    agregarUsuario.dataset.mode = "add";
    mostrarUsuarios();
};
  

crearUsuario.addEventListener('click', enviarFormulario);
console.log("Usuario creado")
listaUsuarios.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index !== -1) {
      usuarios.splice(index, 1);
      mostrarUsuarios();
    }
  }
});

const mostrarUsuarios = () => {
  listaUsuarios.querySelector("tbody").innerHTML = "";
  usuarios.forEach((usuario) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.mail}</td>
      <td>
        <button class="btn btn-danger delete" data-id="${usuario.id}">Eliminar</button>
      </td>
    `;
    listaUsuarios.querySelector("tbody").appendChild(tr);
  });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
if (usuariosLocalStorage) {
  usuarios = usuariosLocalStorage;
  mostrarUsuarios();
};