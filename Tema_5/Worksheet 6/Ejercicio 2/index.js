

var psoe = 28.3;
var pp = 21;
var vox = 15.2;
var up = 13;
var cs = 6.9;
var mp = 2.3;
var otros = 11.4;

// Gráfico de barras
var refreshIntervalId = setInterval(() => {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = google.visualization.arrayToDataTable([
            ['Partidos', 'Porcentaje %',],
            ['PSOE', parseFloat(psoe += psoe + 0.001)], // Modifico los valores al azar
            ['PP', parseFloat(pp += pp + 0.006)],
            ['VOX', parseFloat(vox += vox + 0.003)],
            ['UP', parseFloat(up += up += 0.0003)],
            ['CS', parseFloat(cs += 0.0002)],
            ['MP', parseFloat(mp += mp + 0.0009)],
            ['OTROS', parseFloat(otros += 0.0003)],
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
}, 100);

setTimeout(() => { // Cancelo la llamada de setInterval asignado a la variable indicada detenendo la animación
    clearInterval(refreshIntervalId);
}, 5000);

