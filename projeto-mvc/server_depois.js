// server_depois.js
const express = require('express');
const app = express();
const port = 3001;
// 1. Importar o "Garçom" (Controller)
const userController = require('./controllers/userController');
// ----- CONFIGURAÇÃO DO EXPRESS -----
// 2. Dizemos ao Express que nossa "View Engine" é o EJS (Slide 12)
app.set('view engine', 'ejs');
// 3. Dizemos ao Express onde encontrar nossas Views (na pasta ./views)
app.set('views', './views');
// ------------------------------------
// ----- ROTAS -----
// O servidor agora é o "Hostess" do restaurante.
// Ele não serve comida, ele só aponta para o "Garçom".
// Quando uma requisição GET chegar em '/users',
// chame a função 'getAllUsers' do 'userController'.
app.get('/users', userController.getAllUsers);
// Uma rota principal
app.get('/', (req, res) => {
res.send('<h1>Bem-vindo ao Restaurante MVC!</h1><p>Vá para <a href="/users">/users</a> para ver a lista.</p>');
});
// -----------------
app.listen(port, () => {
console.log(`Servidor MVC limpo rodando em http://localhost:${port}`);
});