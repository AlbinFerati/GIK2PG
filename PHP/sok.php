
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adminsida - Sökresultat</title>
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
        $sql = "SELECT * FROM kontaktinfo WHERE fnamn LIKE :fnamn AND enamn LIKE :enamn";
        $stmt = $dbh->prepare($sql);

        // Bind parametrarna och utför frågan
        $stmt->execute(array(':fnamn' => "%$fnamn%", ':enamn' => "%$enamn%"));
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Visa resultatet i en tabell
        if($result) {
            echo "<table border='1'>";
            echo "<tr><th>Förnamn</th><th>Efternamn</th><th>Telefon</th><th>Mail</th></tr>";
            foreach($result as $row) {
                echo "<tr>";
                echo "<td>".$row['fnamn']."</td>";
                echo "<td>".$row['enamn']."</td>";
                echo "<td>".$row['telnr']."</td>";
                echo "<td>".$row['mail']."</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "Inga resultat hittades.";
        }
    }
    ?>

<br>
    <a href="admin.html">Gå tillbaka till sökningen</a>
</body>
</html>
