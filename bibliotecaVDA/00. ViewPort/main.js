import { initViewport } from '../vda.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // Llamamos a la función initViewPort de la biblioteca vda.js 
  const width = 1000;
  const height = 1000;
  const context = initViewport('miCanvas', width, height);

  // Dibujamos un rectángulo comenzando en el punto P(30,50) con ancho 2000 y altura 500, 
  // para verificar que el viewport funciona correctamente
  context.fillStyle = 'darkcyan';
  context.fillRect(30, 50, 2000, 500);
});
