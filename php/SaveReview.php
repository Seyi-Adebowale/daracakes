<?php

include('ConnectDB.php');

if (!$dbConnection) {
    die('Could not connect to LKO foods database');
} else {
    // Get user inputs and sanitize them
    $name = mysqli_real_escape_string($dbConnection, $_POST['name']);
    $star = mysqli_real_escape_string($dbConnection, $_POST['star']);
    $review = mysqli_real_escape_string($dbConnection, $_POST['review']);

    // Check if star rating is greater than 0
    if ($star > 0) {
        // Use prepared statement to insert data
        $insertQuery = "INSERT INTO UserReviews (name, star, review) VALUES (?, ?, ?)";

        // Prepare the statement
        $stmt = mysqli_prepare($dbConnection, $insertQuery);

        if ($stmt) {
            // Bind parameters
            mysqli_stmt_bind_param($stmt, "sss", $name, $star, $review);

            // Execute the statement
            if (mysqli_stmt_execute($stmt)) {
                // Redirect to the success page
                header("Location: modal.html");
                exit();
            } else {
                die('Could not execute sql query.');
            }

            // Close the statement
            mysqli_stmt_close($stmt);
        } else {
            die('Could not prepare sql statement.');
        }
    } else {
        // Display JavaScript alert
        echo '<script>alert("Submission received");</script>';
    }
}

// Close the database connection
mysqli_close($dbConnection);

?>
