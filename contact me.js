function goBack() {
    window.history.back();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    alert('Thank you for your submission! Your form has been successfully sent.');  
    
   
    this.reset();
});
