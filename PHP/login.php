<?php
// Start session to maintain login state
session_start();

// Include database connection here
try {
    $dbh = new PDO('sqlite:../anpassarna.db');
} catch (PDOException $e) {
    exit('Database connection failed: ' . $e->getMessage());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['uname'];
    $password = $_POST['psw'];

    // Prepare SQL statement to protect against SQL injection
    $stmt = $dbh->prepare("SELECT * FROM admin WHERE username = :username AND password = :password");
    
    // Bind parameters
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);
    
    // Execute the statement
    $stmt->execute();

    // Check if a user with the provided username and password exists
    if ($stmt->fetch(PDO::FETCH_ASSOC)) {
        // Set session variable to indicate user is logged in
        $_SESSION['loggedin'] = true;

        // Redirect to admin page
        header("Location: ../Admin.html");
        exit();
    } else {
        // Authentication failed
        echo "<script>alert('Invalid username or password');</script>";
    }
}
?>
