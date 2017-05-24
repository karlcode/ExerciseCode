
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [{
            label: 'Regular',
            data: [27, 28, 9, 27, 11, 20],
            backgroundColor: 'rgb(0, 174, 173)'
        },
        {
            label: 'One off',
            data: [27, 28, 9, 27, 11, 20],
            backgroundColor: 'rgb(153, 192, 110)'
        },
        {
            label: 'Regular + One off',
            data: [27, 28, 9, 27, 11, 20],
            backgroundColor: 'rgb(187, 219, 143)'
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 20
            }
        },
        scales: {
            xAxes: [{ 
          	stacked: true, 
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