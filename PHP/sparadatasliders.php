<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna
$stmt = $dbh->prepare("INSERT INTO slider_data (styrka_höger_arm, styrka_vänster_arm, styrka_höger_ben, styrka_vänster_ben, styrka_höger_hand, styrka_vänster_hand) VALUES (:right_arm, :left_arm, :right_leg, :left_leg, :right_hand, :left_hand)");

// Bind parametrarna från POST-data till de motsvarande SQL-parametrarna
$stmt->bindParam(':right_arm', $_POST['harm']);
$stmt->bindParam(':left_arm', $_POST['varm']);
$stmt->bindParam(':right_leg', $_POST['hben']);
$stmt->bindParam(':left_leg', $_POST['vben']);
$stmt->bindParam(':right_hand', $_POST['hhand']);
$stmt->bindParam(':left_hand', $_POST['vhand']);

// Kör frågan
if ($stmt->execute()) {
    echo "Informationen om limb styrka har sparats.";
} else {
    echo "Det uppstod ett fel vid sparande av limb styrka.";
}
?>
