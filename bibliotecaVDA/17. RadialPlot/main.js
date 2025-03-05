import { initViewport, drawRadialTimeSeries, drawText, loadCSV, drawCircleLegend } from '../vda.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Configuración del canvas
    const canvasId = 'miCanvas';
    const width = 1500;
    const height = 900;
    const context = initViewport(canvasId, width, height);
    const canvas = document.getElementById(canvasId);

    // Archivos de datos
    const sleepDataPath = "/data/sleep_weekly.csv";
    const exerciseDataPath = "/data/exercise_weekly.csv";

    // Configuración de los datos
    const valueColumnName = "numero_de_horas";
    const weekColumnName = "semana";
    const infoColumnNames = [weekColumnName, valueColumnName];

    // Parámetros generales de la gráfica
    const chartConfig = {
        pointRadius: 2,
        canvasPadding: 50,
        maxValue: 70,
        minValue: 0
    };

    // Configuración específica para cada serie
    const sleepConfig = {
        color: "rgba(0, 139, 139, 0.7)", // Darkcyan con transparencia
        lineDivideFactor: 2,
        infoOverlay: "infoOverlay"
    };

    const exerciseConfig = {
        color: "rgba(111, 41, 78, 0.7)", // Violet con transparencia
        lineDivideFactor: 1,
        infoOverlay: "infoOverlay2"
    };

    // Dibujar la serie de sueño
    drawRadialTimeSeries(canvas, context, sleepDataPath, valueColumnName, 
                         sleepConfig.color, chartConfig.pointRadius, 
                         chartConfig.canvasPadding, infoColumnNames, 
                         sleepConfig.lineDivideFactor, sleepConfig.infoOverlay, 
                         chartConfig.maxValue, chartConfig.minValue);

    drawCircleLegend(context, canvas, 6, sleepConfig.color, 
                     canvas.width - 250, canvas.height - 220, 20, "Horas de sueño");

    // Dibujar la serie de ejercicio
    drawRadialTimeSeries(canvas, context, exerciseDataPath, valueColumnName, 
                         exerciseConfig.color, chartConfig.pointRadius, 
                         chartConfig.canvasPadding, infoColumnNames, 
                         exerciseConfig.lineDivideFactor, exerciseConfig.infoOverlay, 
                         chartConfig.maxValue, chartConfig.minValue);

    drawCircleLegend(context, canvas, 6, exerciseConfig.color, 
                     canvas.width - 250, canvas.height - 200, 20, "Horas de ejercicio");

    // Dibujar el título
    drawText(context, "Niveles de sueño vs niveles de ejercicio", 
             width / 2 - 5.5 * chartConfig.canvasPadding, height - chartConfig.canvasPadding, 
             30, "brown", 0);
});
