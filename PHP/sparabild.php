<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Kontrollera om data har skickats
if (isset($_POST['svg_content'])) {
    // SVG-innehållet från det dolda input-fältet
    $svgContent = $_POST['svg_content'];

    // Komprimera SVG-innehållet innan det sparas i databasen
    $compressedSvgContent = gzcompress($svgContent);

    // Logga det komprimerade innehållet för att säkerställa att det är korrekt innan det sparas
    error_log("Mottaget och komprimerat SVG-innehåll: " . $compressedSvgContent);

    // Förbered och bind parametrarna för att lägga till poster
    $stmt = $dbh->prepare("INSERT INTO din_tabell_test (svg_content) VALUES (?)");
    $stmt->bindParam(1, $compressedSvgContent, PDO::PARAM_LOB);

    // Kör frågan
    if ($stmt->execute()) {
        echo "SVG-innehållet har sparats i databasen.";
    } else {
        echo "Det uppstod ett fel vid sparande av SVG-innehållet: " . $stmt->errorInfo()[2];
    }
} else {
    echo "Inget SVG-innehåll skickades.";
}
?>

