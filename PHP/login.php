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

    // Prepare SQL statement to select user based on username only
    $stmt = $dbh->prepare("SELECT * FROM admin WHERE username = :username");
    
    // Bind parameters
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    
    // Execute the statement
    $stmt->execute();

    // Fetch the user
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verify the password if user exists
    if ($user && password_verify($password, $user['password'])) {
        // Set session variable to indicate user is logged in
        $_SESSION['loggedin'] = true;

        // Redirect to admin page
        header("Location: ../Admin.php");
        exit();
    } else {
        // Authentication failed
        echo "<script>alert('Invalid username or password');</script>";
    }
}
?>
