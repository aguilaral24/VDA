import { initViewport, drawXAxis } from '../vda.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvasId = 'miCanvas';
  const width = 1550;
  const height = 950;
  const context = initViewport(canvasId, width, height);

  // Configuración para el eje X 
  const startX = 0;
  const endX = 1400;
  const step = 50;
  const xPosition = 50;
  const yPosition = 50;
  const color = 'black';
  const labelSpace = 20;

  drawXAxis(context, startX, endX, xPosition,yPosition, step, color, labelSpace);
});
