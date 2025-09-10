<?php
$host = "localhost";   //  server
$user = "root";        //  MySQL username
$pass = "";            // MySQL password
$db   = "techsolutions"; //  database name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
