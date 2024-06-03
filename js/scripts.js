document.getElementById('footer-contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os dados do formulário
    var formData = new FormData(this);

    // Envia os dados para a API do Sheet Monkey
    fetch('https://api.sheetmonkey.io/form/QSacKbAd1kJPBkgNq5MRU', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Exibe a mensagem de confirmação
            document.getElementById('confirmation-message').style.display = 'block';
            // Limpa o formulário após o envio bem-sucedido
            this.reset();
        } else {
            // Se ocorrer um erro, exibe uma mensagem de erro
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        // Exibe uma mensagem de erro genérica
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    });
});
