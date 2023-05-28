function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var emailInput = document.getElementById("InputEmail");
    var nombreInput = document.getElementById("InputNombre");
    var mensajeInput = document.getElementById("Textarea1");

    // Validación de correo electrónico
    var emailPattern = new RegExp(emailInput.pattern);
    if (!emailPattern.test(emailInput.value)) {
        alert("Ingrese una dirección de correo electrónico válida.");
        return;
    }

    // Validación de nombre
    var nombrePattern = new RegExp(nombreInput.pattern);
    if (!nombrePattern.test(nombreInput.value)) {
        alert("Ingrese un nombre válido.");
        return;
    }

    // Validación de mensaje
    if (mensajeInput.value.trim() === "") {
        alert("Ingrese un mensaje.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario
    document.getElementById("myForm").submit();
}
