<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        // Basic login validation (this is for demonstration, replace with a real authentication system)
        if ($username === 'user' && $password === 'password') {
            echo 'Login successful!';
        } else {
            echo 'Invalid username or password.';
        }
    }
?>
