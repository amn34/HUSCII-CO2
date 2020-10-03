var barChartData = {
    labels: ['City Name Here'],
    datasets: [
        {
            label: 'CO2 Source 1',
            backgroundColor: 'rgba(250, 0, 0, 1)',
            data: [
                10, 20, 30, 40
            ]
        },
        {
            label: 'CO2 Source 2',
            backgroundColor: 'rgba(0, 250, 0, 1)',
            data: [
                10, 20, 30, 40
            ]
        },
        {
            label: 'CO2 Source 3',
            backgroundColor: 'rgba(0, 0, 250, 1)',
            data: [
                10, 20, 30, 40
            ]
        }
    ]
}

window.onload = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'CO2 Emissions in {City Here}' 
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}