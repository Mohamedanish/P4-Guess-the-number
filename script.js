// Get the input element where the user enters their guess
var number = document.getElementById("number")

// Get the paragraph element where feedback (right/wrong) will be displayed
var text = document.getElementById("text")

// Get the paragraph element where the player's score will be displayed
var score = document.getElementById("score")

// Variable to keep track of the player's total score
var totalscore = 0

// Function that is called when the user clicks the "Check" button
function check() {
    // Retrieve the user's guessed number from the input field
    var givennumber = number.value

    // Generate a random number between 1 and 10
    var random = Math.floor(Math.random() * 10) + 1

    // If the user's guessed number matches the random number
    if (random == givennumber) {
        // Update the text to indicate the user was correct
        text.textContent = "Well Done! You are Right."
        
        // Increment the total score by 1
        totalscore = totalscore + 1

        // Update the score display with the new total score
        score.textContent = "Your score is " + totalscore

        // Display an alert congratulating the user
        alert("YOU DID IT")
    }
    else {
        // If the guess is wrong, display a message prompting the user to try again
        text.textContent = "Oops! Try Again."
    }

    // Move focus back to the input field for the next guess
    number.focus();

    // Clear the input field after each guess
    number.value = ""
}
