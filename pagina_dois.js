function validarFormulario() {
    // Obtém os elementos do formulário pelos seus IDs
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');
    const cepInput = document.getElementById('cep');
    const telefoneInput = document.getElementById('telefone');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');
    const bairroInput = document.getElementById('bairro');
    const enderecoInput = document.getElementById('endereco');

    // Verifica se todos os campos estão preenchidos
    if (!cpfInput.value || !rgInput.value || !cepInput.value || !estadoInput.value || !cidadeInput.value || !bairroInput.value || !enderecoInput.value || !telefoneInput.value) {
        alert("Preencha todos os campos corretamente.");
        return; // Interrompe a execução se algum campo estiver vazio
    }

    // Verifica se os campos CPF, RG, CEP e Telefone possuem o número correto de caracteres
    if (cpfInput.value.length !== 14 || rgInput.value.length !== 12 || cepInput.value.length !== 9 || telefoneInput.value.length !== 15) {
        alert("Preencha todos os campos corretamente.");
        return; // Interrompe a execução se algum campo não estiver no formato correto
    }

    // Expressão regular para permitir somente letras e alguns caracteres especiais no campo de cidade
    const regexSomenteLetras = /^[a-zA-ZÀ-ÖØ-öø-ÿÁÉÍÓÚáéíóúÃÕãõÄËÏÖÜŸäëïöüÿÀ̀Á́ẪÃ̃Ç̀Ç̃È́ỄË̀É̃Ì́Î̃Ï̀Í̃Ò́ỖÕ̃Ù́Û̃ǛÚ̃ỲỳỸỹỶỷỴỵ\s-]+$/;

    // Verifica se o campo cidade contém somente letras
    if (!cidadeInput.value.match(regexSomenteLetras)) {
        alert("Por favor, insira somente letras no campo de cidade.");
        return; // Interrompe a execução se o campo cidade contiver caracteres inválidos
    }

    // Se todas as validações passarem, redireciona para a próxima página
    window.location.href = 'pagina_tres.html';
}

// Executa quando o conteúdo do DOM for carregado
document.addEventListener('DOMContentLoaded', function () {
    // Obtém os elementos do formulário pelos seus IDs
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');
    const cepInput = document.getElementById('cep');
    const telefoneInput = document.getElementById('telefone');
    const cidadeInput = document.getElementById('cidade');

    // Adiciona um ouvinte de evento ao campo CPF para formatar sua entrada
    cpfInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 11) value = value.slice(0, 11); // Limita a entrada a 11 dígitos
        this.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata a entrada como CPF
    });

    // Adiciona um ouvinte de evento ao campo RG para formatar sua entrada
    rgInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 9) value = value.slice(0, 9); // Limita a entrada a 9 dígitos
        this.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4'); // Formata a entrada como RG
    });

    // Adiciona um ouvinte de evento ao campo CEP para formatar sua entrada
    cepInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 8) value = value.slice(0, 8); // Limita a entrada a 8 dígitos
        this.value = value.replace(/(\d{5})(\d{3})/, '$1-$2'); // Formata a entrada como CEP
    });

    // Adiciona um ouvinte de evento ao campo Telefone para formatar sua entrada
    telefoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 11) value = value.slice(0, 11); // Limita a entrada a 11 dígitos
        this.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata a entrada como telefone
    });
});
