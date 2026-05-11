// Este archivo se encarga de obtener los datos de COVID-19 desde la API externa.
export function obtenerDatosCovid() {
    return fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json()) 
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error en la petición:", error);
        });
}