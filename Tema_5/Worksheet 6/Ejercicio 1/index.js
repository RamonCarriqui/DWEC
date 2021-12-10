google.charts.load('current', { packages: ['corechart', 'bar', 'geochart' ] });

google.charts.setOnLoadCallback(drawBasic);// Hay que usar dos funciones distintas sí o sí
google.charts.setOnLoadCallback(drawChart);// No vale poner las dos funciones en la misma llamada
google.charts.setOnLoadCallback(drawRegionsMap);

// Gráfico de barras
function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Partidos', 'Porcentaje %',],
        ['PSOE', 28.3],
        ['PP', 21],
        ['VOX', 15.2],
        ['UP', 13],
        ['CS', 6.9],
        ['MP', 2.3],
        ['OTROS', 11.4]
    ]);

    var options = {
        title: 'Porcentaje de elecciones 2019 en España',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Porcentaje de cada partido',
            minValue: 0,
            maxValue: 100
        },
        vAxis: {
            title: 'Partidos'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

// Gráfico circular
function drawChart() {

    var data2 = google.visualization.arrayToDataTable([
        ['Partidos', 'Porcentaje %',],
        ['PSOE', 28.3],
        ['PP', 21],
        ['VOX', 15.2],
        ['UP', 13],
        ['CS', 6.9],
        ['MP', 2.3],
        ['OTROS', 11.4]
    ]);

    var options2 = {
        title: 'Porcentaje de cada partido'
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('piechart'));

    chart2.draw(data2, options2); // Hay que cambiar el nombre de las variables que puedan chocar con el primer gráfico (data, options, chart)
}

// Mapa geográfico

function drawRegionsMap() {
    var data3 = google.visualization.arrayToDataTable([
        ['Paises más visitados del mundo en 2021 (nº de viajeros)'],
        ['España', 83509],
        ['Estados Unidos', 79256],
        ['China', 65700],
        ['Italia', 64513],
    ]);

    var options3 = {};

    var chart3 = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart3.draw(data3, options3);
}