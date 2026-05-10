import { obtenerDatosCovid } from './datos.js';

let listaPaisesBase = [];

const contenedor = document.getElementById("idContenedorResultados");
obtenerDatosCovid().then(data => {
    if (data) {
        listaPaisesBase = data; 
        console.log(listaPaisesBase);
    }
});