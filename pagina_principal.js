// Função que valida o formulário quando o botão "Continuar" é clicado
function validarFormulario() {
    // Obtém o valor do campo 'nome' do formulário
    const nome = document.getElementById('nome').value;
    // Obtém o valor do campo 'sobrenome' do formulário
    const sobrenome = document.getElementById('sobrenome').value;
    // Obtém o valor do campo 'data-nascimento' do formulário
    const dataNascimento = document.getElementById('data-nascimento').value;
    // Obtém o valor do campo 'genero' do formulário
    const genero = document.getElementById('genero').value;
    // Obtém o valor do campo 'email' do formulário
    const email = document.getElementById('email').value;

    // Verifica se algum campo obrigatório está vazio
    if (!nome || !sobrenome || !dataNascimento || !genero || !email) {
        // Exibe um alerta caso algum campo não esteja preenchido corretamente
        alert("Preencha todos os campos corretamente.");
        return; // Sai da função se a validação falhar
    }

    // Expressão regular para permitir somente letras e espaços nos campos de nome e sobrenome
    const regexSomenteLetras = /^[a-zA-ZÀ-ÖØ-öø-ÿÁÉÍÓÚáéíóúÃÕãõÄËÏÖÜŸäëïöüÿÀ̀Á́ẪÃ̃Ç̀Ç̃È́ỄË̀É̃Ì́Î̃Ï̀Í̃Ò́ỖÕ̃Ù́Û̃ǛÚ̃ỲỳỸỹỶỷỴỵ\s]+$/;
    // Verifica se o campo 'nome' contém somente letras
    if (!nome.match(regexSomenteLetras)) {
        // Exibe um alerta se o campo 'nome' tiver caracteres inválidos
        alert("Por favor, insira somente letras no campo de nome.");
        return; // Sai da função se a validação falhar
    }
    // Verifica se o campo 'sobrenome' contém somente letras
    if (!sobrenome.match(regexSomenteLetras)) {
        // Exibe um alerta se o campo 'sobrenome' tiver caracteres inválidos
        alert("Por favor, insira somente letras no campo de sobrenome.");
        return; // Sai da função se a validação falhar
    }

    // Converte a data de nascimento para um objeto Date
    const dataNascimentoFormatada = new Date(dataNascimento);
    // Obtém a data atual
    const hoje = new Date();
    // Calcula a idade subtraindo o ano de nascimento do ano atual
    let idade = hoje.getFullYear() - dataNascimentoFormatada.getFullYear();
    // Calcula a diferença de meses entre a data atual e a data de nascimento
    const mes = hoje.getMonth() - dataNascimentoFormatada.getMonth();
    // Ajusta a idade se o mês atual for anterior ao mês de nascimento
    // ou se for o mesmo mês, mas o dia atual for anterior ao dia de nascimento
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoFormatada.getDate())) {
        idade--; // Decrementa a idade se a condição for verdadeira
    }
    // Verifica se a idade calculada é menor que 18 anos
    if (idade < 18) {
        // Exibe um alerta se a pessoa não tiver 18 anos completos
        alert("Benefício concedido somente para maiores de 18 anos.");
        return; // Sai da função se a validação falhar
    }

    // Expressão regular para validar o formato do email
    const regexEmail = /\S+@\S+\.\S+/;
    // Verifica se o campo 'email' corresponde ao formato de email esperado
    if (!email.match(regexEmail)) {
        // Exibe um alerta se o email não for válido
        alert("Por favor, insira um email válido.");
        return; // Sai da função se a validação falhar
    }

    // Se todas as validações passarem, redireciona o usuário para a próxima página
    window.location.href = 'pagina_dois.html';
}
