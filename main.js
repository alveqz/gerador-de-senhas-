const campoSenha = document.getElementById('campo-senha');
const textoQtd = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const botaoMenos = botoes[0];
const botaoMais = botoes[1];
const divCaracteristicas = document.querySelectorAll('.parametro-senha')[1];
const barraForca = document.querySelector('.forte'); // elemento que muda de classe (fraca/medio/forte)

const LIMITE_MIN = 4;
const LIMITE_MAX = 32;

let quantidade = parseInt(textoQtd.textContent, 10) || 12;


const CONJUNTOS = {
  minusculas: 'abcdefghijklmnopqrstuvwxyz',
  maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeros: '0123456789',
  simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function criarCheckboxes() {
  const opcoes = [
    { chave: 'maiusculas', label: 'Letras maiúsculas (A-Z)', checked: true },
    { chave: 'minusculas', label: 'Letras minúsculas (a-z)', checked: true },
    { chave: 'numeros', label: 'Números (0-9)', checked: true },
    { chave: 'simbolos', label: 'Símbolos (!@#$...)', checked: false }
  ];

  opcoes.forEach(opcao => {
    const linha = document.createElement('div');
    linha.style.display = 'flex';
    linha.style.alignItems = 'center';
    linha.style.gap = '8px';
    linha.style.marginTop = '12px';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `check-${opcao.chave}`;
    input.dataset.tipo = opcao.chave;
    input.checked = opcao.checked;

    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = opcao.label;

    linha.appendChild(input);
    linha.appendChild(label);
    divCaracteristicas.appendChild(linha);

    input.addEventListener('change', () => {
      
      const marcados = divCaracteristicas.querySelectorAll('input[type="checkbox"]:checked');
      if (marcados.length === 0) {
        input.checked = true;
        return;
      }
      gerarSenha();
    });
  });
}


function tiposAtivos() {
  const checkboxes = divCaracteristicas.querySelectorAll('input[type="checkbox"]');
  return Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.dataset.tipo);
}


function gerarSenha() {
  const tipos = tiposAtivos();
  if (tipos.length === 0) return;

  const alfabetoCompleto = tipos.map(tipo => CONJUNTOS[tipo]).join('');

  
  let senhaArray = [];
  if (quantidade >= tipos.length) {
    tipos.forEach(tipo => {
      senhaArray.push(sortear(CONJUNTOS[tipo]));
    });
  }

  while (senhaArray.length < quantidade) {
    senhaArray.push(sortear(alfabetoCompleto));
  }

 
  senhaArray = embaralhar(senhaArray);

  campoSenha.value = senhaArray.join('');
  atualizarForca(tipos.length, quantidade);
}

function sortear(conjunto) {
  const indice = Math.floor(Math.random() * conjunto.length);
  return conjunto[indice];
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function atualizarForca(qtdTipos, tamanho) {
  let nivel = 'fraca';

  if (tamanho >= 12 && qtdTipos >= 3) {
    nivel = 'forte';
  } else if (tamanho >= 8 && qtdTipos >= 2) {
    nivel = 'medio';
  }

  barraForca.className = nivel;
}


botaoMenos.addEventListener('click', () => {
  if (quantidade > LIMITE_MIN) {
    quantidade--;
    textoQtd.textContent = quantidade;
    gerarSenha();
  }
});

botaoMais.addEventListener('click', () => {
  if (quantidade < LIMITE_MAX) {
    quantidade++;
    textoQtd.textContent = quantidade;
    gerarSenha();
  }
});

campoSenha.addEventListener('click', () => {
  campoSenha.select();
  navigator.clipboard?.writeText(campoSenha.value).catch(() => {});
});


criarCheckboxes();
gerarSenha();