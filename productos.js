var elementosProductos = document.querySelectorAll('.sumar-restar');

elementosProductos.forEach(function(elemento) {
    var contenidoId = elemento.dataset.contenidoId;
    var buttonplusId = elemento.dataset.buttonplusId;
    var buttonminusId = elemento.dataset.buttonminusId;
    manejarContador(contenidoId, buttonplusId, buttonminusId);
});


function manejarContador(contenidoId, buttonplusId, buttonminusId) {
    var contador = 0;
    var divContenido = document.getElementById(contenidoId);
    divContenido.textContent = contador;

    var buttonplus = document.querySelector('[data-buttonplus-id="' + buttonplusId + '"]');
    buttonplus.addEventListener('click', function() {
        contador++;
        divContenido.textContent = contador;
    });

    var buttonminus = document.querySelector('[data-buttonminus-id="' + buttonminusId + '"]');
    buttonminus.addEventListener('click', function() {
        if (contador > 0) {
            contador--;
            divContenido.textContent = contador;
        }
    });
}
