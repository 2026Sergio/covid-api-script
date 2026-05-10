import { obtenerDatosCovid } from './datos.js';
import { pintarEnPantalla } from './interfaz.js';
import { buscarPais } from './buscador.js'; 

let listaPaisesBase = [];
const inputBusqueda = document.getElementById("idEntradaBusqueda");


obtenerDatosCovid().then(data => {
    if (data) {
        listaPaisesBase = data; 
        pintarEnPantalla(data);
        console.log(listaPaisesBase);
    }
});
inputBusqueda.addEventListener('input', (e) => {
    const valor = e.target.value;
    const filtrados = buscarPais(listaPaisesBase, valor);
    pintarEnPantalla(filtrados);
});