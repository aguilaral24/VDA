import { drawText } from '../../../vda.js';

export function drawBubbleColorReference(context, textColor, colorMapping) {
  context.save();
  let [x, y] = [1030, 870];
  colorMapping.forEach(({ color, texto, tipo }) => {
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    if (tipo === 'fill') {
      context.fillStyle = color;
      context.fill();
    } else if (tipo === 'stroke') {
      context.lineWidth = 1.5;
      context.strokeStyle = color;
      context.stroke();
    }
    drawText(context, texto, x + 30, y, 10, textColor, 0);
    y -= 33;
  });
  context.restore();
}
