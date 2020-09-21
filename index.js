
import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';

// DOM element

const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButon = document.querySelector('#start-button')

// Game Const
const POWER_PILL_TIME = 10000;
const GLOWBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid. LEVEL);

// initial Setup
let score = 0;
let time = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollisions(pacman, ghosts) {

}

function gameloop(pacman, ghosts) {

}

function startGame() {

}
