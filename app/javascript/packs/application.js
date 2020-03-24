import "bootstrap";
import "flatpickr/dist/flatpickr.min.css"; // Note this is important!
import flatpickr from "flatpickr";
import Typed from 'typed.js';
import algoliasearch from 'algoliasearch';

console.log("Hello");

flatpickr("#deal_date");
flatpickr("#ipo_date");
flatpickr("#post_date");

const input = document.querySelector('#search')
const client = algoliasearch('UJDY27XD03', 'dbef46af8ed0a92e0204b6852744ddf4');
const index = client.initIndex('Target');
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

const indexDeal = client.initIndex('Deal');
const searchAlgoliaDeal = () => {
  const input = document.querySelector('#search').value;
  if (input) {
    indexDeal.search(input)
      .then(function searchDone(content) {
        console.log(content)
      })
      .catch(function searchFailure(err) {
        console.error(err);
      });
    };
    }

const indexAcquirer = client.initIndex('Acquirer');
const searchAlgoliaAcquirer = () => {
  const input = document.querySelector('#search').value;
  if (input) {
    indexAcquirer.search(input)
      .then(function searchDone(content) {
        console.log(content)
      })
      .catch(function searchFailure(err) {
        console.error(err);
      });
    };
    }

input.addEventListener('keyup', searchAlgolia);
input.addEventListener('keyup', searchAlgoliaDeal);
input.addEventListener('keyup', searchAlgoliaAcquirer);

$(document).ready(function(){
  $('.wysihtml5').each(function(i, elem) {
    $(elem).wysihtml5();
  });
})
