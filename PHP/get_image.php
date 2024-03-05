<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visa Bild</title>
    <link rel="stylesheet" type="text/css" href="../CSS/sok.css">
</head>
<body>
    <?php
    $stmt = $dbh->prepare("SELECT svg_content FROM din_tabell WHERE id = ?");
    $stmt->bindParam(1, $id, PDO::PARAM_INT);
    if ($stmt->execute()) {
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            $svgContent = gzuncompress($result['svg_content']);
            if ($svgContent !== false) {
                echo $svgContent; // Visa SVG-innehållet
            } else {
                echo "Det gick inte att dekomprimera SVG-innehållet för ID: $id";
            }
        } else {
            echo "Ingen bild hittades med ID: $id";
        }
    } else {
        echo "Det uppstod ett fel vid hämtning av SVG-innehållet.";
    }
    ?>
    <div>
        <button onclick="window.location.href='../admin.html';">Tillbaka till Admin</button>
        <button onclick="history.back()">Tillbaka till sökning</button>
    </div>
</body>
</html>
