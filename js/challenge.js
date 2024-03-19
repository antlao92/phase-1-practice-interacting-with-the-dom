document.addEventListener("DOMContentLoaded", function() {
    let timerElement = document.getElementById("counter");
    let counter = 0;
    let isPaused = false; // Add a variable to keep track of the pause state
  
    const counterDisplay = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const pauseButton = document.getElementById("pause"); // Add a reference to the pause button
  
    // Function to update the counter display
    const updateCounterDisplay = () => {
      counterDisplay.textContent = counter;
    };
  
    const pauseCounter = () => {
      // Stop the counter from incrementing
      clearInterval(counterInterval);
      isPaused = true;
  
      // Disable all buttons except the pause button
      plusButton.disabled = true;
      minusButton.disabled = true;
  
      // Switch the label on the button from "pause" to "resume"
      pauseButton.textContent = "Resume";
    };
  
    const resumeCounter = () => {
      // Start the counter again
      counterInterval = setInterval(() => {
        counter++;
        updateCounterDisplay();
      }, 1000);
      isPaused = false;
  
      // Enable all buttons
      plusButton.disabled = false;
      minusButton.disabled = false;
  
      // Switch the label on the button from "resume" to "pause"
      pauseButton.textContent = "Pause";
    };
  
    plusButton.addEventListener("click", () => {
      counter++;
      updateCounterDisplay();
    });
  
    minusButton.addEventListener("click", () => {
      counter--;
      updateCounterDisplay();
    });
  
    pauseButton.addEventListener("click", () => {
      if (isPaused) {
        resumeCounter();
      } else {
        pauseCounter();
      }
    });
  
    // Start the counter
    let counterInterval = setInterval(() => {
      counter++;
      updateCounterDisplay();
    }, 1000);

    // Function to handle liking a number
  const likeNumber = () => {
    const currentNumber = counter;
    let numberLikes = 1;

    // Check if a like count element already exists for the current number
    let likeCountElement = document.getElementById(`likes-${currentNumber}`);
    if (likeCountElement) {
      // If the element exists, increment the like count
      numberLikes = parseInt(likeCountElement.textContent) + 1;
      likeCountElement.textContent = numberLikes;
    } else {
      // If the element doesn't exist, create a new element and append it to the likes container
      likeCountElement = document.createElement("span");
      likeCountElement.id = `likes-${currentNumber}`;
      likeCountElement.textContent = numberLikes;
      likesContainer.appendChild(likeCountElement);
    }
  };

  // Add a click event listener to the counter display to handle liking a number
  counterDisplay.addEventListener("click", likeNumber);
});

  