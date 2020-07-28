import ApexCharts from "apexcharts";

const dayScale = document.getElementById("1D");
const weekScale = document.getElementById("1W");
const monthScale = document.getElementById("1M");
const threeMonthsScale = document.getElementById("3M");
const yearScale = document.getElementById("1Y");
const fiveYearsScale = document.getElementById("5Y");

const optionsDayScale = {
  chart: {
    type: "line",
    height: "200px",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [
        30,
        35,
        40,
        45,
        47.5,
        45,
        47.5,
        45,
        47.5,
        50,
        52.5,
        55,
        57.5,
        60,
        65,
        70,
        67.5,
        65,
        62.5,
        60,
        57.5,
        55,
        57.5,
        55,
        40,
        37.5,
        35,
        37.5,
        37,
        37,
        37.2,
        37.3,
        40,
        41,
        42,
      ],
    },
  ],
  xaxis: {
    categories: [
      "9:00",
      "9:15",
      "9:30",
      "9:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00",
      "13:15",
      "13:30",
      "13:45",
      "14:00",
      "14:15",
      "14:30",
      "14:45",
      "15:00",
      "15:15",
      "15:30",
      "15:45",
      "16:00",
      "16:15",
      "16:30",
      "16:45",
      "17:00",
      "17:15",
      "17:30",
    ],
    labels: {
      show: false,
    },
  },
};

const optionsWeekScale = {
  chart: {
    type: "line",
    height: "200px",
    foreColor: "#333",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: ["Monday", "Tuesday", "Wenesday", "Thursday", "Friday"],
    labels: {
      show: false,
    },
  },
  colors: ["#AD3C58"],
};

const optionsMontScale = {
  chart: {
    type: "line",
    height: "200px",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ],
  xaxis: {
    categories: [
      "01/07/20",
      "05/07/20",
      "10/07/20",
      "15/07/20",
      "20/07/20",
      "25/07/20",
      "28/07/20",
    ],
    labels: {
      show: false,
    },
  },
  colors: ["#8cc2d3"],
};

const optionsThreeMonthsScale = {
  chart: {
    type: "line",
    height: "200px",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ],
  xaxis: {
    categories: [
      "01/05/20",
      "15/05/20",
      "30/05/20",
      "15/06/20",
      "30/06/20",
      "15/07/20",
      "28/07/20",
    ],
    labels: {
      show: false,
    },
  },
  colors: ["#2b3971"],
};

const optionsYearScale = {
  chart: {
    type: "line",
    height: "200px",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 175, 200],
    },
  ],
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Auguts",
      "October",
      "November",
      "December",
    ],
    labels: {
      show: false,
    },
  },
  colors: ["#6f7590"],
};

const optionsFiveYearsScale = {
  chart: {
    type: "line",
    height: "200px",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [2016, 2017, 2018, 2019, 2020],
    labels: {
      show: false,
    },
  },
  colors: ["#2b3971"],
};

const chart1 = new ApexCharts(
  document.getElementById("chart1"),
  optionsDayScale
);
const chart2 = new ApexCharts(
  document.getElementById("chart2"),
  optionsWeekScale
);

const chart3 = new ApexCharts(
  document.getElementById("chart3"),
  optionsMontScale
);

const chart4 = new ApexCharts(
  document.getElementById("chart4"),
  optionsThreeMonthsScale
);

const chart5 = new ApexCharts(
  document.getElementById("chart5"),
  optionsYearScale
);

const chart6 = new ApexCharts(
  document.getElementById("chart6"),
  optionsFiveYearsScale
);

if (chart1) {
  chart1.render();
}

let isChart2 = false;
let isChart3 = false;
let isChart4 = false;
let isChart5 = false;
let isChart6 = false;

if (
  dayScale &&
  weekScale &&
  monthScale &&
  threeMonthsScale &&
  yearScale &&
  fiveYearsScale
) {
  dayScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart1");
    e.stopPropagation();
  });
  weekScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart2");
    if (isChart2 == false) {
      chart2.render();
    }
    isChart2 = true;
    e.stopPropagation();
  });
  monthScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart3");
    if (isChart3 == false) {
      chart3.render();
    }
    isChart3 = true;
    e.stopPropagation();
  });
  threeMonthsScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart4");
    if (isChart4 == false) {
      chart4.render();
    }
    isChart4 = true;
    e.stopPropagation();
  });
  yearScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart5");
    if (isChart5 == false) {
      chart5.render();
    }
    isChart5 = true;
    e.stopPropagation();
  });
  fiveYearsScale.addEventListener("click", (e) => {
    removeAllCharts();
    displayActiveChart("chart6");
    if (isChart6 == false) {
      chart6.render();
    }
    isChart6 = true;
    e.stopPropagation();
  });
}

function removeAllCharts() {
  document.getElementById("chart1").style.display = "none";
  document.getElementById("chart2").style.display = "none";
  document.getElementById("chart3").style.display = "none";
  document.getElementById("chart4").style.display = "none";
  document.getElementById("chart5").style.display = "none";
  document.getElementById("chart6").style.display = "none";
}

function displayActiveChart(chartId) {
  document.getElementById(chartId).style.display = "block";
}

//Active border nav
const activeBorders = document.querySelectorAll(".btn-nav-rbh");

function addClass(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      const current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current !== elem[i]) {
          elem[i].classList.remove("active-border");
        } else {
          current.classList.add("active-border");
        }
      }
      e.preventDefault();
      e.stopPropagation();
    });
  }
}

addClass(activeBorders);
