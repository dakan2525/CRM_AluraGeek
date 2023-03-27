function mostrarBarra() {
    var barra = document.getElementById("cabecera__busqueda");
    // var logo = document.getElementById("prueba_ocultar");
    var boton = document.getElementById("ocultar_prueba");

    if (barra.classList.contains("oculto")) {
        barra.classList.remove("oculto");
        // logo.classList.add("oculto");
        boton.classList.add("oculto");
    } else {
        barra.classList.add("oculto");
        // logo.classList.remove("oculto");
        boton.classList.remove("oculto");
    }
}

