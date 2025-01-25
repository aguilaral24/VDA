
import { initViewport, drawDotPlot, drawText, loadCSV } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Carga de datos desde CSV
  const filePath  = "/data/salarios.csv";
  const data = await loadCSV(filePath);

  //Parametros para la gráfica
  const canvas = document.getElementById("miCanvas");
  const xColumnName = "anios_estudio";
  const yColumnName = "sueldo_mensual";
  let infoColumnNames = [xColumnName, yColumnName, "edad"]
  const color = "darkcyan"
  const filledCircles = false;
  const pointRadius = 5;
  const canvasPadding = 50;

  //Parametros para los ejes
  const axesProperties = {
    xPos: 0,
    yPos: 0,
    xLabelSpace: 20,
    yLabelSpace: -10,
    xLabelTextAngle: 55,
    color: "black",
    xAxeType: 0.5,
    yAxeType: 500 
  };

  drawDotPlot(canvas, context, filePath, xColumnName,yColumnName, infoColumnNames, color, filledCircles, pointRadius, canvasPadding,axesProperties);

  const xPos =  width/2 - 6*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  drawText(context,"años de estudio y salario mensual obtenido", xPos, yPos, titleSize ,titleColor,- 0)

  //Parametros para el eje X
  /*let xValues = data.map(row => row[xColumnName]);
  const xPos = 0;
  const yPos = 0;
  const labelSpace = 20;
  const color2 = "black";
  drawXAxisFromArray(context, xValues , xPos, yPos, color2, labelSpace,canvasPadding);*/

  //Parametros para dibujar eje Y
  /*let yValues = data.map(row => row[yColumnName]);
  const yPosition = 0;
  const XPosition = 0;
  const labelSpace2 = -10;
  
  // Llamar a la función para dibujar el eje Y
  drawYAxisFromArray(context, yValues, XPosition, yPosition, color2, labelSpace2,canvasPadding);*/

});
