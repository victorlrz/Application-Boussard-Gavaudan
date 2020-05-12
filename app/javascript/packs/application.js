import "bootstrap";
import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";
import Typed from "typed.js";
import algoliasearch from "algoliasearch";
import trix from "trix";
import "trix/dist/trix.css";
import "../styles/application";

// import "../features/apiftimes.js";
import "../features/morningstar.js";
// window.jQuery = $;
// window.$ = $;

// import 'datatables.net-dt';
// import 'datatables.net-bs4/js/dataTables.bootstrap4.min';

flatpickr("#deal_date");
flatpickr("#ipo_date");
flatpickr("#post_date");
flatpickr("#comment_date");
flatpickr("#document_date");

// $(document).ready( function () {
//   $("#datatables-reponsive").DataTable({
//     responsive: true
//   });
// });
