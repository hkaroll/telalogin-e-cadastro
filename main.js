const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'usuario@exemplo.com' && password === '123456') {
    alert('Usuário logado com sucesso!');
    window.location.href = "index.html";
  } else {
    alert('Usuário ou senha inválidos.');
  }
});