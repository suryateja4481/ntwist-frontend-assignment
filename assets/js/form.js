// Initialize variables for timer functionality
let startTime = null;
let timerInterval = null;

// Get DOM elements
const form = document.getElementById('contactForm');
const timerDisplay = document.getElementById('timer');
const confirmation = document.getElementById('confirmation');

// Timer System
// Start the timer when user focuses on the form
function startTimer() {
  if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      timerDisplay.textContent = `Time spent: ${seconds}s`;
    }, 1000);
  }
}

// Stop the timer and display final time
function stopTimer() {
  clearInterval(timerInterval);
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  timerDisplay.textContent = `Time spent: ${seconds}s`;
  startTime = null;
}

// Event Listeners
// Start timer when user focuses on any form element
form.addEventListener('focusin', startTimer);

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // Validate form before submission
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  stopTimer();
  
  // Create confirmation message
  confirmation.textContent = 'Thank you! Your message has been sent.';
  confirmation.classList.remove('hidden');
  confirmation.classList.add('show');
  
  // Reset form and UI elements
  form.reset();
  // Hide confirmation message after 3 seconds
  setTimeout(() => {
    confirmation.classList.remove('show');
    confirmation.classList.add('hidden');
    timerDisplay.textContent = 'Time spent: 0s';
  }, 3000);
});
