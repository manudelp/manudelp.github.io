var form = getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var message = form.message.value;
    var data = {
        name: name,
        email: email,
        message: message
    };
    console.log(data);
    // Send by mail
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_mail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert('Message sent successfully');
            }
        }
    };
    form.reset();
});