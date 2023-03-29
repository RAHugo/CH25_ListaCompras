// El código va aquí -> 
/* Creación de variables */
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

/* Boton de limpiar */
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";
});

/* Boton de agregar */
btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display ="none";
    let lista = "Los siguientes campos deben ser llenados correctamente:</ul>"
    if (txtNombre.value.length == 0) {
        txtNombre.style.border = "solid thin red";/* thin es tipo de borde */
        lista += "<li>Se debe escribir un nombre válido</li>"
        /*alertValidacionesTexto.innerHTML="Se debe escribir un nombre valido"; */
        alertValidacionesTexto.style.display = "block";
    } else {
        txtNombre.style.border = "";
    }

    if (txtNumber.value.length == 0) {
        txtNumber.style.border = "solid thin red";
        lista += "<li>Se debe escribir un número válido</li>"
        /*         alertValidaciones.innerHTML="Se debe escribir un número valido"; */
        alertValidaciones.style.display = "block";
    } else {
        txtNumber.style.border = "";
    }
    lista += "</ul>";
    alertValidaciones.insertAdjacentHTML("beforeend", lista);
});

/* Boton para salirse del foto */
txtNumber.addEventListener("blur", function (event) {/* Se sale del campo con blur */
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});

txtNombre.addEventListener("blur", function (event) {/* Se sale del campo con blur */
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});
