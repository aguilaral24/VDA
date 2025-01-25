
import { drawInteractiveBubbleMapPlot } from '../../../vda.js';

export function drawBubblesWithLoading(data, selectedYear, contexts, bbox, config, checkboxState = {}) {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
      drawInteractiveBubbleMapPlot(
        document.getElementById(config.canvas.bubble),
        contexts.bubble,
        bbox,
        data,
        config.bubbleParams.longitude,
        config.bubbleParams.latitude,
        config.bubbleParams.size,
        config.bubbleParams.minSize,
        config.bubbleParams.maxSize,
        config.infoColumns,
        config.colorMapping,
        config.colorColumns.fill,
        config.colorColumns.ring,
        config.canvasPadding,
        selectedYear,
        checkboxState
      );
      document.getElementById('loading').style.display = 'none';
    }, 0);
  }
  