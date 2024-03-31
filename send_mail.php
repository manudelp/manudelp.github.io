<?php
// Get the data sent from the AJAX request
$data = json_decode(file_get_contents("php://input"));

// Extract data
$name = $data->name;
$email = $data->email;
$message = $data->message;

// Set up email parameters
$to = "recipient@example.com"; // Change this to your recipient email address
$subject = "Message from $name";
$body = "From: $name\nEmail: $email\n\n$message";

// Send email
if (mail($to, $subject, $body)) {
    // If mail sent successfully, return success response
    $response = array("status" => "success", "message" => "Message sent successfully");
} else {
    // If mail sending failed, return error response
    $response = array("status" => "error", "message" => "Failed to send message");
}

// Send JSON response back to the JavaScript
header('Content-Type: application/json');
echo json_encode($response);
?>
