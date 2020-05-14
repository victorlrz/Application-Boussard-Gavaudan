import "bootstrap";
import "bootstrap-table";


import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";

import algoliasearch from "algoliasearch";



import trix from "trix";
import "trix/dist/trix.css";

import "../styles/application";

import "../features/apiftimes.js";
import "../features/apimorningstar.js";

flatpickr("#deal_date");
flatpickr("#ipo_date");
flatpickr("#post_date");
flatpickr("#comment_date");
flatpickr("#document_date");

