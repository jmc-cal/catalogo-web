function calcularPrecio() {
    let cantidad = Number(document.getElementById("cantidad").value)
    var valorUnitario = 390;
    var msg;

    if ( cantidad >= 12 ) {
        valorUnitario = 260;
    }

    let precio = cantidad * valorUnitario;

    if ( cantidad <= 0 ) {
        msg = "Costo";
    } else if ( cantidad > 1 && cantidad < 12 ) {
        msg = "Precio: $"+precio+" MX <br> Por "+cantidad+" zapatos";
    } else if ( cantidad >= 12 ){
        msg = "Precio mayoreo: $"+precio+" MX <br> Por "+cantidad+" zapatos";
    } else {
        msg = "Precio: $"+precio+" MX <br> Por "+cantidad+" zapato";
    }

    document.getElementById("precio").innerHTML = msg;
}
