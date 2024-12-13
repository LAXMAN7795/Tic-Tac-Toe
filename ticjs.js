// Select all the boxes, reset button, new game button, message, and message container
const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#reset");
const newbtn = document.querySelector("#newbtn");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".ncontain");

// Initialize turn to track the current player (O starts first)
let turnO = true;

// Winning patterns for the Tic-Tac-Toe game
const winPattern = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // First column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
];

// Counter to track the number of turns
let count = 0;

// Function to handle box click
const handleBoxClick = (box, index) => {
    if (box.innerText !== "") return; // Prevent overriding an already filled box

    count++; // Increment turn counter

    // Determine the current player's turn
    if (turnO) {
        box.innerText = "O"; // Player O
        box.style.color = "green"; // Set O's color to green
        turnO = false; // Switch turn to Player X
    } else {
        box.innerText = "X"; // Player X
        box.style.color = "red"; // Set X's color to red
        turnO = true; // Switch turn to Player O
    }

    box.disabled = true; // Disable the box after a move
    checkWinner(); // Check if there is a winner or a draw
};

// Function to display the winner's message and disable all boxes
const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} is the winner!`; // Display winner's message
    msgcontainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes
};

// Function to handle a draw
const drawBox = () => {
    msg.innerText = "It's a draw!"; // Display draw message
    msgcontainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes
};

// Function to disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true; // Disable each box
    });
};

// Function to enable all boxes for a new match
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the box's text
        box.disabled = false; // Enable the box
    });
    turnO = true; // Reset turn to Player O
    count = 0; // Reset turn counter
    msgcontainer.classList.add("hide"); // Hide the message container
};

// Function to check for a winner or a draw
const checkWinner = () => {
    let winnerFound = false;

    // Check all winning patterns
    winPattern.forEach((pattern) => {
        const [a, b, c] = pattern; // Destructure the winning pattern
        if (
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            winnerFound = true;
            showWinner(boxes[a].innerText); // Display winner's message
        }
    });

    // Check for a draw if no winner is found and all boxes are filled
    if (!winnerFound && count === 9) {
        drawBox(); // Handle the draw case
    }
};

// Add click event listeners to all the boxes
boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleBoxClick(box, index));
});

// Add event listeners for the New Game and Reset buttons
newbtn.addEventListener("click", resetGame); // New game button
resetbtn.addEventListener("click", resetGame); // Reset game button
