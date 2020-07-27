import ApexCharts from "apexcharts";

const options = {
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
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const chart = new ApexCharts(document.getElementById("chart"), options);

if (chart) {
  chart.render();
}
