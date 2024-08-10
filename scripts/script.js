const texts = ['Web Developer','Front End Developer', 'JavaScript Enthusiast', 'Open Source Contributor'];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById('typing-text').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(() => {
                    document.getElementById('typing-text').textContent = "";
                    setTimeout(type, 10); // Delay before starting to type the next word
                }, 750); // Delay before backspacing starts
            } else {
                setTimeout(type, 200);
            }
        }());


// Initialize EmailJS
(function() {
    emailjs.init("KWcpCEf09iwYbsGbc"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading indicator
    alert('Sending your message, please wait...');

    // Get the form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Reset the form immediately
    document.getElementById("contact-form").reset();

    // Send the email using EmailJS
    emailjs.send('service_oetv07j', 'template_fb2fugf', data)
        .then((response) => {
            // Display success message quickly after form reset
            alert('The Email including your name, EmailId, and the message is sent to Sneha Sai Chilukuri.');
        })
        .catch((error) => {
            // Display error message if email sending fails
            alert('Failed to send email. Error: ' + JSON.stringify(error));
        });
});

