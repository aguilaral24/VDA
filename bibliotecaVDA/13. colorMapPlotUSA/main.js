
import { initViewport, drawText, drawHeatMap } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Obtención de polígonos para dibujar
  const canvasPadding = 50;
  const mapDataFile = "/data/usaStates_simple.geojson"

  // Parámetros para el heatMap
  const canvas = document.getElementById(canvasId);
  const csvFilePath = '/data/colorMap_USA.csv';
  //const variableName = 'urbanizacion'; // Nombre de la columna en el CSV
  //const variableName = 'poblacion'; // Nombre de la columna en el CSV
  const variableName = 'temperatura'; // Nombre de la columna en el CSV
  const stateNameProperty = "name" //nombre de la propiedad en el archivo geojson
  const linkNameProperty = "nombre" //nombre de la columna con la que se comparará el stateNameProperty 
  let infoColumnNames = ["nombre", "temperatura", "poblacion", "urbanizacion"];

  drawHeatMap(canvas, canvasPadding, mapDataFile, csvFilePath, variableName, "red", stateNameProperty, linkNameProperty, infoColumnNames);

  const xPos =  width/2 - 4.5*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown";
  const xPosSubtitle = width/2 - 4.8*canvasPadding ;
  const yPosSubtitle = height - 1.8*canvasPadding;
  const subtitleSize = 15;

  drawText(context,"Estados Unidos de Norteamérica", xPos, yPos, titleSize ,titleColor,- 0);
  drawText(context,"(El degradado de color indica el nivel de temperatura en cada estado)", xPosSubtitle, yPosSubtitle, subtitleSize ,titleColor,- 0);


});
