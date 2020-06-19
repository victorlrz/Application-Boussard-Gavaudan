import "bootstrap";

import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";
flatpickr("#deal_date");
flatpickr("#ipo_date");
flatpickr("#post_date");
flatpickr("#comment_date");
flatpickr("#document_date");

import algoliasearch from "algoliasearch";

import trix from "trix";
import "trix/dist/trix.css";

import "jquery";
import "datatables.net";

// Add some code with jQuery:
$(document).ready(function () {
  console.log("jQuery just checked that the DOM is ready!");
});

import "../features/apiftimes.js";
// import "../features/apimorningstar.js";

import "../styles/application";
//Front-end Navbar
import "../frontend/header/navbar";
//Menus
import "../frontend/menu/portfolio_index_menu";
import "../frontend/menu/stock_show_menu";
//Portfolios
import "../frontend/portfolio/index/index";
//Stocks
import "../frontend/stock/show/stars_animation";
import "../frontend/stock/show/onclick_animation";
import "../frontend/stock/show/getTitle";

$(document).ready(function () {
  $("#my_data").DataTable();
});
