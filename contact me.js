function goBack() {
    window.history.back();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    alert('Thank you for your submission! Your form has been successfully sent. I will contact you on your email.');  
    
   
    this.reset();
});
