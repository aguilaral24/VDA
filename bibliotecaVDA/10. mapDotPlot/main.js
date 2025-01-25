
import { initViewport, drawText, drawMapDotPlot } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  const canvas = document.getElementById(canvasId);
  const canvasPadding = 50;
  const mapDataFile = "/data/states.geojson"

  //Carga de datos desde CSV
  const filePath  = "/data/puntos_mapa.csv";

  //Parametros para la gráfica
  const longitudeColumnName = "longitud"
  const latitudeColumnName = "latitud";
  let infoColumnNames = [longitudeColumnName, latitudeColumnName, "name"]
  const color = "darkcyan"
  const filledCircles = true;
  const pointRadius = 7;

  drawMapDotPlot(canvas, context, mapDataFile, filePath, longitudeColumnName, latitudeColumnName, infoColumnNames, color, filledCircles, pointRadius, canvasPadding)

  const xPos =  width/2 - 8*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  drawText(context,"Algunas ciudades de México y sus localización geográfica", xPos, yPos, titleSize ,titleColor,- 0)

});
