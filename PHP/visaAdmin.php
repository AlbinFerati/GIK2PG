<?php
session_start();
// echo "<pre>";
// print_r($_SESSION);
// echo "</pre>";

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
    <title>Adminsida - Visa Admins</title>
    <link rel="stylesheet" type="text/css" href="../CSS/sok.css">
</head>
<body>
    <h2>Visa alla Admins</h2>
    <?php
    // Ange din databasanslutningssträng här
    $dbh = new PDO('sqlite:../anpassarna.db');

    // Förbered SQL-frågan för att hämta alla OTP-koder
    $sql = "SELECT * FROM admin";
    $stmt = $dbh->query($sql);

    // Hämta alla rader från resultatet
    $koder = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Visa alla koder i en tabell
    if ($koder) {
        echo "<table border='1'>";
        echo "
            <tr>
                <th>Remove</th>
                <th>ID</th>
                <th>username</th>
            </tr>";
        foreach ($koder as $row) {
            echo "<tr>";
            echo "<td><a href='removeAdmin.php?id=".$row['id']."'>Remove</a></td>";
            echo "<td>".$row['id']."</td>";
            echo "<td>".$row['username']."</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "Inga admins hittades.";
    }
    ?>

    <br>
    <button onclick="window.location.href='../admin.php';">Startsida</button>
</body>
</html>