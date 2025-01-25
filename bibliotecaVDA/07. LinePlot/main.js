
import { initViewport, drawLinePlot, drawText, loadCSV } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Carga de datos desde CSV
  const filePath  = "/data/pesoEstatura.csv";
  const data = await loadCSV(filePath);

  //Parametros para la gráfica
  const canvas = document.getElementById("miCanvas");
  const xColumnName = "estatura";
  const yColumnName = "peso";
  let infoColumnNames = [xColumnName, yColumnName, "edad"];
  const color = "darkcyan";
  const filledCircles = true;
  const pointRadius = 10;
  const lineWidth = 1;
  const canvasPadding = 50;

  //Parametros para los ejes
  const axesProperties = {
    xPos: 0,
    yPos: 0,
    xLabelSpace: 20,
    yLabelSpace: -10,
    xLabelTextAngle: 20,
    color: "black",
    xAxeType: 0,
    yAxeType: 0 
  };

  drawLinePlot(canvas, context, filePath, xColumnName,yColumnName, infoColumnNames, color, filledCircles, pointRadius, lineWidth, canvasPadding, axesProperties);

  
  const xPos =  width/2 - 2*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  drawText(context,"estatura vs peso", xPos, yPos, titleSize ,titleColor,- 0)

});
