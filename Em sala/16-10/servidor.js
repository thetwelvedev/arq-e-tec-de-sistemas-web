const http = require('http'); // 1. Importa o módulo HTTP
const hostname = '172.22.147.100';
const port = 3000; // Porta de comunicação
// 2. Cria o servidor com uma função que lida com requisições
const server = http.createServer((req, res) => {
res.statusCode = 200; // Resposta HTTP OK
res.setHeader('Content-Type', 'text/plain');
res.end('Fala meu amigo!');
});
// 3. "Liga" o servidor, que fica escutando por pedidos
server.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});