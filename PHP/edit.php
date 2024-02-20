<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Förbered en variabel för att hålla meddelanden till användaren
$message = '';

// Kontrollera om det skickades med ett ID för redigering
if(isset($_GET['id'])) {
    // Kontrollera om formuläret för redigering har skickats
    if(isset($_POST['submit'])) {
        // Hämta redigerad information från formuläret
        $id = $_GET['id'];
        $fnamn = $_POST['fnamn'];
        $enamn = $_POST['enamn'];
        $telnr = $_POST['telnr'];
        $mail = $_POST['mail'];

        // Förbered SQL-frågan för att uppdatera posten baserat på ID
        $sql = "UPDATE kontaktinfo SET fnamn = :fnamn, enamn = :enamn, telnr = :telnr, mail = :mail WHERE id = :id";
        $stmt = $dbh->prepare($sql);

        // Bind parametrarna och utför uppdateringen
        $stmt->execute(array(':fnamn' => $fnamn, ':enamn' => $enamn, ':telnr' => $telnr, ':mail' => $mail, ':id' => $id));

        // Kontrollera om uppdateringen lyckades
        if($stmt->rowCount() > 0) {
            $message = "Posten har uppdaterats.";
        } else {
            $message = "Det gick inte att uppdatera posten.";
        }
    }

    // Hämta befintlig information från databasen baserat på det angivna ID:et
    $id = $_GET['id'];
    $sql = "SELECT * FROM kontaktinfo WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->execute(array(':id' => $id));
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Visa formuläret för redigering av posten
    if($result) {
        ?>
        <h2>Redigera post</h2>
        <?php if(!empty($message)) echo "<p>$message</p>"; ?>
        <form method="post">
            Förnamn: <input type="text" name="fnamn" value="<?php echo $result['fnamn']; ?>"><br>
            Efternamn: <input type="text" name="enamn" value="<?php echo $result['enamn']; ?>"><br>
            Telefon: <input type="text" name="telnr" value="<?php echo $result['telnr']; ?>"><br>
            Mail: <input type="text" name="mail" value="<?php echo $result['mail']; ?>"><br>
            <input type="submit" name="submit" value="Spara">
        </form>
        <?php
    } else {
        echo "Ingen post hittades med det angivna ID:et.";
    }
} else {
    echo "Inget ID skickades för redigering.";
}
?>
<a href="../Admin.html">Gå tillbaka till sökningen</a>