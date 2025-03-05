import { createTree } from '../../vda.js';

export function setupListeners(data, yearColumnName, classColumnName, treeCanvasId, flowersCanvasId) {
    const yearSlider = document.getElementById("year-slider");
    const accumulativeCheck = document.getElementById("acum_check");

    //Cada vez que cambien los filtros se enviarán para construir un nuevo árbol
    yearSlider.addEventListener('input', sendFilters);
    accumulativeCheck.addEventListener('change', sendFilters);

    function sendFilters() {
      // Obtener el valor del año seleccionado
      const value = (yearSlider.value - yearSlider.min) / (yearSlider.max - yearSlider.min) * 100;
      
      // Verificar si el checkbox "acumulativo" está marcado
      if (accumulativeCheck.checked) {
        // Si está marcado, poner el relleno con un gradiente basado en el valor del slider
        yearSlider.style.background = `linear-gradient(to right, transparent 0%, cyan ${value}%, transparent ${value}%, transparent 100%)`;
      } else {
        // Si no está marcado, quitar el relleno (dejar fondo simple)
        yearSlider.style.background = 'none';
      }

      // Obtener el valor del año seleccionado y si es acumulativo
      const selectedYear = parseInt(yearSlider.value, 10);
      const isAccumulative = accumulativeCheck.checked;

      createTree(data, yearColumnName, classColumnName, selectedYear, isAccumulative, treeCanvasId, flowersCanvasId);
    }
}
