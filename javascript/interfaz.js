
export function pintarEnPantalla(lista) {

    const contenedor = document.getElementById("idContenedorResultados");

    let htmlFinal = "";

    lista.forEach(pais => {

        htmlFinal += `
            <article class="tarjeta-pais">
                
                <div class="bandera-contenedor">
                    <img src="${pais.countryInfo.flag}" alt="Bandera de ${pais.country}">
                </div>

                <div class="info-pais">
                    <h3>${pais.country}</h3>
                    
                    <button class="btn-ver">Ver detalle</button>
                </div>

            </article>
        `;
    });

    contenedor.innerHTML = htmlFinal;
}