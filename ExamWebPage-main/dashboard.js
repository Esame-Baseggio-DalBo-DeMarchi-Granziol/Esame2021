window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
    name: "Music",
    data: [1, 15, 26, 20, 33, 27]
  },
  {
    name: "Photos",
    data: [3, 33, 21, 42, 19, 32]
  },
  {
    name: "Files",
    data: [0, 39, 52, 11, 29, 43]
  }
  ],
  title: {
    text: 'Media',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  subtitle: {
    text: 'Statistics',
    offsetY: 55,
    offsetX: 20
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();

var optionsCircle4 = {
  chart: {
    type: 'radialBar',
    height: 350,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',

      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180

    },
  },
  stroke: {
    lineCap: 'round'
  },
  series: [71, 63],
  labels: ['Umidità Interna Media ', 'Umidità Esterna Media'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 70,
    offsetY: 240
  },
}

var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
chartCircle4.render();


var optionsBar = {
  chart: {
    height: 380,
    type: 'commits',
    stacked: true,
  },
  chart: {
    id: 'chartyear',
    type: 'area',
    height: 160,
    background: '#F6F8FA',
    toolbar: {
      show: false,
      autoSelected: 'pan'
    },
    events: {
      mounted: function (chart) {
        var commitsEl = document.querySelector('.cmeta span.commits');
        var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)

        commitsEl.innerHTML = commits
      },
      updated: function (chart) {
        var commitsEl = document.querySelector('.cmeta span.commits');
        var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)

        commitsEl.innerHTML = commits
      }
    }
  },
  colors: ['#FF7F00'],
  stroke: {
    width: 0,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
    type: 'solid'
  },
  yaxis: {
    show: false,
    tickAmount: 3,
  },
  xaxis: {
    type: 'datetime',
  }
};

var chart = new ApexCharts(document.querySelector("#chart-months"), options);
chart.render();

var optionsArea = {
  chart: {
    height: 380,
    type: 'area',
    stacked: false,
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
    name: "PM 10",
    data: [11, 15, 26, 20, 33, 27]
  },
  {
    name: "PM 2,5",
    data: [32, 33, 21, 42, 19, 32]
  },
  {
    xaxis: {
      categories: ['datetime'],
    },
    tooltip: {
      followCursor: true
    },
    fill: {
      opacity: 1,
    },
  },
  ]
}

var chartArea = new ApexCharts(
  document.querySelector("#areachart"),
  optionsArea
);

chartArea.render();
