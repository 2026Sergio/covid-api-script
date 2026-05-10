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