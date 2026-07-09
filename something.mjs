// Define the key and message to use
const STORAGE_KEY = "already-alerted";
const ALERT_MESSAGE = "Welcome!";

// Read from localStorage to check if the item exists
const hasBeenAlerted = localStorage.getItem(STORAGE_KEY);

// If it doesn't exist, trigger the alert and save to localStorage
if (!hasBeenAlerted) {
    alert(ALERT_MESSAGE);
    localStorage.setItem(STORAGE_KEY, "true");
    console.log("Alert shown and saved to localStorage.");
} else {
    console.log("Alert has already been shown previously.");
}
