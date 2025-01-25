import { initViewport, drawYAxis } from '../vda.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvasId = 'miCanvas';
  const width = 1550;
  const height = 950;
  const context = initViewport(canvasId, width, height);

  // Configuración para el eje X 
  const startY = 0;
  const endY = 800;
  const step = 50;
  const xPosition = 50;
  const yPosition = 50;
  const color = 'black';
  const labelSpace = 30;

  drawYAxis(context, startY, endY, xPosition, yPosition, step, color, labelSpace);
});
