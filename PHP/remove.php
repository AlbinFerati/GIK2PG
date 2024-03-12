<?php
session_start();
echo "<pre>";
print_r($_SESSION);
echo "</pre>";

// Kontrollera om användaren är inloggad, annars omdirigera till inloggningssidan
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /Login.html");
    exit;
}
?>
<?php
// Ange din databasanslutningssträng här
$dbh = new PDO('sqlite:../anpassarna.db');

// Kontrollera om det skickades med ett ID för att ta bort
if(isset($_GET['id'])) {
    // Förbered SQL-frågan för att ta bort posten baserat på ID
    $sql = "DELETE FROM din_tabell WHERE id = :id";
    $stmt = $dbh->prepare($sql);

    // Bind ID-parametern och utför frågan
    $stmt->execute(array(':id' => $_GET['id']));

    // Kontrollera om posten togs bort framgångsrikt
    if($stmt->rowCount() > 0) {
        echo "Posten har tagits bort.";
    } else {
        echo "Det gick inte att ta bort posten.";
    }
} else {
    echo "Inget ID skickades för att ta bort posten.";
}

?>
<br>
<button onclick="window.location.href='../admin.php';">Start sida</button>