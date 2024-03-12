<?php
// Starta sessionen
session_start();

// Rensa alla sessionsvariabler
session_unset();

// Förstör sessionen
session_destroy();

// Omdirigera till inloggningssidan eller annan sida
header("Location: ../Login.html"); // Byt ut detta med korrekt sökväg
exit;
?>

