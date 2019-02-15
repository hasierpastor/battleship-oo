//game class
class Game {
  constructor() {
    new Board();
  }
}

class Board {
  constructor() {
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
    this.addCarrier();
    console.log(this.board);
  }

  makeBoard() {
    for (let i = 0; i < 8; i++) {
      this.board.push(new Array(8).fill(0));
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

  addCarrier() {
    const carrier = new Ship(5);
    //horizontal
    if (carrier.direction < 0.5) {
      let startingRow = Math.floor(Math.random() * 9);
      let startingIndex = Math.floor(Math.random() * 4);
      for (let i = 0; i < carrier.size; i++) {
        this.board[startingRow][startingIndex + i] = 1;
      }
    } else {
      let startingColumn = Math.floor(Math.random() * 9);
      let startingIndex = Math.floor(Math.random() * 4);
      for (let i = 0; i < carrier.size; i++) {
        this.board[startingIndex + i][startingColumn] = 1;
      }
    }
  }
}

class Ship {
  constructor(size) {
    this.size = size;
    //direction will be random, if direction < 0.5 treat as horizontal, else treat as vertical
    this.direction = Math.random();
  }
}

document.getElementById('start-button').addEventListener('click', () => {
  document.getElementById('board').innerHTML = '';
  console.log('HEY');
  new Game();
});
