document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento que será executado quando o conteúdo do documento estiver totalmente carregado

    var form = document.getElementById("myForm"); 
    // Obtém o formulário pelo ID 'myForm'

    var overlay = document.getElementById("overlay"); 
    // Obtém o elemento overlay pelo ID 'overlay'

    var closeOverlay = document.getElementById("closeOverlay");
    // Obtém o botão de fechar overlay pelo ID 'closeOverlay'

    var showOverlay = false; 
    // Variável de controle para determinar se o overlay deve ser exibido

    form.addEventListener("submit", function(event) {
        // Adiciona um evento ao formulário que será executado ao tentar enviar o formulário

        event.preventDefault(); 
        // Impede o envio padrão do formulário (não permite que a página recarregue)

        const situacao = document.getElementById('situacao').value;
        // Obtém o valor do campo de seleção 'situacao'

        const renda = document.getElementById('renda').value;
        // Obtém o valor do campo de entrada 'renda'

        const dependentes = document.getElementById('dependentes').value;
        // Obtém o valor do campo de entrada 'dependentes'

        const mensagem = document.getElementById('mensagem').value;
        // Obtém o valor do campo de texto 'mensagem'

        if (!situacao || !renda || !dependentes || !mensagem) {
            // Verifica se algum dos campos está vazio

            alert("Preencha todos os campos corretamente.");
            // Exibe um alerta solicitando que todos os campos sejam preenchidos

            return;
            // Interrompe a execução da função se algum campo estiver vazio
        }

        showOverlay = true; 
        // Define a variável de controle para permitir a exibição do overlay

        overlay.style.display = "flex"; 
        // Define o estilo do overlay para 'flex', exibindo-o na tela
    });

    closeOverlay.addEventListener("click", function() {
        // Adiciona um evento ao botão de fechar overlay que será executado ao clicar no botão

        overlay.style.display = "none"; 
        // Define o estilo do overlay para 'none', ocultando-o da tela
    });

    window.addEventListener("pageshow", function(event) {
        // Adiciona um evento à janela que será executado quando a página for mostrada

        if (event.persisted || (performance.navigation && performance.navigation.type == 2)) {
            // Verifica se a página foi carregada do cache do navegador ou navegada de volta

            showOverlay = false; 
            // Reseta a variável de controle para não exibir o overlay

            overlay.style.display = "none"; 
            // Garante que o overlay não apareça ao voltar para a página
        }
    });

    document.getElementById('renda').addEventListener('input', function(event) {
        // Adiciona um evento ao campo de entrada 'renda' que será executado ao digitar

        let renda = event.target.value.replace(/\D/g, ''); 
        // Remove todos os caracteres que não são dígitos

        renda = parseFloat(renda) / 100; 
        // Converte a string para número e divide por 100 para lidar com centavos

        event.target.value = renda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        // Formata o valor como moeda brasileira (BRL) e define no campo de entrada
    });
});
