import Board from './Board';

export default function game() {
  const board = new Board();
  board.addBoard();
  board.start();
  const container = document.querySelector('.container-cells');
  container.addEventListener('click', clickOnCell);
}

function clickOnCell(event) {
  event.preventDefault();
  const kill = document.querySelector('.killed');
  const miss = document.querySelector('.missed');

  if (event.target.classList.contains('goblin')) {
    kill.textContent = Number(kill.textContent) + 1;
  } else {
    miss.textContent = Number(miss.textContent) - 1;
  }

  if (miss.textContent < 1) {
    alert('Игра завершена!');
  }
}
