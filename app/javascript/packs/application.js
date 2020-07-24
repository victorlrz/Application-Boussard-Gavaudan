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

// Add some code with jQuery:
$(document).ready(function () {
  console.log("jQuery just checked that the DOM is ready!");
});

import "../features/apiftimes.js";

import "../styles/application";
//Front-end Navbar
import "../frontend/header/navbar";
import "../frontend/header/darkmode";
//Menus
import "../frontend/menu/portfolio_nav";
//Portfolios
import "../frontend/portfolio/index/index";

//Home
import "../frontend/home/test";
import "../frontend/home/dailyft";
