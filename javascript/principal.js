import { obtenerDatosCovid } from './datos.js';
import { pintarEnPantalla } from './interfaz.js';
import { buscarPais } from './buscador.js';
import { abrirDetalleLento } from './logica.js';

let listaPaisesBase = [];
const inputBusqueda = document.getElementById("idEntradaBusqueda");
const modal = document.getElementById("idModal");
const btnCerrar = document.getElementById("idCerrarModal");

obtenerDatosCovid().then(data => {
    if (data) {
        listaPaisesBase = data; 
        console.log("Datos cargados:", listaPaisesBase); 
        pintarEnPantalla(data, abrirDetalleLento);
    }
});

inputBusqueda.addEventListener('input', (e) => {
    const valor = e.target.value;
    const filtrados = buscarPais(listaPaisesBase, valor);
    pintarEnPantalla(filtrados, abrirDetalleLento);
});
btnCerrar.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};