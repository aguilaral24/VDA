
import { initViewport, drawBarPlot, drawText, loadCSV } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Carga de datos desde CSV
  const filePath  = "/data/perros.csv";
  const data = await loadCSV(filePath);

  //Parametros para la gráfica
  const canvas = document.getElementById("miCanvas");
  const xColumnName = "raza"
  const canvasPadding = 50;

  drawBarPlot(canvas, context, filePath, xColumnName, canvasPadding);

  const xPosTitle =  width/2 - 9*canvasPadding ;
  const yPosTitle = height - canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"

  drawText(context,"número de perros recibidos en una veterinaria clasificados por raza", xPosTitle, yPosTitle, titleSize ,titleColor,- 0)

});
