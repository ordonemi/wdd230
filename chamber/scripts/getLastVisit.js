// Check if there's a previous visit date in localStorage

if (localStorage.getItem('lastVisit')) {
    // Retrieve the previous visit date
    const lastVisit = new Date(localStorage.getItem('lastVisit'));
    const now = new Date();
    const timeDifference = now - lastVisit; // Time difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

    if (daysDifference === 0) {
        document.getElementById('#lastVisit').textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            document.getElementById('#lastVisit').textContent = "You last visited 1 day ago.";
        } else {
            document.getElementById('#lastVisit').textContent = `You last visited ${daysDifference} days ago.`;
        }
        } else {
            // First visit
            document.getElementById('#lastVisit').textContent = "Welcome! Let us know if you have any questions.";
        }
// Store the current visit date in localStorage
localStorage.setItem('lastVisit', new Date());