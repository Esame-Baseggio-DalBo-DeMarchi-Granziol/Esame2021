var options = {
    series: [{

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
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
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


var resetCssClasses = function(activeEl) {
    var els = document.querySelectorAll('button')
    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('active')
    })

    activeEl.target.classList.add('active')
}

document
    .querySelector('#one_month')
    .addEventListener('click', function(e) {
        resetCssClasses(e)

        chart.zoomX(
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
        )
    })

document
    .querySelector('#six_months')
    .addEventListener('click', function(e) {
        resetCssClasses(e)

        chart.zoomX(
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
        )
    })

document
    .querySelector('#one_year')
    .addEventListener('click', function(e) {
        resetCssClasses(e)
        chart.zoomX(
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
        )
    })

document.querySelector('#ytd').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.zoomX(
        new Date('01 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
    )
})

document.querySelector('#all').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.zoomX(
        new Date('23 Jan 2012').getTime(),
        new Date('27 Feb 2013').getTime()
    )
})