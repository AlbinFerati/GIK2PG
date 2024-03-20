<?php
session_start();
// echo "<pre>";
// print_r($_SESSION);
// echo "</pre>";

// Kontrollera om användaren är inloggad, annars omdirigera till inloggningssidan
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /Login.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adminsida - Sökresultat</title>
    <link rel="stylesheet" type="text/css" href="../CSS/sok.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        // Funktion för att ladda ner en viss rad från databasen
        function ladda_ner_rad() {
            var id_to_download = $('#id_to_download').val();
            $.ajax({
                type: 'POST',
                url: 'download.php',
                data: { id: id_to_download },
                success: function(response) {
                    // Skicka data till användaren som en nedladdningsfil
                    var blob = new Blob([response]);
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'data.csv';
                    link.click();
                }
            });
        }

        // Funktion för att ladda ner hela tabellen från databasen
        function ladda_ner_hela_tabellen() {
            $.ajax({
                type: 'POST',
                url: 'download.php',
                data: { ladda_ner_hela: true },
                success: function(response) {
                    // Skicka data till användaren som en nedladdningsfil
                    var blob = new Blob([response]);
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'databasen.csv';
                    link.click();
                }
            });
        }
    </script>
</head>
<body>
    <h2>Sökresultat</h2>
    <?php
    // Ange din databasanslutningssträng här
    $dbh = new PDO('sqlite:../anpassarna.db');

    // Hantera sökningen om användaren har skickat in formuläret
    if(isset($_POST['submit'])) {
        $fnamn = $_POST['fnamn'];
        $enamn = $_POST['enamn'];

        // Förbered SQL-frågan
        $sql = "SELECT * FROM din_tabell WHERE fnamn LIKE :fnamn AND enamn LIKE :enamn";
        $stmt = $dbh->prepare($sql);

        // Bind parametrarna och utför frågan
        $stmt->execute(array(':fnamn' => "%$fnamn%", ':enamn' => "%$enamn%"));
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Visa resultatet i en tabell
        if($result) {
            echo "<table border='1'>";
            // Uppdatera rubrikerna för att inkludera ID
            echo "
            <th>Åtgärder</th>
            <th>ID</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Telefon</th>
            <th>Mail</th>
            <th>Styrka Höger Arm</th>
            <th>Styrka Vänster Arm</th>
            <th>Styrka Höger Ben</th>
            <th>Styrka Vänster Ben</th>
            <th>Styrka Höger Hand</th>
            <th>Styrka Vänster Hand</th>
            <th>Gåförmåga</th>
            <th>Längd</th>
            <th>Vikt</th>
            <th>Kryckor</th>
            <th>Rullator</th>
            <th>Rullstol</th>
            <th>Manuell Rullstol Hjälpmotor</th>
            <th>Elmoped</th>
            <th>Permobil</th>
            <th>Annat Hjälpmedel</th>
            <th>Kryckor Till Fordon</th>
            <th>Rullator Till Fordon</th>
            <th>Rullstol Till Fordon</th>
            <th>Hjälpmotor Till Fordon</th>
            <th>Elmoped Till Fordon</th>
            <th>Permobil Till Fordon</th>
            <th>Anpassad Bil</th>
            <th>Förare Passagerare</th>
            <th>Mindre Personbil</th>
            <th>Större Personbil</th>
            <th>SUV</th>
            <th>Mindre Transportbil</th>
            <th>Amerikansk Golvsänktbil</th>
            <th>Minibuss</th>
            <th>Annat Fordon</th>
            <th>Vet Ej</th>
            <th>Skapad</th>
            <th>Redigerad</th>
            <th>Åtgärder</th>
            ";
            foreach($result as $row) {
                echo "<tr>";
                // Lägg till en cell för ID
                echo "<td><a href='remove.php?id=".$row['id']."'>Remove</a> | <a href='edit.php?id=".$row['id']."'>Redigera</a></td>";
                echo "<td>".$row['id']."</td>";
                echo "<td>".$row['fnamn']."</td>";
                echo "<td>".$row['enamn']."</td>";
                echo "<td>".$row['telnr']."</td>";
                echo "<td>".$row['mail']."</td>";
                echo "<td>".$row["styrka_höger_arm"]."</td>";
                echo "<td>".$row["styrka_vänster_arm"]."</td>";
                echo "<td>".$row["styrka_höger_ben"]."</td>";
                echo "<td>".$row["styrka_vänster_ben"]."</td>";
                echo "<td>".$row["styrka_höger_hand"]."</td>";
                echo "<td>".$row["styrka_vänster_hand"]."</td>";
                echo "<td>".$row["gåförmåga"]."</td>";
                echo "<td>".$row["längd"]."</td>";
                echo "<td>".$row["vikt"]."</td>";
                echo "<td>".$row["kryckor"]."</td>";
                echo "<td>".$row["rullator"]."</td>";
                echo "<td>".$row["rullstol"]."</td>";
                echo "<td>".$row["manuell_rullstol_hjälpmotor"]."</td>";
                echo "<td>".$row["elmoped"]."</td>";
                echo "<td>".$row["permobil"]."</td>";
                echo "<td>".$row["annat_hjälpmedel"]."</td>";
                echo "<td>".$row["kryckor_till_fordon"]."</td>";
                echo "<td>".$row["rullator_till_fordon"]."</td>";
                echo "<td>".$row["rullstol_till_fordon"]."</td>";
                echo "<td>".$row["hjälpmotor_till_fordon"]."</td>";
                echo "<td>".$row["elmoped_till_fordon"]."</td>";
                echo "<td>".$row["permobil_till_fordon"]."</td>";
                echo "<td>".$row["anpassad_bil"]."</td>";
                echo "<td>".$row["forare_passagerare"]."</td>";
                echo "<td>".$row["mindre_personbil"]."</td>";
                echo "<td>".$row["storre_personbil"]."</td>";
                echo "<td>".$row["suv"]."</td>";
                echo "<td>".$row["mindre_transportbil"]."</td>";
                echo "<td>".$row["amerikansk_golvsanktbil"]."</td>";
                echo "<td>".$row["minibuss"]."</td>";
                echo "<td>".$row["annat_fordon"]."</td>";
                echo "<td>".$row["vet_ej"]."</td>";
                echo "<td>".$row["created_at"]."</td>";
                echo "<td>".$row["updated_at"]."</td>";
                echo "<td><a href='remove.php?id=".$row['id']."'>Remove</a> | <a href='edit.php?id=".$row['id']."'>Redigera</a></td>";
                echo "</tr>";

            }
            echo "</table>";
        } else {
            echo "Inga resultat hittades.";
        }
    }
    // Funktion för att ladda ner ett visst id från databasen

    ?>

    <br>
    <button onclick="window.location.href='../admin.php';">Startsida</button>
    <section>
        <h2>Hämta bild</h2>
        <form action="/PHP/get_image.php" method="get">
            <div class="bildsok">
                <label for="bild_id">Bild ID:</label>
                <input type="number" id="bild_id" name="id">
            </div>
            <div>
                <button class type="submit">Hämta</button>
            </div>
        </form>
    </section>
    <section>
        <form id="ladda_ner_rad_form" method="post" action="download.php">
            <label for="id_to_download">ID att ladda ner:</label>
            <input type="text" id="id_to_download" name="id_to_download">
            <button type="submit" value="Ladda ner rad"> Ladda ned id</button>
        </form>
    </section>
    <button type="button" onclick="ladda_ner_hela_tabellen()">Ladda ner hela tabellen</button>

</body>
</html>
