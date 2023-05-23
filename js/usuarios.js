
let usuarios = [];

const listaUsuarios = document.getElementById('listaUsu');
const agregarUsuario = document.getElementById('formRegistro');
const nombreUsuario = document.getElementById('nombreUsu');
const apellidoUsuario = document.getElementById('apellidoUsu')
const mailUsuario = document.getElementById('mailUsu');
const claveUsuario = document.getElementById('claveUsu')
const crearUsuario = document.getElementById('crearUsu');
const parrafoNombre = document.querySelector('.parrafoNombre')
const parrafoUsuario = document.querySelector('.parrafoUsuario')
const parrafoMail = document.querySelector('.parrafoMail')
const parrafoClave = document.querySelector('.parrafoClave')

const inputs = document.querySelectorAll('#formRegistro input')

const admin = {
    nombreUsu: "admin",
    apellidoUsu: "admin123",
    mailUsu: "admin123@admin.com",
    claveUsu: "admin1234"
}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombreUsuario: false,
    apellidoUsuario: false,
    claveUsuario: false,
    mailUsuario: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                campos[nombreUsuario]
                parrafoNombre.textContent = "parrafo correcto"
            }else if(nombreUsuario.value === ""){
                parrafoNombre.textContent = "ingrese";
            }else{
                parrafoNombre.textContent = "parrafo incorrcto";
            }
            break;
        case "apellido":
             if(expresiones.usuario.test(e.target.value)){
                campos[apellidoUsuario]
                parrafoUsuario.textContent = "parrafo correcto"
            }else if(apellidoUsuario.value === ""){
                parrafoUsuario.textContent = "ingrese";
            }else{
                parrafoUsuario.textContent = "parrafo incorrcto"
            }
            break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                campos[mailUsuario]
                parrafoMail.textContent = "parrafo correcto"
            }else if(mailUsuario.value === ""){
                parrafoMail.textContent = "ingrese";
            }else{
                parrafoMail.textContent = "parrafo incorrcto"
            }
            break;
        case "contrasena":
            if(expresiones.password.test(e.target.value)){
                campos[claveUsuario]
                parrafoClave.textContent = "parrafo correcto"
            }else if(claveUsuario.value === ""){
                parrafoClave.textContent = "ingrese";
            }else{
                parrafoClave.textContent = "parrafo incorrcto"
            }
            break;
        }
    
}
/*
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario) 
}) 
crearUsuario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (campos.nombre && campos.usuario && campos.correo && campos.password){
        formRegistro.reset();
    }
})
*/

function uuidv4() {
    return crypto.randomUUID();
  };

  inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});



//crearUsuario.addEventListener('click', (e) => {
    //e.preventDefault();
const enviarFormulario = () =>{
    const nombre = nombreUsuario.value;
    const apellido = apellidoUsuario.value;
    const mail = mailUsuario.value;
    const clave = claveUsuario.value;
    const mode = agregarUsuario.dataset.mode;
    
    if (mode === "add" && nombre !== ""  && apellido !== ""  && mail !== "" && clave !== ""){
        const id = uuidv4();
        const usuario = {id, nombre, apellido, mail};
        usuarios.push(usuario);
    } else if (mode === "delete"){
        const index = usuarios.find((usuario) => usuario.id === id);
        if (index !== -1){
        usuarios.splice(index, 1);
        }
    }
    //agregarUsuario.reset();
    agregarUsuario.dataset.mode = "add";
    mostrarUsuarios();
};

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
    
/*
const validar = () => {
    if(nombreUsuario.value === "" || apellidoUsuario.value === "" || mailUsuario.value === "" || claveUsuario.value === ""){
        alert("El campo esta vacio");
        return false;
    }else if (nombreUsuario.value.length >20 || apellidoUsuario.value.length >20){
        alert("muy largo");
        return false;
    }else if(mailUsuario.value.length >50 || ){
        alert("muy largo");
        return false;
    }
};

formRegistro.addEventListener('click', (e) =>{
    e.preventDefault();
    
    const validar = () =>{
        const nombreValor = nombreUsuario.value;
        const apellidoValor = apellidoUsuario.value;
        const mailValor = mailUsuario.value;
        const claveValor = claveUsuario.value;
   
        if (nombreValor === ""){
            alert("campo vacio")
            noValido(nombreValor, "campo vacio");
        }else{
            esValido(nombreValor);
        }
    }
    validar();
})

const noValido = (input, mensaje) =>{
    const formControl = input.parentElement;
    const aviso = formControl.querySelector(".parrafo");
    aviso.innerText = mensaje;

    
}

const esValido = (input, mensaje) =>{
    const formControl = input.parentElement;


}


const validar = () =>{
    const nombreValor = nombreUsuario.value;
    const apellidoValor = apellidoUsuario.value;
    const mailValor = mailUsuario.value;
    const claveValor = claveUsuario.value;

    if (nombreValor === ""){
        alert("campo vacio")
        noValido(nombreValor, "campo vacio");
    }else{
        esValido(nombreValor);
    }
}
*/