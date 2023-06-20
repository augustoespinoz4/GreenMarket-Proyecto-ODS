function mostrarFormularioCompra() {
    var modalCompra = document.getElementById('modalCompra');
    modalCompra.style.display = 'block';
}

function hideModal() {
    var modalCompra = document.getElementById('modalCompra');
    modalCompra.style.display = 'none';
}

function realizarPago() {
    var nombreApellido = document.getElementById('nombreApellido').value;
    var numeroPago = document.getElementById('numeroPago').value;
    var precioProducto = parseFloat(document.getElementById('precio-producto').textContent);

    if (nombreApellido.trim() === '') {
        alert('Por favor, ingrese su nombre y apellido.');
        return;
    }

    if (numeroPago.trim() === '') {
        alert('Por favor, ingrese el número de pago.');
        return;
    }

    if (parseFloat(numeroPago) !== precioProducto) {
        alert('El número de pago ingresado no coincide con el precio del producto.');
        return;
    }

    hideModal();
    alert('Gracias por su compra.');
}