
let usuarios = [];

const listaUsuarios = document.getElementById('listaUsu');
const agregarUsuario = document.getElementById('formRegistro');
const nombreUsuario = document.getElementById('nombreUsu');
const apellidoUsuario = document.getElementById('apellidoUsu')
const mailUsuario = document.getElementById('mailUsu');
const crearUsuario = document.getElementById('crearUsu');

function uuidv4() {
    return crypto.randomUUID();
  }

crearUsuario.addEventListener('click', (e) => {
    e.preventDefault()

    const nombre = nombreUsuario.value;
    const apellido = apellidoUsuario.value;
    const mail = mailUsuario.value;
    const mode = agregarUsuario.dataset.mode;

    if (mode === "add"){
        const id = uuidv4();
        const usuario = {id, nombre, apellido, mail};
        usuarios.push(usuario)
    } else if (mode === "delete"){
       const index = usuarios.find((usuario) => usuario.id === id);
       if (index !== -1){
        usuarios.splice(index, 1);
       }
    }
    agregarUsuario.reset();
    agregarUsuario.dataset.mode = "add";
    mostrarUsuarios();
})

listaUsuarios.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")){
        const id = e.target.dataset.id;
        const index = usuarios.findIndex((usuario) => usuario.id === id);
        if (index !== -1){
            usuarios.splice(index, 1);
            mostrarUsuarios()
        }
    }
})

const mostrarUsuarios = () =>{
    listaUsuarios.querySelector("tbody").innerHTML="";
    usuarios.forEach((usuario) =>{
        const tr = document.createElement("tr");
        tr.innerHTML=`
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.mail}</td>
        <td>
        <button class="btn btn-danger delete" data-id="${usuario.id}">Eliminar</button>
        </td>
        `;
        listaUsuarios.querySelector("tbody").appendChild(tr)
    })
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
if (usuariosLocalStorage){
    usuarios = usuariosLocalStorage;
    mostrarUsuarios();
};