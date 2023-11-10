import './style.css'
import DataTable from 'datatables.net-dt';

// Capturar todos tr dentro do tbody
// Retornar a quantidades de filhos tr
// Se a quantidade for maior que 10, aplica o DataTable

// criar uma condição se existe tabela na dom
// se existir na tabela na dom, consultar se o valor do atributo data-table é igual table-filter
// quando for table-filter executa initTableFilter(table) 

function checkTable(table){
  const tableName = table.getAttribute("data-table")

  if(tableName === "table-filter"){
    initTableFilter(table);
  }
}

(function() {
const tables = document.querySelectorAll('[data-table]')

tables.forEach((table) => {
  const tbody = table.querySelector("tbody");
  const tr = tbody.querySelectorAll("tr");
  const trCount = tr.length;
  
  if(trCount > 10){
  new DataTable(table, {
    responsive: true
  });

  checkTable(table)
}
});
})();
