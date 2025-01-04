// references to necessary DOM elements
const diceImage = document.getElementById('dice-image');
const rollButton = document.getElementById('roll-button');
const resetButton = document.getElementById('reset-button');
const resultsList = document.getElementById('results-list');

// Array of dice images corresponding to the 6 faces of a die
const diceImages = [
    'dice-six-faces-one.png',
    'dice-six-faces-two.png',
    'dice-six-faces-three.png',
    'dice-six-faces-four.png',
    'dice-six-faces-five.png',
    'dice-six-faces-six.png'
];

// Array to store roll results and counter for the number of rolls
let rollResults = [];
let rollCount = 0;
const maxRolls = 20; // Set the maximum number of rolls

// Function to generate random dice roll between 1-6
function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
} 

// Event listener for the "Roll Dice" button
document.getElementById('roll-button').addEventListener("click", function() {
    // Check if the maximum number of 20 rolls has been reached
    if (rollCount >= maxRolls){
        alert("Maximum rolls reached! Please reset to roll again.");
        return;
    }
    
    // Increment the roll count w/ each click
    rollCount++;

    // Generate a random dice roll number
    const randomNumber = diceRoll();

    // Update the dice image in the display
    diceImage.src = diceImages[randomNumber - 1];

    // Store the roll result
    rollResults.push(randomNumber);
    
    // Clear the current list of results
    resultsList.innerHTML = "";
    
    // Loop through each roll result and display it with an image
    for (let i = 0; i < rollResults.length; i++){
        const newListItem = document.createElement("li");
        newListItem.style.display = 'flex';  
        newListItem.style.justifyContent = 'center';  
        newListItem.style.alignItems = 'center';  
        newListItem.style.margin = '5px 0';
        // Create an image element for the dice result
        const diceImageElement = document.createElement("img");
        diceImageElement.src = diceImages[rollResults[i] - 1]; // Use the current roll result for image
        diceImageElement.style.width = '30px'; 
        diceImageElement.style.height = '30px';
        diceImageElement.style.marginLeft = '10px'; 
        diceImageElement.style.borderRadius = '5px'; 
        
        // Set text for the list item
        newListItem.innerHTML = `Roll ${i + 1}: `;
        
        // Append dice image to the list item
        newListItem.appendChild(diceImageElement);

        // Append list item to the results list
        resultsList.appendChild(newListItem);
    }

    // Scroll to the bottom of results list
    resultsList.scrollTop = resultsList.scrollHeight;
});

// Event listener for the "Reset" button
document.getElementById('reset-button').addEventListener("click", function() {
    // Clear the roll results and reset the count
    rollResults = [];
    rollCount = 0;

    // Reset the dice image
    diceImage.src = 'perspective-dice-six-faces-five.png';

    // Update the results list
    resultsList.innerHTML = "Dice Reset! Click \"Roll Dice\" to start...";
});
