
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputContrasena = document.getElementById("contrasena");
const form = document.querySelector("form");
const crearUsuario = document.getElementById('crear-usuario');
const listaUsuarios = document.getElementById('listaUsuarios');
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
let usuarios = [];
const admin = {
    id: "000",
    nombre: "Coco",
    apellido: "admin",
    mail: "admin@coco.com",
    clave: "AdminCoco",
};
usuarios.push(admin);
localStorage.setItem("usuarios", JSON.stringify(usuarios));

const enviarFormulario = () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const mail = inputEmail.value;
    const clave = inputContrasena.value;
    const mode = form.dataset.mode;

    if (mode === "add" && nombre !== "" && apellido !== "" && mail !== "" && clave !== "") {
        const id = uuidv4();
        const usuario = { id, nombre, apellido, mail, clave };
        usuarios.push(usuario);
    } else if (mode === "delete") {
        const id = form.dataset.id;
        const index = usuarios.findIndex((usuario) => usuario.id === id);
        if (index !== -1) {
            usuarios.splice(index, 1);
        }
    }

    form.reset();
    form.dataset.mode = "add";
    guardarUsuariosEnLocalStorage();
};

const guardarUsuariosEnLocalStorage = () => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

crearUsuario.addEventListener('click', enviarFormulario);
console.log("Usuario creado")
const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
if (usuariosLocalStorage) {
    usuarios = usuariosLocalStorage;
}
