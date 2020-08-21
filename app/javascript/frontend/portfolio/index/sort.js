let sortDirection = false;
let stockData = [
  { name: "Dylan", age: 31 },
  { name: "Christopher", age: 30 },
  { name: "Israel", age: 29 },
  { name: "ThigNasty", age: 14 },
  { name: "Dollan", age: 31 },
];

window.onload = () => {
  loadTableData(stockData);
};

function loadTableData(stockData) {
  const tableBody = document.getElementById("tableData");
  let dataHtml = "";

  for (let data of stockData) {
    dataHtml += `
    <tr class="tr-row-table">
        <td class="t-row t-width">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><div><span class="t-span"><span class="t-span-ctnt t-width"><%= Stock.find(id=stock).name %></span></span></div></div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><span><%= Stock.find(id=stock).identifier.split(":").first %></span></div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><%= portfolio.weight %>%</div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><div><svg class="t-mr t-fill" width="9" height="8" viewBox="0 0 9 8"><polygon fill-rule="evenodd" points="4 0 8 7 0 7"></polygon></svg><span><span><%= Stock.find(id=stock).price_yrchg %></span></span></div></div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><%= Stock.find(id=stock).ebitda.split("Market cap")[1].split("EPS")[0] unless Stock.find(id=stock).ebitda.split("Market cap")[1].nil? %></div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div>98% Buy</div></a>
        </td>
        <td class="t-row">
            <a class="t-a" rel="" href="/stocks/<%= stock %>"><div><%= Stock.find(id=stock).sector %></div></a>
        </td>
    </tr>
      `;

    tableBody.innerHTML = dataHtml;
    //${data} Inject data + tags ID
  }
}

function sortColumn(columnName) {
  const dataType = typeof stockData[0][columnName];
  sortDirection = !sortDirection;
  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
    case "string":
      sortTextColumn(sortDirection, columnName);
      break;
  }
  loadTableData(stockData);
}

function sortNumberColumn(sort, columnName) {
  stockData = stockData.sort((p1, p2) => {
    return sort
      ? p1[columnName] - p2[columnName]
      : p2[columnName] - p1[columnName];
  });
}

function sortTextColumn(sort, columnName) {
  stockData = stockData.sort((p1, p2) => {
    return sort
      ? (p1[columnName] > p2[columnName]) - (p1[columnName] < p2[columnName])
      : (p2[columnName] > p1[columnName]) - (p2[columnName] < p1[columnName]);
  });
}
