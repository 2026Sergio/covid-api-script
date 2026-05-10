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

export function pintarEnPantalla(lista) {
    const contenedor = document.getElementById("idContenedorResultados");
    let html = "";

    lista.forEach(p => {
        html += `
            <div class="tarjeta-pais">
                <img src="${p.countryInfo.flag}">
                <p>${p.country}</p>
            </div>`;
    });

    contenedor.innerHTML = html;
}