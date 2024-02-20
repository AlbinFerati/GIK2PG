<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna

// Kör frågan
if ($stmt->execute()) {
    echo "Informationen har sparats.";
} else {
    echo "Det uppstod ett fel.";
}
?>