import "bootstrap";


import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";

import algoliasearch from "algoliasearch";



import trix from "trix";
import "trix/dist/trix.css";

import "../styles/application";


import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';


window.jQuery = $;
window.$ = $;


$(document).ready(function() {
    $('#my_data').DataTable();
  });


import "../features/apiftimes.js";
import "../features/apimorningstar.js";


flatpickr("#deal_date");
flatpickr("#ipo_date");
flatpickr("#post_date");
flatpickr("#comment_date");
flatpickr("#document_date");

// Add some code with jQuery:
$(document).ready(function() {
  console.log('jQuery just checked that the DOM is ready!');
});


