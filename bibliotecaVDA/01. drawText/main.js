import { initViewport, drawText } from '../vda.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // Llamamos a la función initViewPort de la biblioteca vda.js 
  const width = 1150;
  const height = 10000;
  const context = initViewport('miCanvas', width, height);

  const title = "Título de ejemplo";
  const canvasPadding = 50;
  const angleText = 0;
  const size = 50;
  const color = "darkcyan" ;
  drawText(context,title, width/2 + canvasPadding ,height - canvasPadding, size ,color,- angleText)

});
