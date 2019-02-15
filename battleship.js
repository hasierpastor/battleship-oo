//game class
class Game {
  constructor() {
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
  }

  makeBoard() {
    for (let i = 0; i < 8; i++) {
      this.board.push(Array.from({ length: 8 }));
    }
  }

  makeHtmlBoard() {
    const HtmlBoard = document.getElementById('board');
    for (let y = 0; y < 8; y++) {
      const row = document.createElement('tr');
      for (let x = 0; x < 8; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
      HtmlBoard.append(row);
    }
  }
}

document.getElementById('start-button').addEventListener('click', () => {
  document.getElementById('board').innerHTML = '';
  console.log('HEY');
  new Game();
});
