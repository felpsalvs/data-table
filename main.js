import "./style.css";
import DataTable from "datatables.net-dt";
import languagePTBR from "datatables.net-plugins/i18n/pt-BR.mjs";


function checkTable(table) {
  const tableName = table.getAttribute("data-table");

  if (tableName === "table-filter") {
    initTableFilter(table);
  }
}

(function () {
  const tables = document.querySelectorAll("[data-table]");

  tables.forEach((table) => {
    const tbody = table.querySelector("tbody");
    const tr = tbody.querySelectorAll("tr");
    const trCount = tr.length;

    if (trCount > 10) {
      new DataTable(table, {
        responsive: true,
        scrollX: true,
        scrollCollapse: true,
        columns: [
          { width: "142px" },
          { width: "103px" },
          { width: "86px" },
          { width: "134px" },
          { width: "123px" },
        ],
        language: {
          ...languagePTBR,
          search: "",
        },
      });

      checkTable(table);
    }
  });
})();
