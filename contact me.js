function goBack() {
    window.history.back();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    alert('Thank you for your submission! Your form has been successfully sent.');  // Show the alert
});
