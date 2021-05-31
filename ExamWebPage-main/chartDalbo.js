var xhttp = new XMLHttpRequest();
xhttp.open("POST", "data.php", true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        data = JSON.parse(data);
        var dict = [];
        for (var i in data) dict.push({ x: data[i].Data, y: data[i].val });
        var chartdata = {
            datasets: [{
                label: "end",
                backgroundColor: '#49e2ff',
                borderColor: '#46d5f1',
                hoverBackgroundColor: '#CCCCCC',
                hoverBorderColor: '#666666',
                data: data
            }]
        };

        var graphTarget = document.getElementById('myChart').getContext('2d');
        var barGraph = new Chart(graphTarget, {
            type: 'line',
            data: chartdata,
            options: {
                responsive: false,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        position: 'left',
                        align: "middle"
                    }
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
};
xhttp.send();