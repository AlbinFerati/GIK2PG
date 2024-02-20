<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna för att lägga till eller uppdatera poster
$stmt = $dbh->prepare("INSERT INTO hjälpmedel (kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil) VALUES (:kryckor, :rullator, :rullstol, :manuell_rullstol_hjälpmotor, :elmoped, :permobil)
                      ON CONFLICT(id) DO UPDATE SET kryckor = COALESCE(:kryckor, kryckor), rullator = COALESCE(:rullator, rullator), rullstol = COALESCE(:rullstol, rullstol), manuell_rullstol_hjälpmotor = COALESCE(:manuell_rullstol_hjälpmotor, manuell_rullstol_hjälpmotor), elmoped = COALESCE(:elmoped, elmoped), permobil = COALESCE(:permobil, permobil)");

// Funktion för att avgöra om ett hjälpmedel är markerat eller inte
function isMarked($value) {
    return $value === "marked" ? "marked" : "null";
}

// Hämta data från POST-formuläret och bestäm om de är markerade eller inte
$kryckor = isMarked($_POST['kryckor']);
$rullator = isMarked($_POST['rullator']);
$rullstol = isMarked($_POST['rullstol']);
$manuell_rullstol_hjälpmotor = isMarked($_POST['manuell_rullstol_hjälpmotor']);
$elmoped = isMarked($_POST['elmoped']);
$permobil = isMarked($_POST['permobil']);

// Bind parametrarna från POST-data till de motsvarande SQL-parametrarna
$stmt->bindParam(':kryckor', $kryckor);
$stmt->bindParam(':rullator', $rullator);
$stmt->bindParam(':rullstol', $rullstol);
$stmt->bindParam(':manuell_rullstol_hjälpmotor', $manuell_rullstol_hjälpmotor);
$stmt->bindParam(':elmoped', $elmoped);
$stmt->bindParam(':permobil', $permobil);

// Kör frågan
if ($stmt->execute()) {
    echo "Data om hjälpmedel har sparats/uppdaterats.";
} else {
    echo "Det uppstod ett fel vid sparande/uppdatering av data om hjälpmedel.";
}
?>
