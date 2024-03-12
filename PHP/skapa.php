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
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establish a PDO connection to the SQLite database
    $dbh = new PDO('sqlite:../anpassarna.db');

    // Collect and sanitize the input
    $username = htmlspecialchars($_POST['uname']);
    $password = htmlspecialchars($_POST['psw']);

    // Hash the password for secure storage
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        // Prepare the SQL statement to insert a new user
        $stmt = $dbh->prepare("INSERT INTO admin (username, password) VALUES (:username, :password)");

        // Bind the parameters to the SQL query to prevent SQL injection
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashedPassword);

        // Execute the SQL statement
        $stmt->execute();

        // Redirect or inform the user of success
        echo "Användare skapad!";
    } catch (PDOException $e) {
        // Handle any errors, such as issues with the database connection or if the username already exists
        die("Kunde inte skapa användaren: " . $e->getMessage());
    }
}
?>
