import "frappe-datatable/dist/frappe-datatable.min.css";

import DataTable from "frappe-datatable";
import { getSampleData } from "./data.js";


const el = document.getElementById("app");

const { columns, data } = getSampleData();

window.datatable = new DataTable(el, {
  columns,
  data,
  checkboxColumn: true,
  inlineFilters: true,
  layout: "fluid"
});
