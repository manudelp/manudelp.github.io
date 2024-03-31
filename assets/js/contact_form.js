var form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = form.user_name.value;
    var email = form.user_email.value;
    var message = form.user_message.value;

    var data = {
        personalizations: [
            {
                to: [{ email: 'manudlpn0@gmail.com' }], // Change this to your recipient email address
                subject: 'Message from ' + name
            }
        ],
        from: { email: 'manudlpn0@gmail.com' }, // Change this to your verified sender email address
        content: [
            {
                type: 'text/plain',
                value: `From: ${name}\nEmail: ${email}\n\n${message}`
            }
        ]
    };

    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.ok) {
            console.log('Email sent successfully');
            alert('Message sent successfully');
            form.reset();
        } else {
            console.error('Failed to send email');
            alert('Failed to send message');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert('Failed to send message');
    });
});
