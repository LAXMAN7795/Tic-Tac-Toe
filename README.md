Tic-Tac-Toe Game:
A simple and interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. This project is designed to provide a fun and engaging way to play the classic game between two players directly in the browser.

Features:
Two-Player Mode: Allows two players to take turns playing as "O" and "X."
Interactive Design: Each box changes based on the player's turn, with distinctive colors for "O" and "X."
Win Detection: Checks for all possible winning patterns and announces the winner.
Draw Detection: Identifies when all boxes are filled with no winner and declares a draw.
Reset Functionality: Quickly reset the board to start a new game.
Responsive UI: Adapts seamlessly to different screen sizes.

How to Play:
Open the project in any modern browser by launching the index.html file.
Player O starts the game, followed by Player X.
Take turns clicking on empty boxes in the grid.
The game announces the winner once a winning pattern is achieved or declares a draw if all boxes are filled without a winner.
Use the "Reset Game" button to restart the game or "New Game" button to clear the board and play again.

Game Logic:
Winning Patterns: The game checks for the following winning patterns:
Rows: Top, Middle, Bottom
Columns: Left, Middle, Right
Diagonals: Top-left to Bottom-right, Top-right to Bottom-left
Draw Condition: If all boxes are filled without matching any winning pattern, the game declares a draw.
Turn Tracking: Alternates between Player O and Player X on each valid click.

Technologies Used:
HTML5: For the game structure.
CSS3: For styling the game board and layout.
JavaScript: For game logic, turn tracking, win/draw detection, and interactivity.

Game Board:
![image alt](https://github.com/LAXMAN7795/Tic-Tac-Toe/blob/59f4f14d36b119a61b1e7b01c23f6c75bebe8db1/Board.png)

Winner Announcement:
![image alt](https://github.com/LAXMAN7795/Tic-Tac-Toe/blob/34e5ae3e17c74e6ccd66f89f0cf805cf8d1605fc/Winner.png)

Draw Announcement:
![image alt](https://github.com/LAXMAN7795/Tic-Tac-Toe/blob/e1f49a4bb8f9e47856cd93151e1bc2463f28995d/Draw.png)

Future Improvements:
Add an AI player mode for single-player games.
Improve accessibility features for better usability.
Add animations for enhanced visual effects.
Save game progress using local storage.

