const form = document.querySelector('form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }


  mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';

});