<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Kontrollera om det skickades med ett ID för att ta bort
if(isset($_GET['id'])) {
    // Förbered SQL-frågan för att ta bort posten baserat på ID
    $sql = "DELETE FROM otp_table WHERE id = :id";
    $stmt = $dbh->prepare($sql);

    // Bind ID-parametern och utför frågan
    $stmt->execute(array(':id' => $_GET['id']));

    // Kontrollera om posten togs bort framgångsrikt
    if($stmt->rowCount() > 0) {
        echo "OTP har tagits bort.";
    } else {
        echo "Det gick inte att ta bort OTP.";
    }
} else {
    echo "Inget ID skickades för att ta bort posten.";
}

?>
<br>
<button onclick="window.location.href='../admin.html';">Startsida</button>