export function obtenerDatosCovid() {
    return fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json()) 
        .then(data => {
            localStorage.setItem("paises", JSON.stringify(data));
            return data;
        })
        .catch(error => {
            console.error("Error en la petición:", error);
        });
}