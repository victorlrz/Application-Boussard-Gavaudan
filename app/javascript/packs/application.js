import "bootstrap";
import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";
import Typed from 'typed.js';
import algoliasearch from 'algoliasearch';
import trix from "trix";
import "trix/dist/trix.css";
import '../styles/application';

window.jQuery = $;
window.$ = $;

// import 'datatables.net-dt';
// import 'datatables.net-bs4/js/dataTables.bootstrap4.min';

console.log("Hello");

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


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.ft.com/content/search/v1";
const searchApi = async () => {
  const searchParam = {
    queryString: "bayer",
  };
  const json = JSON.stringify(searchParam);
  try {
    const response = await fetch(proxyurl + url, {
      method: "POST",
      body: json,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-Api-Key": "59cbaf20e3e06d3565778e7b3d64dd02f06e492d9f7e1adb8c648332",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      console.log(dataAPI.results);
    }
  } catch (e) {
    console.error("e : ", e);
  }
};
searchApi();
