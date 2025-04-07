import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    console.log("Desplegando series")
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.num}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });

    // Calcula el promedio de temporadas
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;

    // Crea una nueva fila que muestra el promedio, abarcando todas las columnas
    const trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td colspan="4">Seasons average: ${averageSeasons}</td>`;
    seriesTbody.appendChild(trAverage);
}