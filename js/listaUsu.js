import { usuarios } from "./usuarios";
const datos = new URLSearchParams(window.location.search)
const listaUsuarios = datos.get('listaUsu');
const nombreUsuario = datos.get('nombreUsu');
const apellidoUsuario =datos.get('apellidoUsu')
const mailUsuario = datos.get('mailUsu');
const claveUsuario = datos.get('claveUsu')

listaUsuarios.querySelector("tbody").innerHTML="";
    usuarios.forEach((usuario) =>{
        const tr = document.createElement("tr");
        tr.innerHTML=`
        <td>${nombreUsuario}</td>
        <td>${apellidoUsuario}</td>
        <td>${mailUsuario}</td>
        <td>
        <button class="btn btn-danger delete" data-id="${usuario.id}">Eliminar</button>
        </td>
        `;
        listaUsuarios.querySelector("tbody").appendChild(tr)
    })