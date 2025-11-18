// models/User.js

// 1. "Banco de dados" fake em memória
const bancoDeDadosFake = [
  { id: 1, nome: "Capitão Black", cargo: "Analista/Professor" },
  { id: 2, nome: "Aluno 1", cargo: "Dev JS" },
  { id: 3, nome: "Aluno 2", cargo: "Estagiário" },
  { id: 4, nome: "Maria Tech", cargo: "Desenvolvedora Full Stack" },
  { id: 5, nome: "João Data", cargo: "Cientista de Dados" },
  { id: 6, nome: "Ana Code", cargo: "Engenheira de Software" },
  { id: 7, nome: "Pedro DevOps", cargo: "Especialista em DevOps" },
  { id: 8, nome: "Carla UX", cargo: "UX Designer" }
];

// 2. O Model (a classe que representa e manipula os dados)
class User {
  // Um método estático que simula a busca de TODOS os usuários no BD
  static findAll() {
    // Aqui poderia ter uma consulta SQL (SELECT * FROM users)
    return bancoDeDadosFake;
  }

  // (No futuro, poderíamos ter: static findById(id), save(), etc.)
}

// 3. Exportamos o Model para o Controller poder usá-lo
module.exports = User;
