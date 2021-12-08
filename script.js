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

// Retorna os campos preenchidos
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const house = document.getElementById('house');
const textarea = document.querySelector('#textarea');

function retornaTudo(event) {
  event.preventDefault();
  const avaliation = document.querySelector('input[name="rate"]:checked');
  const family = document.querySelector('input[name="family"]:checked');
  const materia = document.getElementsByName('materia');
  let materiaChecked = '';
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      materiaChecked += `${materia[index].value}, `;
    }
  }
  const form = document.getElementById('evaluation-form');
  form.innerHTML = `<p><strong>Nome:</strong> ${firstName.value} ${lastName.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Casa:</strong> ${house.value}</p>
    <p><strong>Família:</strong> ${family.value}</p>
    <p><strong>Matérias:</strong> ${materiaChecked}</p>
    <p><strong>Avaliação:</strong> ${avaliation.value}</p>
    <p><strong>Observações:</strong> ${textarea.value}</p>`;
}

btnEnviar.addEventListener('click', retornaTudo);

// Funcao de Easter Eggs
const asideImg = document.querySelector('aside img');
const listaMagias = document.querySelector('aside div');

// Aparecer lista de funcoes
cheet('e u r e c a', function () {
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
const elementos = document.querySelectorAll('h2, label, li');
cheet('m u d a r', function () {
  const cor = document.getElementById('magic-color').value;
  for (let i = 0; i < elementos.length; i += 1) {
    elementos[i].style.color = cor;
  }
});

// Mostra cantora
const personalidades = document.querySelector('.background');
cheet('c a n t o r a', function () {
  personalidades.setAttribute('src', 'cantora.png');
  personalidades.style.display = 'block';
  setTimeout(() => personalidades.style = 'none', 1000);
});

// Mostra humorista
cheet('h u m o r', function () {
  personalidades.setAttribute('src', 'humorista.png');
  personalidades.style.display = 'block';
  setTimeout(() => personalidades.style = 'none', 1000);
});

// Mostra lenhador
cheet('x u l a m b s', function () {
  personalidades.setAttribute('src', 'hugo.png');
  personalidades.style.display = 'block';
  setTimeout(() => personalidades.style = 'none', 1000);
});
