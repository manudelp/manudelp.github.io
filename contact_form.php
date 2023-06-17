<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $message = $_POST["user_message"];

    $to = "manudlpn0@gmail.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Mensaje: " . $message;

    if (mail($to, $subject, $body)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>
