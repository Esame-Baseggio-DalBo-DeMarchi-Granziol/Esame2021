

var color = [
    "rgba(0, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(0, 255, 0, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(192, 192, 192, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(128, 0, 0, 1)",
    "rgba(128, 128, 0, 1)",
    "rgba(0, 128, 0, 1)",
    "rgba(128, 0, 128, 1)",
    "rgba(0, 128, 128, 1)",
    "rgba(0, 0, 128, 1)",
    "rgba(54, 33, 128, 1)"
];


var params = JSON.stringify({ query: "SELECT datatime,id_end,RSSI FROM tab1 WHERE datatime>='2021-2-28 00:00:00' and id_gate=12 ORDER BY id_end,datatime" });
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "data.php", true);
xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhttp.setRequestHeader("Content-length", params.length);
xhttp.setRequestHeader("Connection", "close");

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        console.log(data);
        data = JSON.parse(data);
        

        var dict = [];
        var previous = null;
        var c = 0;
        for (var i in data) {
            if (dict[data[i].id_end] == undefined) dict[data[i].id_end] = [];
            dict[data[i].id_end].push({ x: data[i].datatime, y: data[i].RSSI });
        }

        /* qui dentro possimao modificare lo zoom iniziale
        var options = {
            series: [{
                name: 'End40',
                data: [],
            }],
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true
                }
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                    label: {
                        show: true,
                        text: 'Support',
                        style: {
                            color: "#fff",
                            background: '#00E396'
                        }
                    }
                }],
                xaxis: [{
                    x: new Date('14 Nov 2012').getTime(),
                    borderColor: '#999',
                    yAxisIndex: 0,
                    label: {
                        show: true,
                        text: 'Rally',
                        style: {
                            color: "#fff",
                            background: '#775DD0'
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);

        chart.render();
        chart.updateSeries([{ data: dict }]);  
        
        var resetCssClasses = function (activeEl) {
            var els = document.querySelectorAll('button')
            Array.prototype.forEach.call(els, function (el) {
                el.classList.remove('active')
            })

            activeEl.target.classList.add('active')
        }

        document                                                            QUI
            .querySelector('#one_month')
            .addEventListener('click', function (e) {
                resetCssClasses(e)

                chart.zoomX(
                    new Date('12-12-1212 15:12:12').getTime(),
                    new Date('12-12-1212 19:12:12').getTime()
                )
            })

        document
            .querySelector('#six_months')
            .addEventListener('click', function (e) {
                resetCssClasses(e)

                chart.zoomX(                                                    QUI
                    new Date('27 Sep 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
            })

        document
            .querySelector('#one_year')
            .addEventListener('click', function (e) {
                resetCssClasses(e)
                chart.zoomX(                                                        QUI
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
            })

        document.querySelector('#ytd').addEventListener('click', function (e) {
            resetCssClasses(e)

            chart.zoomX(                                                            QUI
                new Date('01 Jan 2013').getTime(),
                new Date('27 Feb 2013').getTime()
            )
        })

        document.querySelector('#all').addEventListener('click', function (e) {
            resetCssClasses(e)

            chart.zoomX(                                                                QUI
                new Date('23 Jan 2012').getTime(),
                new Date('27 Feb 2013').getTime()
            )
        })
        */


        var i = 0;
        var dataset = [];
        for (var val in dict) {
            dataset[i] = {
                name: "id: " + val.toString(),
                data: dict[val],
                color: color[i++]
            }
        }
        
        console.log("dataset");
        console.log(dataset);

        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 230,
                toolbar: {
                    autoSelected: 'pan',
                    show: true
                },
                events: {
                    legendClick: function (chartContext, config) {
                        chartLine.toggleSeries(dataset[config].name);
                    },
                }
            },
            legend: {
                show: true,
                position: "top"
            },
            
            colors: ['#546E7A'],
            stroke: {
                curve: 'smooth',
                width: 1
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1,
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,

            chart: {
                id: 'chart1',
                height: 100,
                type: 'area',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },
                
            },
            legend: {
                show:false
            },
            colors: ['#008FFB'],
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.91,
                    opacityTo: 0.1,
                }
            },
            xaxis: {
                type: 'datetime',
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                tickAmount: 2
            }
        };

        var chartLine = new ApexCharts(document.querySelector("#chart-line"), optionsLine);
        chartLine.render();
    }

}
xhttp.send(params);
