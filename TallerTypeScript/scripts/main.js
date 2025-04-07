import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.num, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    // Calcula el promedio de temporadas
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    // Crea una nueva fila que muestra el promedio, abarcando todas las columnas
    var trAverage = document.createElement("tr");
    trAverage.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(averageSeasons, "</td>");
    seriesTbody.appendChild(trAverage);
}
