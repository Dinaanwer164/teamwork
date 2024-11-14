// Add a click event to each team card to display an alert
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Team member card clicked!');
    });
});