<?php

// Database connection setup
$dbh = new PDO('sqlite:../anpassarna.db');  // Adjust the path to your SQLite database as necessary

// Function to generate a 6-digit OTP
function generateOTP() {
    return str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
}

// Function to insert the OTP into the database
function insertOTP($dbh, $email, $otp) {
    $stmt = $dbh->prepare("INSERT INTO otp_table (user_email, otp) VALUES (?, ?)");
    $stmt->execute([$email, $otp]);
}

// Function to send the OTP via email
function sendOTPEmail($email, $otp) {
    $subject = 'Din engångskod';
    $message = "Din engångskod är: $otp";
    $headers = 'From: fotbollskunge_albin@hotmail.com' . "\r\n" .
               'Reply-To: no-reply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($email, $subject, $message, $headers)) {
        echo "Engångskod skickad framgångsrikt till $email";
    } else {
        echo "Misslyckades med att skicka engångskod.";
    }
}

// Check for form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['användare'])) {
    $userEmail = $_POST['användare'];  // Capture the email address from the form
    $otp = generateOTP();  // Generate a new OTP

    insertOTP($dbh, $userEmail, $otp);  // Insert the OTP and email address into the database
    sendOTPEmail($userEmail, $otp);  // Send the OTP to the user's email address
}

?>
