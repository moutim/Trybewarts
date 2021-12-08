const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botaoLogin = document.getElementById('button-login');

function logInSite(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', logInSite);

// Funcao do agreement
const inputAgreement = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
function verificaAgreement() {
  if (inputAgreement.checked === true) {
    btnEnviar.removeAttribute('disabled');
  } else {
    btnEnviar.setAttribute('disabled', true);
  }
}
inputAgreement.addEventListener('input', verificaAgreement);

// Contador de caracter
const campo = document.querySelector('#textarea');
const mensagem = document.querySelector('#counter');
const tamanho = campo.maxLength;
function contaCaractere() {
  const valueCampo = campo.value;
  const contagem = tamanho - valueCampo.length;
  if (contagem === 0) {
    mensagem.style.color = 'red';
    mensagem.innerHTML = `<strong>${contagem}</strong>`;
  } else {
    mensagem.style.color = 'black';
    mensagem.innerHTML = `<strong>${contagem}</strong>`;
  }
}
campo.addEventListener('input', contaCaractere);

// Funcao de Easter Eggs
const asideImg = document.querySelector('aside img');
const listaMagias = document.querySelector('aside div');

// Aparecer lista de funcoes
cheet('a b a', function () {
  asideImg.style.display = 'none';
  listaMagias.style.display = 'block';
});

// Pausar musica
const music = document.getElementById('music-theme')
cheet('p a u s e', function () {
  music.pause();
});

// Tocar musica
cheet('t o c a r', function () {
  music.play();
});

// Mudar cor da fonte
const elementos = document.querySelectorAll('h2, label');
cheet('m u d a r', function () {
  const cor = document.getElementById('magic-color').value;
  for (let i = 0; i < elementos.length; i += 1) {
    elementos[i].style.color = cor;
  }
});

// Mostra cantora
cheet('c a n t o r a', function () {
  const body = document.querySelector('body');
  const conteudo = body.innerHTML;
  body.innerHTML = '<img src="cantora.png" class="cheet">';
  setTimeout(() => body.innerHTML = conteudo, 500);
});

// Mostra humorista
cheet('h u m o r', function () {
  const body = document.querySelector('body');
  const conteudo = body.innerHTML;
  body.innerHTML = '<img src="humorista.png" class="cheet">';
  setTimeout(() => body.innerHTML = conteudo, 500);
});

// Mostra lenhador
cheet('x u l a m b s', function () {
  const body = document.querySelector('body');
  const conteudo = body.innerHTML;
  body.innerHTML = '<img src="hugo.png" class="cheet">';
  setTimeout(() => body.innerHTML = conteudo, 500);
});
