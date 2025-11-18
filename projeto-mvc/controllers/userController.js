// controllers/userController.js

// 1. Importar o Model (a "Cozinha")
const User = require('../models/User');

// Este é o "Garçom"
const userController = {
  // Função que será chamada pela rota GET /users
  getAllUsers: (req, res) => {
    // 2. Pedir os dados ao Model ("Cozinha, me traga todos os usuários!")
    const users = User.findAll();

    // 3. Chamar a View e entregar os dados
    // ("Apresentação, pegue estes dados 'users' e monte o prato 'usersList'")
    res.render('usersList', {
      usuarios: users // Enviamos a variável 'usuarios' para o EJS
    });
  }

  // (No futuro, poderíamos ter: getSingleUser, createUser, etc.)
};

// Exportamos o "Garçom" para o servidor poder chamá-lo
module.exports = userController;
