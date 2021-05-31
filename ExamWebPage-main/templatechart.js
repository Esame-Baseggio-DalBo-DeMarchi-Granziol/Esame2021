function selectchart(dataset, type_inf) {

    if (type_inf == 'RSSI') {

        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'bar',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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
    else if (type_inf == 'SN') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'line',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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
    else if (type_inf == 'temperatura_interna_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'temperatura_esterna_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'umidita_interna_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'umidita_esterna_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'pressione_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'pm1_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'pm2_5_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'pm10_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'ozono1_media') {
        var options = {
            series: [12],
            chart: {
                id: 'chart2',
                type: 'radialBar',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'velocità_del_vento_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'direzione_del_vento_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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

    else if (type_inf == 'quantità_di_pioggia_media') {
        var options = {
            series: dataset,
            chart: {
                id: 'chart2',
                type: 'line',
                height: 300,
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
            },
            tooltip: {
                x: {
                    format: 'yyyy-MM-dd hh:mm:ss'
                }
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
        chart.render();

        var optionsLine = {
            series: dataset,
            chart: {
                id: 'chart1',
                height: 200,
                type: 'bar',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                },

            },
            legend: {
                show: false
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



