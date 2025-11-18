// server_antes.js
const express = require('express');
const app = express();
const port = 3000;

// ----- O PROBLEMA: TUDO MISTURADO -----

// 1. Dados (deveria estar no Model)
const bancoDeDadosFake = [
  { id: 1, nome: "Capitão Black", cargo: "Analista/Professor" },
  { id: 2, nome: "Aluno 1", cargo: "Dev JS" },
  { id: 3, nome: "Aluno 2", cargo: "Estagiário" }
];

// 2. Rota e Lógica (deveria estar no Controller)
app.get('/users', (req, res) => {
  // 3. Geração de HTML (deveria estar na View)
  // Este é o "Inferno das Strings" (Slide 11)
  let html = "<html><body><h1>Lista de Usuários</h1><ul>";

  for (let user of bancoDeDadosFake) {
    html += `<li>${user.nome} (${user.cargo})</li>`;
  }

  html += "</ul></body></html>";
  res.send(html);
});

// ----------------------------------------
app.listen(port, () => {
  console.log(`Servidor "macarrão" rodando em http://localhost:${port}/users`);
});
