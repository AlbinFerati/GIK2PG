<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna för att lägga till eller uppdatera poster
$stmt = $dbh->prepare("INSERT INTO fordon (forare_passagerare, anpassad_bil, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej) 
                      VALUES (:forare_passagerare, :anpassad_bil, :mindre_personbil, :storre_personbil, :suv, :mindre_transportbil, :amerikansk_golvsanktbil, :minibuss, :annat_fordon, :vet_ej)
                      ON CONFLICT(id) DO UPDATE SET forare_passagerare = :forare_passagerare, anpassad_bil = :anpassad_bil, mindre_personbil = :mindre_personbil, storre_personbil = :storre_personbil, 
                      suv = :suv, mindre_transportbil = :mindre_transportbil, amerikansk_golvsanktbil = :amerikansk_golvsanktbil, minibuss = :minibuss, annat_fordon = :annat_fordon, vet_ej = :vet_ej");

// Hämta data från POST-formuläret
$forare_passagerare = $_POST['forare_passagerare'];
$anpassad_bil = isset($_POST['anpassad_bil']) ? 1 : 0;
$mindre_personbil = isset($_POST['mindre_personbil']) ? 1 : 0;
$storre_personbil = isset($_POST['storre_personbil']) ? 1 : 0;
$suv = isset($_POST['suv']) ? 1 : 0;
$mindre_transportbil = isset($_POST['mindre_transportbil']) ? 1 : 0;
$amerikansk_golvsanktbil = isset($_POST['amerikansk_golvsanktbil']) ? 1 : 0;
$minibuss = isset($_POST['minibuss']) ? 1 : 0;
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
