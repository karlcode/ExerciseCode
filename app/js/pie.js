
var ctx = document.getElementById("pie");

var pie = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Animals & Environmental Sustainability", "Children & Young People at Risk", "Community Welfare & Poverty", "Medical Research & Health", "International Aid & Development"],
        datasets: [{
            data: [43, 25, 15, 10, 7],
            backgroundColor: [
                'rgb(20, 165, 236)',
                'rgb(135, 139, 197)',
                'rgb(0, 174, 173)',
                'rgb(186, 218, 142)',
                'rgb(248, 169, 127)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
            if (chart.data.labels[i]) {
                text.push(chart.data.labels[i]);
            }
            text.push('</span></li>');
            }
            text.push('</ul>');
            return text.join("");
        },
        //legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20
            }
        },
        scales: {
            
        }
    }
});
