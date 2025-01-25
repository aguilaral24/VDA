import { initViewport, drawMap, loadCSV } from '../../../vda.js';
import { drawBubbleColorReference } from './bubbleReference.js';
import { setupListeners } from './listeners.js';
import { drawBubblesWithLoading } from './bubblePlot.js';
import { config } from './config.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contexts = {};
  for (const key in config.canvas) {
    if (key !== 'width' && key !== 'height') {
      contexts[key] = initViewport(config.canvas[key], config.canvas.width, config.canvas.height);
    }
  }

  const bbox = await drawMap(
    document.getElementById(config.canvas.map),
    config.canvasPadding,
    config.mapDataFile,
    'white',
    'black'
  );

  const data = await loadCSV(config.csvFilePath);

  drawBubblesWithLoading(data, config.bubbleParams.defaultYear, contexts, bbox, config);
  drawBubbleColorReference(contexts.reference, 'white', config.colorMapping);
  setupListeners(data, config, contexts, bbox);
});
