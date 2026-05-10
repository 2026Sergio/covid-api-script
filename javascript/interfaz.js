export async function abrirDetalleLento(pais) {
    const modal = document.getElementById("idModal");
    const detalle = document.getElementById("idDetallePais");

    modal.style.display = "block";
    detalle.innerHTML = "<h3>Cargando información...</h3>";
    await new Promise(res => setTimeout(res, 2000));

    detalle.innerHTML = `
        <img src="${pais.countryInfo.flag}" width="120">
        <h2>${pais.country}</h2>
        <p>Casos: ${pais.cases.toLocaleString()}</p>
        <p>Muertes: ${pais.deaths.toLocaleString()}</p>
    `;
}

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