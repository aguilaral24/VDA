
import { initViewport, drawBubblePlot, drawText, loadCSV } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Carga de datos desde CSV
  const filePath  = "/data/libros.csv";
  const data = await loadCSV(filePath);

  //Parametros para la gráfica
  const canvas = document.getElementById("miCanvas");
  const xColumnName = "precio";
  const yColumnName = "paginas";
  const zColumnName = "popularidad";
  let infoColumnNames = [xColumnName, yColumnName, zColumnName];
  const minSize = 5;
  const maxSize = 30;
  const transparence = 0.5;
  const color = 'rgba(0, 25, 215, 0.7)';
  const canvasPadding = 50;

    //Parametros para los ejes
    const axesProperties = {
      xPos: 0,
      yPos: 0,
      xLabelSpace: 20,
      yLabelSpace: -10,
      xLabelTextAngle: 0,
      color: "black",
      xAxeType: -1,
      yAxeType: -1 
    };

  drawBubblePlot(canvas, context, filePath, xColumnName,yColumnName, zColumnName, minSize, maxSize, infoColumnNames,  color, canvasPadding,axesProperties);

  
  const xPosTitle =  width/2 - 5*canvasPadding ;
  const yPosTitle = height - canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  const xPosSubtitle = width/2 - 4*canvasPadding ;
  const yPosSubtitle = height - 2*canvasPadding;
  const subtitleSize = 15;

  drawText(context,"Libros: precio vs número de páginas", xPosTitle, yPosTitle, titleSize ,titleColor,- 0)
  drawText(context,"(El tamaño de burbuja equivale a la popularidad del libro)", xPosSubtitle, yPosSubtitle, subtitleSize ,titleColor,- 0)


});
