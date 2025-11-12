const express = require('express'); // 1. Importa o express
const app = express(); // 2. Cria uma instância do aplicativo
const port = 3000;
// 3. Define uma rota para o caminho principal '/'
app.get('/', (req, res) => {
res.send('Olá, está é a página principal!');
});

// Rotas
app.get('/alunos', (req, res) => {
res.send('Olá aluno da UFRR');
});

app.get('/amigos', (req, res) => {
res.send('Você é um amigo, amigo!');
});

// 4. Inicia o servidor
app.listen(port, () => {
console.log(`App Express rodando em http://localhost:${port}`);
});
