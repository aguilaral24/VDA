
import { initViewport, drawTimeSeries, drawText, loadCSV } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {

  //Init ViewPort
  const canvasId = 'miCanvas';
  const width = 1500;
  const height = 900;
  const context = initViewport(canvasId, width, height);

  //Carga de datos desde CSV
  const filePath  = "/data/time_series_100.csv";
  const data = await loadCSV(filePath);

  //Parametros para la gráfica
  const canvas = document.getElementById("miCanvas");
  const xColumnName = "date";
  const yColumnName = "value";
  let infoColumnNames = [xColumnName, yColumnName];
  const color = "darkcyan";
  const filledCircles = true;
  const pointRadius = 10;
  const lineWidth = 1;
  const canvasPadding = 50;

  //Parametros para los ejes
  const axesProperties = {
    xPos: 0,
    yPos: 0,
    xLabelSpace: 2,
    yLabelSpace: -10,
    xLabelTextAngle: 60,
    color: "black",
    xAxeType: -1,
    yAxeType: -1 
  };

  //Eventos definidos para la serie de tiempo
  const events = [
    { startDate: '2023-01-13', endDate: '2023-02-10', title: 'Este es el Título evento 2', desc: 'Descripción evento2', color: 'rgba(20, 0, 20, 0.3)' },
    { startDate: '2023-03-01', endDate: '2023-03-15', title: 'Título evento 1', desc: 'Descripción 1', color: 'rgba(105, 0, 123, 0.2)' },
    { startDate: '2023-04-03', endDate: '2023-04-03', title: 'Título evento 2', desc: 'Descripción 2', color: 'rgba(220, 0, 20, 0.3)' }
  ];
  
  // Lamada a la función para dibujar la serie de tiempo
  drawTimeSeries(canvas, context, filePath, xColumnName,yColumnName, infoColumnNames, color, filledCircles, pointRadius, lineWidth, canvasPadding, axesProperties,events);

  
  const xPos =  width/2 - 2*canvasPadding ;
  const yPos = height -canvasPadding;
  const titleSize = 30;
  const titleColor = "brown"
  drawText(context,"Serie de tiempo", xPos, yPos, titleSize ,titleColor,- 0)

});
