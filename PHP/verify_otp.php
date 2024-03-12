<?php
session_start();

$dbh = new PDO('sqlite:../anpassarna.db'); // Adjust the path as necessary

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['otp'])) {
    $userOtp = $_POST['otp'];

    // Modified query to check only the OTP and its validity
    $stmt = $dbh->prepare("SELECT * FROM otp_table WHERE otp = ? AND DATETIME(created_at, '+168 hours') > CURRENT_TIMESTAMP");
    $stmt->execute([$userOtp]);
    if ($stmt->fetch()) {
        // OTP is valid
        // Redirect to a logged-in page or dashboard
        $_SESSION['otp_valid'] = true;
        header('Location: ../Formulär.php');
        exit;
    } else {
        // OTP is invalid or expired
        echo "Invalid OTP or it has expired. Please try again.";
    }
} else {
    // Not a POST request or missing OTP
    header('Location: /index.html'); // Redirect back to the login page or home page
    exit;
}

?>
