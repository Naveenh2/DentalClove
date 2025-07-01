document.getElementById('book-appointment').onclick = function() {
    alert("Appointment booked successfully!");
};
document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault();
    alert("Thank you for your submission! We will contact you shortly.");
};
