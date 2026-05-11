// Este archivo contiene la lógica de búsqueda y filtrado de países por nombre.
export const buscarPais = (lista, texto) => {
    const busqueda = texto.toLowerCase().trim();
    if (busqueda === "") return lista;
    return lista.filter(pais => 
        pais.country.toLowerCase().includes(busqueda)
    );
};