<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Kontrollera om data har skickats
if (isset($_POST['fnamn'])) {
    // Hämta data från POST-formuläret
    $fnamn = $_POST['fnamn'];
    $enamn = $_POST['enamn'];
    $telnr = $_POST['telnr'];
    $mail = $_POST['mail'];
    $harm = $_POST['harm'];
    $varm = $_POST['varm'];
    $hben = $_POST['hben'];
    $vben = $_POST['vben'];
    $hhand = $_POST['hhand'];
    $vhand = $_POST['vhand'];
    $gåförmåga = $_POST['gåförmåga'];
    $längd = $_POST['längd'];
    $vikt = $_POST['vikt'];
    $kryckor = $_POST['kryckor'];
    $rullator = $_POST['rullator'];
    $rullstol = $_POST['rullstol'];
    $manuell_rullstol_hjälpmotor = $_POST['manuell_rullstol_hjälpmotor'];
    $elmoped = $_POST['elmoped'];
    $permobil = $_POST['permobil'];
    $annat_hjälpmedel = $_POST['annat_hjälpmedel'];

    $kryckor_till_fordon = isset($_POST['kryckor_till_fordon']) ? 1 : 0;
    $rullator_till_fordon = isset($_POST['rullator_till_fordon']) ? 1 : 0;
    $rullstol_till_fordon = isset($_POST['rullstol_till_fordon']) ? 1 : 0;
    $hjälpmotor_till_fordon = isset($_POST['hjälpmotor_till_fordon']) ? 1 : 0;
    $elmoped_till_fordon = isset($_POST['elmoped_till_fordon']) ? 1 : 0;
    $permobil_till_fordon = isset($_POST['permobil_till_fordon']) ? 1 : 0;
    
    $forare_passagerare = $_POST['forare_passagerare'];
    $anpassad_bil = $_POST['anpassad_bil'];
    $mindre_personbil = $_POST['mindreBil'];
    $storre_personbil = $_POST['störrePersonbil'];
    $suv = $_POST['SUV'];
    $mindre_transportbil = $_POST['mindreTransportbil'];
    $amerikansk_golvsanktbil = $_POST['amerikanskGolvsänktbil'];
    $minibuss = $_POST['minibuss'];
    $annat_fordon = $_POST['annat_fordon'];
    $vet_ej = isset($_POST['vet_ej']) ? 1 : 0;
    
    // SVG-innehållet från det dolda input-fältet
    $svgContent = $_POST['svg_content'];

    // Komprimera SVG-innehållet innan det sparas i databasen
    $compressedSvgContent = gzcompress($svgContent);

    // Förbered och bind parametrarna för att lägga till eller uppdatera poster
    /* $stmt = $dbh->prepare("INSERT INTO din_tabell(fnamn, enamn, telnr, mail, styrka_höger_arm, styrka_vänster_arm, styrka_höger_ben, styrka_vänster_ben, styrka_höger_hand, styrka_vänster_hand,  kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil, annat_hjälpmedel, kryckor_till_fordon, rullator_till_fordon, rullstol_till_fordon, hjälpmotor_till_fordon, elmoped_till_fordon, permobil_till_fordon, anpassad_bil, forare_passagerare, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej, svg_content, created_at, updated_at) 
                      VALUES (:fnamn, :enamn, :telnr, :mail, :right_arm, :left_arm, :right_leg, :left_leg, :right_hand, :left_hand, :kryckor, :rullator, :rullstol, :manuell_rullstol_hjälpmotor, :elmoped, :permobil, :annat_hjälpmedel, :kryckor_till_fordon, :rullator_till_fordon, :rullstol_till_fordon, :hjälpmotor_till_fordon, :elmoped_till_fordon, :permobil_till_fordon, :anpassad_bil, :forare_passagerare, :mindre_personbil, :storre_personbil, :suv, :mindre_transportbil, :amerikansk_golvsanktbil, :minibuss, :annat_fordon, :vet_ej, :svg_content, datetime('now'), datetime('now'))
                        ON CONFLICT(id) DO UPDATE SET fnamn = :fnamn, enamn = :enamn, telnr = :telnr, mail = :mail, styrka_höger_arm = :right_arm, styrka_vänster_arm = :left_arm, styrka_höger_ben = :right_leg, styrka_vänster_ben = :left_leg, styrka_höger_hand = :right_hand, styrka_vänster_hand = :left_hand, kryckor = :kryckor, rullator = :rullator, rullstol = :rullstol, manuell_rullstol_hjälpmotor = :manuell_rullstol_hjälpmotor, elmoped = :elmoped, permobil = :permobil, annat_hjälpmedel = :annat_hjälpmedel, kryckor_till_fordon = :kryckor_till_fordon, rullator_till_fordon = :rullator_till_fordon, rullstol_till_fordon = :rullstol_till_fordon, hjälpmotor_till_fordon = :hjälpmotor_till_fordon, elmoped_till_fordon = :elmoped_till_fordon, permobil_till_fordon = :permobil_till_fordon, forare_passagerare = :forare_passagerare, anpassad_bil = :anpassad_bil, mindre_personbil = :mindre_personbil, storre_personbil = :storre_personbil, suv = :suv, mindre_transportbil = :mindre_transportbil, amerikansk_golvsanktbil = :amerikansk_golvsanktbil, minibuss = :minibuss, annat_fordon = :annat_fordon, vet_ej = :vet_ej, updated_at = datetime('now')");
     */
    $stmt = $dbh->prepare("INSERT INTO din_tabell(fnamn, enamn, telnr, mail, styrka_höger_arm, styrka_vänster_arm, styrka_höger_ben, styrka_vänster_ben, styrka_höger_hand, styrka_vänster_hand, gåförmåga, längd, vikt, kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil, annat_hjälpmedel, kryckor_till_fordon, rullator_till_fordon, rullstol_till_fordon, hjälpmotor_till_fordon, elmoped_till_fordon, permobil_till_fordon, anpassad_bil, forare_passagerare, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej, svg_content, created_at, updated_at) 
                      VALUES (:fnamn, :enamn, :telnr, :mail, :right_arm, :left_arm, :right_leg, :left_leg, :right_hand, :left_hand, :gåförmåga, :längd, :vikt, :kryckor, :rullator, :rullstol, :manuell_rullstol_hjälpmotor, :elmoped, :permobil, :annat_hjälpmedel, :kryckor_till_fordon, :rullator_till_fordon, :rullstol_till_fordon, :hjälpmotor_till_fordon, :elmoped_till_fordon, :permobil_till_fordon, :anpassad_bil, :forare_passagerare, :mindre_personbil, :storre_personbil, :suv, :mindre_transportbil, :amerikansk_golvsanktbil, :minibuss, :annat_fordon, :vet_ej, :svg_content, datetime('now'), datetime('now'))
                        ON CONFLICT(id) DO UPDATE SET fnamn = :fnamn, enamn = :enamn, telnr = :telnr, mail = :mail, styrka_höger_arm = :right_arm, styrka_vänster_arm = :left_arm, styrka_höger_ben = :right_leg, styrka_vänster_ben = :left_leg, styrka_höger_hand = :right_hand, styrka_vänster_hand = :left_hand, gåförmåga = :gåförmåga, längd = :längd, vikt = :vikt, kryckor = :kryckor, rullator = :rullator, rullstol = :rullstol, manuell_rullstol_hjälpmotor = :manuell_rullstol_hjälpmotor, elmoped = :elmoped, permobil = :permobil, annat_hjälpmedel = :annat_hjälpmedel, kryckor_till_fordon = :kryckor_till_fordon, rullator_till_fordon = :rullator_till_fordon, rullstol_till_fordon = :rullstol_till_fordon, hjälpmotor_till_fordon = :hjälpmotor_till_fordon, elmoped_till_fordon = :elmoped_till_fordon, permobil_till_fordon = :permobil_till_fordon, forare_passagerare = :forare_passagerare, anpassad_bil = :anpassad_bil, mindre_personbil = :mindre_personbil, storre_personbil = :storre_personbil, suv = :suv, mindre_transportbil = :mindre_transportbil, amerikansk_golvsanktbil = :amerikansk_golvsanktbil, minibuss = :minibuss, annat_fordon = :annat_fordon, vet_ej = :vet_ej, updated_at = datetime('now')");
   
    // Bind parametrarna från POST-data till de motsvarande SQL-parametrarna
    $stmt->bindParam(':fnamn', $fnamn);
    $stmt->bindParam(':enamn', $enamn);
    $stmt->bindParam(':telnr', $telnr);
    $stmt->bindParam(':mail', $mail);
    $stmt->bindParam(':right_arm', $harm);
    $stmt->bindParam(':left_arm', $varm);
    $stmt->bindParam(':right_leg', $hben);
    $stmt->bindParam(':left_leg', $vben);
    $stmt->bindParam(':right_hand', $hhand);
    $stmt->bindParam(':left_hand', $vhand);
    $stmt->bindParam(':gåförmåga', $gåförmåga);
    $stmt->bindParam('längd', $längd);
    $stmt->bindParam('vikt', $vikt);
    $stmt->bindParam(':kryckor', $kryckor);
    $stmt->bindParam(':rullator', $rullator);
    $stmt->bindParam(':rullstol', $rullstol);
    $stmt->bindParam(':manuell_rullstol_hjälpmotor', $manuell_rullstol_hjälpmotor);
    $stmt->bindParam(':elmoped', $elmoped);
    $stmt->bindParam(':permobil', $permobil);
    $stmt->bindParam(':annat_hjälpmedel', $annat_hjälpmedel);
    $stmt->bindParam(':kryckor_till_fordon', $kryckor_till_fordon);
    $stmt->bindParam(':rullator_till_fordon', $rullator_till_fordon);
    $stmt->bindParam(':rullstol_till_fordon', $rullstol_till_fordon);
    $stmt->bindParam(':hjälpmotor_till_fordon', $hjälpmotor_till_fordon);
    $stmt->bindParam(':elmoped_till_fordon', $elmoped_till_fordon);
    $stmt->bindParam(':permobil_till_fordon', $permobil_till_fordon);
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

    $stmt->bindParam(':svg_content', $compressedSvgContent); // Bind SVG-innehållet

    // Kör frågan
    if ($stmt->execute()) {
        echo "Data har sparats/uppdaterats.";
    } else {
        echo "Det uppstod ett fel vid sparande/uppdatering av data.";
    }
} else {
    echo "Inga data skickades.";
}
?>
