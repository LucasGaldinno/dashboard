// Interaction of side menu buttons
document.querySelectorAll('.sidebar-submenu').forEach((e) => {
  e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
    event.preventDefault();
    e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle(
      'active'
    );

    let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content');
    let dropdown_content_lis = dropdown_content.querySelectorAll('li');

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;

    dropdown_content.classList.toggle('active');

    dropdown_content.style.height = dropdown_content.classList.contains(
      'active'
    )
      ? active_height + 'px'
      : '0';
  };
});

let category_options = {
  series: [40, 70, 20],
  labels: ['Diamante', 'Esmeralda', 'Rubi'],
  chart: {
    type: 'donut',
  },
  colors: ['#2980b9', '#6ab04c', '#ff2400']
}

let category_chart = new ApexCharts(document.querySelector('#category-chart'), category_options);
category_chart.render()

      
let customer_options = {
  series: [{
  name: 'Clientes da Loja',
  data: [10, 70, 20, 90, 36, 80, 30, 91, 60]
},{
  name: 'Cliente Online',
  data: [5, 60, 10, 80, 26, 78, 46, 85, 79]
}],
color: ['#6ab04c', '#2980b9'],
chart: {
  type: 'area',
  stacked: false,
  height: 350,
  zoom: {
    type: 'x',
    enabled: true,
    autoScaleYaxis: true
  },
},
dataLabels: {
  enabled: false
},
markers: {
  size: 0,
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.5,
    opacityTo: 0,
    stops: [0, 90, 100]
  },
},
yaxis: {
  labels: {
    formatter: function (val) {
      return (val / 1).toFixed(0);
    },
  },
  title: {
    text: 'Empire'
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
},
tooltip: {
  shared: false,
  y: {
    formatter: function (val) {
      return (val / 1).toFixed(0)
    }
  }
},
legend: {
  position: 'top'
}
};

let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options);
customer_chart.render();

setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? 'dark' : 'light'
    }
  }

  customer_chart.updateOptions(theme)
  customer_chart.updateOptions(theme)
  container_chart.updateOptions(theme)
  container_chart.updateOptions(theme)
  category_chart.updateOptions(theme)
  category_chart.updateOptions(theme)
  topsales_chart.updateOptions(theme)
  topsales_chart.updateOptions(theme)
  acoes_chart.updateOptions(theme)
  acoes_chart.updateOptions(theme)
}

let container_options = {
  series: [{
  name: 'Diamante',
  data: [80, 98, 46, 79, 20, 87],
}, {
  name: 'Rubi',
  data: [60, 70, 85, 40, 75, 30],
}, {
  name: 'Esmeralda',
  data: [64, 36, 40, 83, 53, 40],
}],
colors: ['#2980b9', '#ff2400', '#6ab04c'],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Best selling jewelry'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2016', '2017', '2018', '2019', '2020', '2021']
}
};

let container_chart = new ApexCharts(document.querySelector("#container-chart"), container_options);
container_chart.render();

let topsales_options = {
    series: [{
    name: 'Diamante',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'Rubi',
    data: [23, 23, 20, 88, 43, 27, 33, 62]
  }, {
    name: 'Esmeralda',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  }],
    colors: ['#2980b9', '#ff2400', '#6ab04c'],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    categories: ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4', '2021 Q1', '2021 Q2',
      '2021 Q3', '2021 Q4'
    ],
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'right',
    offsetX: 0,
    offsetY: 50
  },
};

let topsales_chart = new ApexCharts(document.querySelector("#topsales-chart"), topsales_options);
topsales_chart.render();

let acoes_options = {
  series: [{
  name: 'Alta %',
  type: 'column',
  data: [84, 55, 61, 67, 62, 83, 71, 81, 86, 67, 73]
}, {
  name: 'Baixa %',
  type: 'column',
  data: [10, 15, 16, 10, 15, 15, 14, 22, 29, 16, 19]
}],
colors: ['#6ab04c', '#ff2400'],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Porcentagem',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + "% Porcentagem";
      }
      return y;

    }
  }
}
};

let acoes_chart = new ApexCharts(document.querySelector("#acoes-chart"), acoes_options);
acoes_chart.render();


// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle');

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector('body').classList.toggle('dark');
  darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active');
  setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
  sidebar.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
  sidebar.classList.toggle('active')
}
