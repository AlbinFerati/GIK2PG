<?php
session_start();
echo "<pre>";
print_r($_SESSION);
echo "</pre>";

// Kontrollera om användaren är inloggad, annars omdirigera till inloggningssidan
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /Login.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adminsida - Sök information</title>
    <link rel="stylesheet" type="text/css" href="/CSS/Admin.css">
</head>
<body>
    <section>
        <h2>Sök efter person</h2>
        <form action="/PHP/sok.php" method="post">
            <div>
                <label for="fnamn">Förnamn:</label>
                <input type="text" id="fnamn" name="fnamn">
            </div>
            <div>
                <label for="enamn">Efternamn:</label>
                <input type="text" id="enamn" name="enamn">
            </div>
            <div>
                <button type="submit" name="submit">Sök</button>
            </div>
        </form>
    </section>
    <section>
        <h2>Hämta bild</h2>
        <form action="/PHP/get_image.php" method="get">
            <div>
                <label for="bild_id">Bild ID:</label>
                <input type="number" id="bild_id" name="id">
            </div>
            <div>
                <button type="submit">Hämta</button>
            </div>
        </form>
    </section>
    <section>
        <h2>Skapa Admin</h2>
        <form action="/PHP/skapa.php" method="post">
            <div>
                <label for="uname">Användarnamn</label>
                <input type="text" id="uname" name="uname">
            </div>
            <div>
                <label for="psw">Lösenord</label>
                <input type="password" id="psw" name="psw"> 
            </div>
            <div>
                <button type="submit">Skapa</button>
            </div>
        </form>
    </section>
    <section>
        <h2>Generera engångskod</h2>
        <form action="/PHP/otp.php" method="post">
            <div>
                <label for="användare">Email till användare</label>
                <input type="email" id="användare" name="användare">
            </div>
            <div>
                <button type="submit">Skicka kod</button>
            </div>
        </form>
    </section>
    <section>
        <h2>Visa alla OTP koder</h2>
        <form action="/PHP/visaOTP.php" method="post">
            <div>
                <button type="submit">Visa OTP</button>
            </div>
        </form>
    </section>
    <form action="/PHP/LogoutAdmin.php" method="post">
    <button type="submit">Logga ut</button>
    </form>

</body>
</html>
