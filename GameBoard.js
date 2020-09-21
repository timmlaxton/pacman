import {  GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }


  showGamesStatus(gameWin) {
    const div = document.createElement('div');
    div.classList.add('add-status');
    div.innerHTML = `${gameWin ? 'win!' : 'GAME OVER MAN!'}`;
    this.DOMGrid.appendChild(div);
  }

  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = '';
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)`;

    level.forEach((square) =>  {
        const div = document.createElement('div');
        div.classList.add('square', CLASS_LIST[square]);
        div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
        this.DOMGrid.appendChild(div);
        this.grid.push(div);

        if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    })

  }

  addObject(pos, classes) {
    this.grid[pos].classList.add(...classes);
  }
  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes);
  }

  objectExists(pos, object) {
    return this.grid[pos].classList.contains(object);
  }

  rotateDiv(post, deg) {
    this.grid[pos].style.transform = `rotate$({deg}deg)`;
  }

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}

export default GameBoard;