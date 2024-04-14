// script.js

// Function for login page
function login() {
    // Validation logic for login form
    // Redirect to dashboard upon successful login
    window.location.href = "dashboard.html";
}

// Function for donation submission
function donate() {
    // Donation submission logic
    // Update donation information dynamically
}

// Function for fetching and displaying peer donors
function fetchPeerDonors() {
    // Fetch peer donors from the server
    // Display peer donors dynamically
}

// Function for displaying user-specific dashboard information
function displayDashboard() {
    // Fetch and display user-specific dashboard information
}

// Function for fetching and displaying donation history
function displayDonationHistory() {
    // Fetch and display donation history
}
// Function to connect MetaMask wallet
// Function to connect MetaMask wallet
async function connectWallet() {
    if (window.ethereum) { // Check if MetaMask is installed
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to MetaMask');
            // Perform additional actions after connecting to MetaMask
        } catch (error) {
            console.error('User denied account access:', error);
            alert('Please approve the account access request to connect your wallet.');
        }
    } else {
        console.error('MetaMask is not installed');
        alert('Please install MetaMask to connect your wallet.');
    }
}
