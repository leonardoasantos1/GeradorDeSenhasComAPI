const URL = 'https://www.psswrd.net/api/v1/password/';
const CampoSenha = document.getElementById('senha-campo');
const btnCopiar = document.getElementById('copiar-btn');
const btnGerar = document.getElementById('gerar-btn');

async function gerarSenha() {
    const respostaDaApi = await fetch(URL);
    const objeto = await respostaDaApi.json();

    CampoSenha.value = objeto.password;

    btnGerar.textContent = 'Gerar Outra!'
};

btnCopiar.addEventListener('click', () => {
    CampoSenha.select();
    navigator.clipboard.writeText(CampoSenha.value);
    btnCopiar.textContent = 'Copiado!';

    setTimeout( () => {
        btnCopiar.textContent = 'Copiar';
    }, 2000);
});