// Initialize the counter variable
let count = 0;

// Get references to the HTML elements
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");


// Add an event listener to the button to increment the counter
incrementBtn.addEventListener("click", function() {
    count += 1; // Increment the counter
    countEl.textContent = count; // Update the displayed count
});

saveBtn.addEventListener("click", function() {
    saveEl.textContent +=count +" - ";
    count=0;
}
)
