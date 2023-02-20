const musica1 = document.getElementById('musica1');
const musica2 = document.getElementById('musica2');

const botaoVoltar = document.getElementById('voltar');
const botaoTocar = document.getElementById('tocar');
const botaoPausar = document.getElementById('pausar');
const botaoProxima = document.getElementById('proxima');

const barraProgresso = document.getElementById('progressoMusica');

const volume = document.getElementById('volume');

const nome = document.getElementById('nome');
const foto = document.getElementById('foto');

let indice = 0;

const musicas = [
  {
    nome: 't.A.T.u. - All The Things She Said)',
    foto: 'https://m.media-amazon.com/images/I/51Im4cirdBL._AC_SX425_.jpg',
    musica: musica1,
  },
  {
    nome: 'Beyoncé - Crazy In Love ft. JAY Z',
    foto: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f5e17e1-dd1e-4357-a7e3-a7756cc834d9/d6amjcw-5860fc45-4f27-43d8-9da7-58e4788484ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmNWUxN2UxLWRkMWUtNDM1Ny1hN2UzLWE3NzU2Y2M4MzRkOVwvZDZhbWpjdy01ODYwZmM0NS00ZjI3LTQzZDgtOWRhNy01OGU0Nzg4NDg0YmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wenvuobUD_NdeI9AKzYXu3QsEB-KYR8NJGaSn0jDrBs',
    musica: musica2,
  },
];

const tocar = () => {
  musicas[indice].musica.volume = volume.value / 100;
  nome.textContent = musicas[indice].nome;
  foto.src = musicas[indice].foto;
  musicas[indice].musica.play();
  botaoTocar.classList.add('desabilitado');
  botaoPausar.classList.remove('desabilitado');
  barraProgresso.max = musicas[indice].musica.duration;
  setInterval(() => {
    barraProgresso.value = musicas[indice].musica.currentTime;
  }, 1000);
};

const pausar = () => {
  musicas[indice].musica.pause();
  botaoTocar.classList.remove('desabilitado');
  botaoPausar.classList.add('desabilitado');
};

const passar = () => {
  musicas[indice].musica.pause();
  musicas[indice].musica.currentTime = 0;
  indice++;
  if (indice > musicas.length - 1) {
    indice = 0;
  }
  tocar();
};

const voltar = () => {
  musicas[indice].musica.pause();
  musicas[indice].musica.currentTime = 0;
  indice--;
  if (indice < 0) {
    indice = musicas.length - 1;
  }
  tocar();
};

botaoPausar.addEventListener('click', pausar);
botaoTocar.addEventListener('click', tocar);
botaoProxima.addEventListener('click', passar);
botaoVoltar.addEventListener('click', voltar);

barraProgresso.addEventListener('change', () => {
  musicas[indice].musica.currentTime = barraProgresso.value;
});

volume.addEventListener('change', () => {
  musicas[indice].musica.volume = volume.value / 100;
});
