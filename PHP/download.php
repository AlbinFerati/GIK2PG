<?php
// Aktivera felrapportering
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Funktion för att ansluta till databasen
function getDatabaseConnection() {
    $dbPath = '../anpassarna.db';

    try {
        $db = new PDO('sqlite:' . $dbPath);
        // Sätt PDO att kasta undantag vid fel
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    } catch (PDOException $e) {
        exit('Databasanslutningsfel: ' . $e->getMessage());
    }
}
        
function laddaNedFrånDatabas($id) {
    $db = getDatabaseConnection();

    $stmt = $db->prepare('SELECT id, fnamn, enamn, telnr, mail, styrka_höger_arm, styrka_vänster_arm, styrka_höger_ben, styrka_vänster_ben, styrka_höger_hand, styrka_vänster_hand, gåförmåga, längd, vikt, kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil, annat_hjälpmedel, kryckor_till_fordon, rullator_till_fordon, rullstol_till_fordon, hjälpmotor_till_fordon, elmoped_till_fordon, permobil_till_fordon, anpassad_bil, forare_passagerare, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej, created_at, updated_at FROM din_tabell WHERE id = :id');
 
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="data.csv"');
        $output = fopen('php://output', 'w');
        // Lägg till BOM för UTF-8 för att hantera å, ä, ö korrekt
        fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
        // Skriv rubrikerna och data till CSV
        fputcsv($output, array_keys($row));
        fputcsv($output, $row);
        fclose($output);
        exit;
    } else {
        // Ingen data hittades, hantera detta scenario
        return false;
    }
}

// Hanterar formulärinlämning
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['id_to_download'])) {
    $id = $_POST['id_to_download'];
    if (!laddaNedFrånDatabas($id)) {
        // Om inget ID hittades, eller något annat gick fel, visa ett felmeddelande
        echo "Ingen data hittades för det angivna id:et.";
        // Överväg att lägga till en länk för att gå tillbaka eller någon form av omriktning här
    }
}
if (!empty($data)) {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="data.csv"');
    $output = fopen('php://output', 'w');
    fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF)); // Lägg till BOM för att indikera att filen använder UTF-8
    fputcsv($output, array_keys($data)); // Rubriker
    fputcsv($output, $data); // Data
    fclose($output);
    exit;
} else {
    echo "Ingen data hittades för det angivna id:et.";
}

function laddaNedHelaDatabasenTillCSV() {
    try {
        $db = getDatabaseConnection();
        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename="databasen.csv"');
        $output = fopen('php://output', 'w');
        // Lägg till BOM för UTF-8 i början av filen
        fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
        $headers = array('id', 'fnamn', 'enamn', 'telnr', 'mail', 'styrka_höger_arm', 'styrka_vänster_arm', 'styrka_höger_ben', 'styrka_vänster_ben', 'styrka_höger_hand', 'styrka_vänster_hand', 'gåförmåga', 'längd', 'vikt', 'kryckor', 'rullator', 'rullstol', 'manuell_rullstol_hjälpmotor', 'elmoped', 'permobil', 'annat_hjälpmedel', 'kryckor_till_fordon', 'rullator_till_fordon', 'rullstol_till_fordon', 'hjälpmotor_till_fordon', 'elmoped_till_fordon', 'permobil_till_fordon', 'anpassad_bil', 'forare_passagerare', 'mindre_personbil', 'storre_personbil', 'suv', 'mindre_transportbil', 'amerikansk_golvsanktbil', 'minibuss', 'annat_fordon', 'vet_ej', 'created_at', 'updated_at');
        fputcsv($output, $headers);
        $query = "SELECT id, fnamn, enamn, telnr, mail, styrka_höger_arm, styrka_vänster_arm, styrka_höger_ben, styrka_vänster_ben, styrka_höger_hand, styrka_vänster_hand, gåförmåga, längd, vikt, kryckor, rullator, rullstol, manuell_rullstol_hjälpmotor, elmoped, permobil, annat_hjälpmedel, kryckor_till_fordon, rullator_till_fordon, rullstol_till_fordon, hjälpmotor_till_fordon, elmoped_till_fordon, permobil_till_fordon, anpassad_bil, forare_passagerare, mindre_personbil, storre_personbil, suv, mindre_transportbil, amerikansk_golvsanktbil, minibuss, annat_fordon, vet_ej, created_at, updated_at FROM din_tabell";
        $stmt = $db->prepare($query);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            fputcsv($output, $row);
        }
        fclose($output);
        exit;
    } catch (PDOException $e) {
        exit('SQL-fel: ' . $e->getMessage());
    }
}

// Kolla om en specifik åtgärd har begärts (t.ex. genom en POST-förfrågan från en knapp)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['ladda_ner_med_id'])) {
        // Hämta id från POST-data
        $id = $_POST['id'];

        // Anropa funktionen för att ladda ner med id
        $data = laddaNedFrånDatabas($id);

        // Om data hittades, skicka den som CSV-fil till användaren
        if ($data !== false) {
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="data.csv"');
            // Öppna en utdatatillfällig ström
            $output = fopen('php://output', 'w');
            // Skriv rubrikerna (array_keys) och sedan data till CSV-filen
            fputcsv($output, array_keys($data));
            fputcsv($output, $data);
            // Stäng utdatatillfällig ström
            fclose($output);
            exit;
        } else {
            exit("Ingen data hittades för det angivna id:et.");
        }
    } elseif (isset($_POST['ladda_ner_hela'])) {
        // Anropa funktionen för att ladda ner hela databasen till CSV
        laddaNedHelaDatabasenTillCSV();
        // Inget behov av echo eftersom funktionen avslutar skriptet
    }
}
?>
