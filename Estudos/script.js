// Aguarda o carregamento completo do DOM (Estrutura da página)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o formulário e o elemento de feedback
    const formulario = document.getElementById('meuFormulario');
    const feedback = document.getElementById('feedback');

    // 2. Adiciona um "ouvinte" de evento para quando o formulário for submetido
    formulario.addEventListener('submit', function(event) {
        // Impede o comportamento padrão de recarregar a página
        event.preventDefault(); 
        
        // 3. Captura os dados (apenas para demonstração)
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // 4. Lógica de validação e feedback
        if (nome && email && mensagem) {
            // Em um site real, aqui você enviaria os dados para um servidor (backend)
            
            // Exibe uma mensagem de sucesso
            feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
            feedback.style.color = 'green';

            // Limpa o formulário após 3 segundos
            setTimeout(() => {
                formulario.reset();
                feedback.textContent = '';
            }, 3000);

        } else {
            // Caso falte algum campo obrigatório
            feedback.textContent = 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Mensagem).';
            feedback.style.color = 'red';
        }
    });

    // 5. Exemplo de interação simples (opcional)
    console.log('Bem-vindo à Bem Morar Imóveis! Script carregado.');
});