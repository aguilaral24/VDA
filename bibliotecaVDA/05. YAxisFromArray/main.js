import { initViewport, drawYAxisWithIntervals, loadCSV } from '../vda.js';

// Función principal para inicializar el canvas y dibujar el eje X
async function init() {
    
    const canvasId = 'miCanvas';
    const width = 1550;
    const height = 950;
    const context = initViewport(canvasId, width, height);

    //Carga de datos desde CSV
    const data = await loadCSV("/data/yAxisData.csv");
    const yColumnName = "y";
    let yValues = data.map(row => row[yColumnName]);

    //Parametros para dibujar eje Y
    const yPosition = 0;
    const XPosition = 0;
    const color = "black";
    const labelSpace = -10;
    const canvasPadding = 50;
    const interval = 0;
    
    // Llamar a la función para dibujar el eje Y
    drawYAxisWithIntervals(context, yValues , XPosition, yPosition, color, labelSpace, canvasPadding, interval);

}

// Llama a la función principal para inicializar todo
init();
