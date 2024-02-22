<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna för att lägga till eller uppdatera poster
$stmt = $dbh->prepare("INSERT INTO fordon (forare_passagerare, anpassad_bil, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej) 
                      VALUES (:forare_passagerare, :anpassad_bil, :mindre_personbil, :storre_personbil, :suv, :mindre_transportbil, :amerikansk_golvsanktbil, :minibuss, :annat_fordon, :vet_ej)
                      ON CONFLICT(id) DO UPDATE SET forare_passagerare = :forare_passagerare, anpassad_bil = :anpassad_bil, mindre_personbil = :mindre_personbil, storre_personbil = :storre_personbil, 
                      suv = :suv, mindre_transportbil = :mindre_transportbil, amerikansk_golvsänktbil = :amerikansk_golvsänktbil, minibuss = :minibuss, annat_fordon = :annat_fordon, vet_ej = :vet_ej");

// Hämta data från POST-formuläret
$forare_passagerare = $_POST['forare_passagerare'];
$anpassad_bil = isset($_POST['anpassad_bil']) ? $_POST['anpassad_bil'] : 0;
$mindre_personbil = $_POST['mindre_personbil'];
$storre_personbil = $_POST['storre_personbil'];
$suv = $_POST['suv'];
$mindre_transportbil = $_POST['mindre_transportbil'];
$amerikansk_golvsanktbil = $_POST['amerikansk_golvsänktbil'];
$minibuss = $_POST['minibuss'];
$annat_fordon = $_POST['annat_fordon'];
$vet_ej = isset($_POST['vet_ej']) ? 1 : 0;

// Bind parametrarna från POST-data till de motsvarande SQL-parametrarna
$stmt->bindParam(':forare_passagerare', $forare_passagerare);
$stmt->bindParam(':anpassad_bil', $anpassad_bil);
$stmt->bindParam(':mindre_personbil', $mindre_personbil);
$stmt->bindParam(':storre_personbil', $storre_personbil);
$stmt->bindParam(':suv', $suv);
$stmt->bindParam(':mindre_transportbil', $mindre_transportbil);
$stmt->bindParam(':amerikansk_golvsanktbil', $amerikansk_golvsanktbil);
$stmt->bindParam(':minibuss', $minibuss);
$stmt->bindParam(':annat_fordon', $annat_fordon);
$stmt->bindParam(':vet_ej', $vet_ej);

// Kör frågan
if ($stmt->execute()) {
    echo "Data om fordon har sparats/uppdaterats.";
} else {
    echo "Det uppstod ett fel vid sparande/uppdatering av data om fordon.";
}
?>
