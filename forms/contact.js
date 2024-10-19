(function(){
    emailjs.init("5FTx7-6xlEf7hjZ8r");  // Replace with your EmailJS User ID
})();

function sendEmail(event) {
    event.preventDefault();  // Prevent default form submission

    // Show loading indicator
    document.querySelector('.loading').style.display = 'block';

    // Get form data
    var formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        subject: document.querySelector("input[name='subject']").value,
        message: document.querySelector("textarea[name='message']").value
    };

    // Send email using EmailJS
    emailjs.send("service_ke7anlh", "template_h3km6ke", formData)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        // Hide loading and show success message
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        // Optionally clear the form
        document.querySelector('form.js-email-form').reset();
    }, function(error) {
        console.log('FAILED...', error);
        
        // Hide loading and show error message
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    });
}