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
        $styrka_höger_arm = $_POST['styrka_höger_arm'];
        $styrka_vänster_arm = $_POST['styrka_vänster_arm'];
        $styrka_höger_ben = $_POST['styrka_höger_ben'];
        $styrka_vänster_ben = $_POST['styrka_vänster_ben'];
        $kryckor = isset($_POST['kryckor']) ? 1 : 0;
        $rullator = isset($_POST['rullator']) ? 1 : 0;
        $rullstol = isset($_POST['rullstol']) ? 1 : 0;
        $manuell_rullstol_hjälpmotor = isset($_POST['manuell_rullstol_hjälpmotor']) ? 1 : 0;
        $elmoped = isset($_POST['elmoped']) ? 1 : 0;
        $permobil = isset($_POST['permobil']) ? 1 : 0;
        $kryckor_till_fordon = isset($_POST['kryckor_till_fordon']) ? 1 : 0;
        $rullator_till_fordon = isset($_POST['rullator_till_fordon']) ? 1 : 0;
        $rullstol_till_fordon = isset($_POST['rullstol_till_fordon']) ? 1 : 0;
        $hjälpmotor_till_fordon = isset($_POST['hjälpmotor_till_fordon']) ? 1 : 0;
        $elmoped_till_fordon = isset($_POST['elmoped_till_fordon']) ? 1 : 0;
        $permobil_till_fordon = isset($_POST['permobil_till_fordon']) ? 1 : 0;
        $anpassad_bil = $_POST['anpassad_bil'];
        $forare_passagerare = $_POST['forare_passagerare'];
        $mindre_personbil = $_POST['mindre_personbil'];
        $storre_personbil = $_POST['storre_personbil'];
        $suv = $_POST['suv'];
        $mindre_transportbil = $_POST['mindre_transportbil'];
        $amerikansk_golvsanktbil = $_POST['amerikansk_golvsanktbil'];
        $minibuss = $_POST['minibuss'];
        $annat_fordon = $_POST['annat_fordon'];
        $vet_ej = $_POST['vet_ej'];


        // Förbered SQL-frågan för att uppdatera posten baserat på ID
        $sql = "UPDATE din_tabell 
        SET fnamn = :fnamn, 
            enamn = :enamn, 
            telnr = :telnr, 
            mail = :mail, 
            styrka_höger_arm = :styrka_höger_arm, 
            styrka_vänster_arm = :styrka_vänster_arm, 
            styrka_höger_ben = :styrka_höger_ben, 
            styrka_vänster_ben = :styrka_vänster_ben,
            kryckor = :kryckor,
            rullator = :rullator,
            rullstol = :rullstol,
            manuell_rullstol_hjälpmotor = :manuell_rullstol_hjälpmotor,
            elmoped = :elmoped,
            permobil = :permobil,
            kryckor_till_fordon = :kryckor_till_fordon,
            rullator_till_fordon = :rullator_till_fordon,
            rullstol_till_fordon = :rullstol_till_fordon,
            hjälpmotor_till_fordon = :hjälpmotor_till_fordon,
            elmoped_till_fordon = :elmoped_till_fordon,
            permobil_till_fordon = :permobil_till_fordon,
            anpassad_bil = :anpassad_bil,
            forare_passagerare = :forare_passagerare,
            mindre_personbil = :mindre_personbil,
            storre_personbil = :storre_personbil,
            suv = :suv,
            mindre_transportbil = :mindre_transportbil,
            amerikansk_golvsanktbil = :amerikansk_golvsanktbil,
            minibuss = :minibuss,
            annat_fordon = :annat_fordon,
            vet_ej = :vet_ej,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = :id";

        // Fortsätt med de andra kolumnerna på samma sätt
        $stmt = $dbh->prepare($sql);

        // Bind parametrarna och utför uppdateringen
        $stmt->execute(array(
            ':fnamn' => $fnamn, 
            ':enamn' => $enamn, 
            ':telnr' => $telnr, 
            ':mail' => $mail, 
            ':styrka_höger_arm' => $styrka_höger_arm, 
            ':styrka_vänster_arm' => $styrka_vänster_arm, 
            ':styrka_höger_ben' => $styrka_höger_ben, 
            ':styrka_vänster_ben' => $styrka_vänster_ben,
            ':kryckor' => $kryckor,
            ':rullator' => $rullator,
            ':rullstol' => $rullstol,
            ':manuell_rullstol_hjälpmotor' => $manuell_rullstol_hjälpmotor,
            ':elmoped' => $elmoped,
            ':permobil' => $permobil,
            ':kryckor_till_fordon' => $kryckor_till_fordon,
            ':rullator_till_fordon' => $rullator_till_fordon,
            ':rullstol_till_fordon' => $rullstol_till_fordon,
            ':hjälpmotor_till_fordon' => $hjälpmotor_till_fordon,
            ':elmoped_till_fordon' => $elmoped_till_fordon,
            ':permobil_till_fordon' => $permobil_till_fordon,
            ':anpassad_bil' => $anpassad_bil,
            ':forare_passagerare' => $forare_passagerare,
            ':mindre_personbil' => $mindre_personbil,
            ':storre_personbil' => $storre_personbil,
            ':suv' => $suv,
            ':mindre_transportbil' => $mindre_transportbil,
            ':amerikansk_golvsanktbil' => $amerikansk_golvsanktbil,
            ':minibuss' => $minibuss,
            ':annat_fordon' => $annat_fordon,
            ':vet_ej' => $vet_ej,
            ':id' => $id
        ));
        
        // Fortsätt med de andra kolumnerna på samma sätt

        // Kontrollera om uppdateringen lyckades
        if($stmt->rowCount() > 0) {
            $message = "Posten har uppdaterats.";
        } else {
            $message = "Det gick inte att uppdatera posten.";
        }
    }

    // Hämta befintlig information från databasen baserat på det angivna ID:et
    $id = $_GET['id'];
    $sql = "SELECT * FROM din_tabell WHERE id = :id";
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
        <!-- Lägg till de nya fälten här -->
        Styrka höger arm: <input type="text" name="styrka_höger_arm" value="<?php echo $result['styrka_höger_arm']; ?>"><br>
        Styrka vänster arm: <input type="text" name="styrka_vänster_arm" value="<?php echo $result['styrka_vänster_arm']; ?>"><br>
        Styrka höger ben: <input type="text" name="styrka_höger_ben" value="<?php echo $result['styrka_höger_ben']; ?>"><br>
        Styrka vänster ben: <input type="text" name="styrka_vänster_ben" value="<?php echo $result['styrka_vänster_ben']; ?>"><br>
        Kryckor: <input type="checkbox" name="kryckor" <?php if($result['kryckor']) echo 'checked'; ?>><br>
        Rullator: <input type="checkbox" name="rullator" <?php if($result['rullator']) echo 'checked'; ?>><br>
        Rullstol: <input type="checkbox" name="rullstol" <?php if($result['rullstol']) echo 'checked'; ?>><br>
        Manuell rullstol med hjälpmotor: <input type="checkbox" name="manuell_rullstol_hjälpmotor" <?php if($result['manuell_rullstol_hjälpmotor']) echo 'checked'; ?>><br>
        Elmoped: <input type="checkbox" name="elmoped" <?php if($result['elmoped']) echo 'checked'; ?>><br>
        Permobil: <input type="checkbox" name="permobil" <?php if($result['permobil']) echo 'checked'; ?>><br>
        Kryckor till fordon: <input type="checkbox" name="kryckor_till_fordon" <?php if($result['kryckor_till_fordon']) echo 'checked'; ?>><br>
        Rullator till fordon: <input type="checkbox" name="rullator_till_fordon" <?php if($result['rullator_till_fordon']) echo 'checked'; ?>><br>
        Rullstol till fordon: <input type="checkbox" name="rullstol_till_fordon" <?php if($result['rullstol_till_fordon']) echo 'checked'; ?>><br>
        Hjälpmotor till fordon: <input type="checkbox" name="hjälpmotor_till_fordon" <?php if($result['hjälpmotor_till_fordon']) echo 'checked'; ?>><br>
        Elmoped till fordon: <input type="checkbox" name="elmoped_till_fordon" <?php if($result['elmoped_till_fordon']) echo 'checked'; ?>><br>
        Permobil till fordon: <input type="checkbox" name="permobil_till_fordon" <?php if($result['permobil_till_fordon']) echo 'checked'; ?>><br>
        Anpassad bil: <input type="text" name="anpassad_bil" value="<?php echo $result['anpassad_bil']; ?>"><br>
        Förare/passagerare: <input type="text" name="forare_passagerare" value="<?php echo $result['forare_passagerare']; ?>"><br>
        Mindre personbil: <input type="text" name="mindre_personbil" value="<?php echo $result['mindre_personbil']; ?>"><br>
        Större personbil: <input type="text" name="storre_personbil" value="<?php echo $result['storre_personbil']; ?>"><br>
        SUV: <input type="text" name="suv" value="<?php echo $result['suv']; ?>"><br>
        Mindre transportbil: <input type="text" name="mindre_transportbil" value="<?php echo $result['mindre_transportbil']; ?>"><br>
        Amerikansk golvsänktbil: <input type="text" name="amerikansk_golvsanktbil" value="<?php echo $result['amerikansk_golvsanktbil']; ?>"><br>
        Minibuss: <input type="text" name="minibuss" value="<?php echo $result['minibuss']; ?>"><br>
        Annat fordon: <input type="text" name="annat_fordon" value="<?php echo $result['annat_fordon']; ?>"><br>
        Vet ej: <input type="text" name="vet_ej" value="<?php echo $result['vet_ej']; ?>"><br>

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
