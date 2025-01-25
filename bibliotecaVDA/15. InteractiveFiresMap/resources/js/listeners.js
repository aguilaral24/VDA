import { drawBubblesWithLoading } from './bubblePlot.js';

export function setupListeners(data, config, contexts, bbox) {
  const yearSlider = document.getElementById('yearSlider');
  const checkboxes = document.querySelectorAll('.Impactcheck');

  let selectedYear = config.bubbleParams.defaultYear;
  const checkboxState = { minimo: false, moderado: false, severo: false };

  yearSlider.addEventListener('change', () => {
    selectedYear = yearSlider.value;
    sendFilters();
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      checkboxState[checkbox.id] = checkbox.checked;
      sendFilters();
    });
  });

  function sendFilters() {
    drawBubblesWithLoading(data, selectedYear, contexts, bbox, config, checkboxState);
  }
}
