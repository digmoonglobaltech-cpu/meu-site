// Substitua pelo endpoint da sua planilha no SheetDB
const API_URL = "https://sheetdb.io/api/v1/SEU_ENDPOINT";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("produtos");
    data.forEach(item => {
      container.innerHTML += `
        <div>
          <h3>${item.nome}</h3>
          <p>Preço: R$ ${item.preco}</p>
          <p>${item.descricao}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error("Erro ao carregar dados:", error));
