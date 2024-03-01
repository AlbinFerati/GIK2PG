<?php
// Ladda PHPMailer biblioteket
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';
require '../vendor/phpmailer/phpmailer/src/Exception.php';


// Database connection setup
$dbh = new PDO('sqlite:../anpassarna.db');  // Justera sökvägen till din SQLite-databas vid behov

// Funktion för att generera en 6-siffrig OTP
function generateOTP() {
    return str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
}

// Funktion för att sätta in OTP i databasen
function insertOTP($dbh, $email, $otp) {
    $stmt = $dbh->prepare("INSERT INTO otp_table (user_email, otp) VALUES (?, ?)");
    $stmt->execute([$email, $otp]);
}

// Funktion för att skicka OTP via e-post med PHPMailer
function sendOTPEmail($email, $otp) {
    // Skapa en ny instans av PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Konfigurera SMTP-inställningar
    $mail->isSMTP();
    $mail->Host = 'smtp-mail.outlook.com';  // Ersätt med din SMTP-serveradress
    $mail->SMTPAuth = true;
    $mail->Username = 'fotbollskungen_albin@hotmail.com'; // Ersätt med din SMTP-användarnamn
    $mail->Password = 'albinii123'; // Ersätt med ditt SMTP-lösenord
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Konfigurera e-postmeddelandet
    $mail->setFrom('fotbollskungen_albin@hotmail.com', 'Fotbollskungen Albin');
    $mail->addAddress($email);
    $mail->Subject = 'Din engångskod';
    $mail->Body = "Din engångskod är: $otp";

    // Skicka e-postmeddelandet
    if ($mail->send()) {
        echo "Engångskod skickad framgångsrikt till $email";
    } else {
        echo "Misslyckades med att skicka engångskod: " . $mail->ErrorInfo;
    }
}

// Kontrollera för formulärinsändning
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['användare'])) {
    $userEmail = $_POST['användare'];  // Fånga e-postadressen från formuläret
    $otp = generateOTP();  // Generera en ny OTP

    insertOTP($dbh, $userEmail, $otp);  // Sätt in OTP och e-postadress i databasen
    sendOTPEmail($userEmail, $otp);  // Skicka OTP till användarens e-postadress
}
?>
