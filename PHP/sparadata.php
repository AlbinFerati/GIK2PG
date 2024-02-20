<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna
$stmt = $dbh->prepare("INSERT INTO kontaktinfo (fnamn, enamn, telnr, mail) VALUES (:fnamn, :enamn, :telnr, :mail)");
$stmt->bindParam(':fnamn', $_POST['fnamn']);
$stmt->bindParam(':enamn', $_POST['enamn']);
$stmt->bindParam(':telnr', $_POST['telnr']);
$stmt->bindParam(':mail', $_POST['mail']);

// Kör frågan
if ($stmt->execute()) {
    echo "Informationen har sparats.";
} else {
    echo "Det uppstod ett fel.";
}
?>