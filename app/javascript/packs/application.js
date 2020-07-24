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

import "../frontend/stock/show/carroussels";

// Add some code with jQuery:
$(document).ready(function () {
  console.log("jQuery just checked that the DOM is ready!");
});


import 'js-autocomplete/auto-complete.css';
import autocomplete from 'js-autocomplete';

const autocompleteSearch = function() {
  const stocks = JSON.parse(document.getElementById('search-data').dataset.stocks)
  const searchInput = document.getElementById('query');

  if (stocks && searchInput) {
    new autocomplete({
      selector: searchInput,
      minChars: 1,
      source: function(term, suggest){
          term = term.toLowerCase();
          const choices = stocks;
          const matches = [];
          for (let i = 0; i < choices.length; i++)
              if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
          suggest(matches);
      },
    });
  }
};

autocompleteSearch();




