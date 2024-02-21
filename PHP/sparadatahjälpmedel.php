<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered och bind parametrarna för att lägga till eller uppdatera poster
$stmt = $dbh->prepare("INSERT INTO hjälpmedel (kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil) VALUES (:kryckor, :rullator, :rullstol, :manuell_rullstol_hjälpmotor, :elmoped, :permobil)
                      ON CONFLICT(id) DO UPDATE SET kryckor = :kryckor, rullator = :rullator, rullstol = :rullstol, manuell_rullstol_hjälpmotor = :manuell_rullstol_hjälpmotor, elmoped = :elmoped, permobil = :permobil");

// Hämta data från POST-formuläret
$kryckor = $_POST['kryckor'];
$rullator = $_POST['rullator'];
$rullstol = $_POST['rullstol'];
$manuell_rullstol_hjälpmotor = $_POST['manuell_rullstol_hjälpmotor'];
$elmoped = $_POST['elmoped'];
$permobil = $_POST['permobil'];

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
