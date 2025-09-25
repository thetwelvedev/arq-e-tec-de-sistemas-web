function mudarCor() {
    // Gera uma cor hexadecimal aleatória
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    // Altera a cor de fundo do corpo da página
    document.body.style.backgroundColor = corAleatoria;
}

// Adiciona um "ouvinte de evento" ao botão
document.getElementById('colorButton').addEventListener('click', mudarCor);