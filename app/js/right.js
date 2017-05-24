
var ctx = document.getElementById("myChart2");
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["SYD", "MEL", "BRI", "CAN", "PER", "HK"],
        datasets: [{
            data: [80, 65, 30, 52, 27, 54],
            backgroundColor: [
                'rgb(235, 33, 141)',
                'rgb(222, 108, 167)',
                'rgb(209, 206, 227)',
                'rgb(143, 138, 189)',
                'rgb(88, 84, 160)',
                'rgb(49, 41, 141)'
            ]
        }]
    },
    options: {
        legend: false,
        scales: {
            xAxes: [{  
          	stacked: true, 
              barPercentage: 0.5,  
             gridLines: {
                display: false
            }
            }],
            yAxes: [{
                stacked: true, 
                ticks: {
                    beginAtZero:true,
                    fixedStepSize: 25
                },
                gridLines: {
                drawTicks: false
            }
            }]
        }
    }
});