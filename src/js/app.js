const cells = Array.from(document.querySelectorAll('.cell'));

function random() {
  const index = Math.floor(Math.random() * cells.length);

  if (document.querySelector('.goblin')) {
    document.querySelector('.goblin').classList.remove('goblin');
  }
  cells[index].classList.add('goblin');
}

setInterval(random, 1000);
