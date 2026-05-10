export const buscarPais = (lista, texto) => {
    const busqueda = texto.toLowerCase().trim();
    if (busqueda === "") return lista;
    return lista.filter(pais => 
        pais.country.toLowerCase().includes(busqueda)
    );
};