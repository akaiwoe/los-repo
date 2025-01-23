const startButton = document.getElementById('start-button')
const board = document.getElementById('tic-tac-toe')
const cells = document.querySelectorAll('.cell')
const resetButton = document.getElementById('reset-button');

// CLASSES

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}

class gameBoard {
    constructor() {
        this.board = Array(9).fill(null)
    }
    reset() {
        this.board = Array(9).fill(null);
        cells.forEach(cell => {
            cell.innerText = "";
        });
        resetButton.style.display = 'block'; // Show the reset button
    }
    updateCell(index, value) {
        if (index >= 0 && index < this.board.length && this.board[index] === null) {
            this.board[index] = value;
            return true;
        } else {
            return false;
        }
    }

    getBoardState() {
        return [...this.board];
    }
}

class gameController {
    constructor(gameBoard, playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = playerOne;
        this.gameBoard = gameBoard;
    }

    playMove(index) {
        const currentPlayer = this.currentPlayer;
        const moveSuccessful = this.gameBoard.updateCell(index, currentPlayer.marker);

        if (moveSuccessful) {
            const winner = this.checkWin();
            if (winner) {
                return `${winner.name} wins!`;
            }

            if (this.checkDraw()) {
                return "It's a draw!";
            }

            this.switchTurn(); // Switch turn after a valid move
            return "Move successful. Next player's turn.";
        } else {
            return "Invalid move. Cell already occupied.";
        }
    }

    switchTurn() {
        this.currentPlayer =
            this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
    }

    checkWin() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6],           // Diagonals
        ];

        const board = this.gameBoard.getBoardState();

        for (const [a, b, c] of winningCombinations) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return this.currentPlayer; // Return the current player as the winner
            }
        }
        return null; // No winner found
    }

    checkDraw() {
        const board = this.gameBoard.getBoardState();
        return board.every(cell => cell !== null) && this.checkWin() === null;
    }
}

// Event listeners

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    board.style.visibility = 'visible';
    board.style.opacity = '1';
    console.log('start button clicked');

    const playerOneName = document.getElementById('playerOneName').value.trim();
    const playerTwoName = document.getElementById('playerTwoName').value.trim();

    const game = new gameBoard();

    const playerOne = new Player(playerOneName, 'X');
    const playerTwo = new Player(playerTwoName, 'O');

    const gameControls = new gameController(game, playerOne, playerTwo);

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            console.log(`Cell ${index} clicked`);
            const result = gameControls.playMove(index);
            console.log(result);

            if (game.getBoardState()[index] !== null) {
                cell.innerText = gameControls.currentPlayer.marker;
            }

            if (result.includes('wins') || result === "It's a draw!") {
                alert(result);
                game.reset();
                resetButton.style.display = 'block'; // Display reset button after game ends
            }
        })
    });

    console.log(`Player One: ${playerOneName} Player Two: ${playerTwoName}`);
    console.log(gameControls);
    console.log(game);
    console.log(typeof gameController.playMove); // Should output "function"
    console.log(gameController);
    console.log(gameController.hasOwnProperty("playMove")); // Should be false
    console.log(gameController.__proto__.hasOwnProperty("playMove")); // Should be true

    return console.log('Ready to play')
});

// Reset Button functionality
resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none'; // Hide reset button when game restarts
    gameBoard.reset();
    cells.forEach(cell => cell.innerText = "");
    console.log("Board reset");
});
