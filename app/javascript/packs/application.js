import "bootstrap";
import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";
import Typed from 'typed.js';
import algoliasearch from 'algoliasearch';

console.log("Hello");

flatpickr("#deal_date");
flatpickr("#ipo_date");

const input = document.querySelector('#search')
var client = algoliasearch('UJDY27XD03', 'dbef46af8ed0a92e0204b6852744ddf4');
var index = client.initIndex('targets');
const searchAlgolia = () => {
  const input = document.querySelector('#search').value;
  if (input) {
    index.search(input)
      .then(function searchDone(content) {
        console.log(content)
      })
      .catch(function searchFailure(err) {
        console.error(err);
      });
    };
    }
input.addEventListener('keyup', searchAlgolia);
