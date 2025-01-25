
import { initViewport, drawText, drawMapBubblePlot } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  const canvas = document.getElementById(canvasId);
  const canvasPadding = 50;
  const mapDataFile = "/data/states.geojson";

  //Carga de datos desde CSV
  const csvFilePath  = "/data/bubbles_mapa.csv";

  //Parametros para la gráfica
  const longitudeColumnName = "longitud";
  const latitudeColumnName = "latitud";
  const sizeColumnName = "poblacion";
  const minSizeBubble = 2;
  const maxSizeBubble = 50;
  let infoColumnNames = [longitudeColumnName, latitudeColumnName, "name" , "poblacion"];
  const color = "darkcyan";

  drawMapBubblePlot(canvas, context, mapDataFile, csvFilePath, longitudeColumnName, latitudeColumnName, sizeColumnName,minSizeBubble, maxSizeBubble, infoColumnNames, color, canvasPadding)

  const xPos =  width/2 - 8*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  const xPosSubtitle = width/2 - 3.5*canvasPadding ;
  const yPosSubtitle = height - 2*canvasPadding;
  const subtitleSize = 15;

  drawText(context,"Algunas ciudades de méxico y su localización geográfica", xPos, yPos, titleSize ,titleColor,- 0)
  drawText(context,"(El tamaño de burbuja equivale al número de habitantes)", xPosSubtitle, yPosSubtitle, subtitleSize ,titleColor,- 0)

});
