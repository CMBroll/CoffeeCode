const formRegistro = document.getElementById('formRegistro')
const nombreApellido = document.getElementById('nombreApellido')
const username = document.getElementById('username')
const mailUsu = document.getElementById('mailUsu')
const claveUsu = document.getElementById('claveUsu')
const botonSubmit = document.getElementById('botonSubmit')

const admin = {
        nombreApellido: "admin",
        username: "admin123",
        mailUsu: "admin123@admin.com",
        claveUsu: "admin1234"
}

const confirmacionForm = () =>{
    Swal.fire({
        title: 'Listo!',
        text: 'Usuario registrado con exito!',
        icon: 'success',
        heightAuto: 'false'}
      )
}

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
arrayUsuarios[0] = admin;
localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));

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
  let usuario = {id: id, nombre: valorNombreApellido, username: valorUsername, mail: valorMail };

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
    usuario = {id: id, nombre: valorNombreApellido, username: valorUsername, mail: valorMail };
    arrayUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));

    formRegistro.reset();
    confirmacionForm();
    console.log(usuario);
  }
});