// Este archivo maneja la interfaz de usuario: pinta las tarjetas de países en pantalla y abre el modal con detalles básicos.
export function pintarEnPantalla(lista, abrirDetalleLento) {
    const contenedor = document.getElementById("idContenedorResultados");
    let htmlFinal = "";

    lista.forEach(pais => {
        htmlFinal += `
            <article class="tarjeta-pais">
                <div class="bandera-contenedor">
                    <img src="${pais.countryInfo.flag}" alt="Bandera">
                </div>
                <div class="info-pais">
                    <h3>${pais.country}</h3>
                    <button class="accion-ver">Ver detalle</button>
                </div>
            </article>
        `;
    });
    contenedor.innerHTML = htmlFinal;

    if (typeof abrirDetalleLento !== 'function') return;
    const todosLosBotones = contenedor.querySelectorAll(".accion-ver");
    
    todosLosBotones.forEach((boton, posicion) => {
        boton.onclick = function() {
            const paisSeleccionado = lista[posicion];
            abrirDetalleLento(paisSeleccionado);
        };
    });
}