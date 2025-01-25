export const config = {
    canvas: {
      map: 'mapCanvas',
      bubble: 'bubbleCanvas',
      reference: 'bubbleColorReferenceCanvas',
      width: 1500,
      height: 900,
    },
    mapDataFile: '../../../data/states.geojson',
    csvFilePath: '../../../data/incendios.csv',
    canvasPadding: 50,
    bubbleParams: {
      longitude: 'Longitud',
      latitude: 'Latitud',
      size: 'Total_hectareas',
      minSize: 3,
      maxSize: 60,
      defaultYear: 2015,
    },
    infoColumns: ['Longitud', 'Latitud', 'Total_hectareas', 'Deteccion', 'Duracion', 'Tipo_impacto', 'Tipo_incendio'],
    colorMapping: [
      { color: 'rgba(237, 209, 48, 0.5)', texto: 'Impacto mínimo', tipo: 'fill' },
      { color: 'rgba(249, 152, 7, 0.65)', texto: 'Impacto moderado', tipo: 'fill' },
      { color: 'rgba(255, 3, 58, 0.5)', texto: 'Impacto severo', tipo: 'fill' },
      { color: 'rgb(255, 255, 255)', texto: 'Otro', tipo: 'stroke' },
      { color: 'rgba(0, 255, 210, 1)', texto: 'Subterráneo', tipo: 'stroke' },
      { color: 'rgb(133, 0, 184)', texto: 'De copa', tipo: 'stroke' },
      { color: 'rgba(237, 225, 48, 1)', texto: 'Superficial', tipo: 'stroke' },
      { color: 'rgba(199, 0, 57, 1)', texto: 'Mixto', tipo: 'stroke' },
    ],
    colorColumns: {
      fill: 'Tipo_impacto',
      ring: 'Tipo_incendio',
    },
  };
  