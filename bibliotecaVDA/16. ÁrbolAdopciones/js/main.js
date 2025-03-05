
import { loadCSV} from '../../vda.js';
import { setupListeners } from './listeners.js';

// Hacer la variable global anexándola a window
window.animationIDs = [];

document.addEventListener('DOMContentLoaded', async () => {

  //Init treeParams

  //Carga de datos desde CSV
  const filePath  = "../../data/adopciones.csv";
  const data = await loadCSV(filePath);

  //Nombres de las columnas para el año y el género
  const yearColumnName = "year";
  const classColumnName = "gender";

  //Canvas para el árbol y canvas para las flores
  const treeCanvasId = "arbol";
  const flowersCanvasId = "flores";

  //Enviamos los filtros para crear el árbol
  setupListeners(data, yearColumnName, classColumnName, treeCanvasId, flowersCanvasId);

});
