<?php

include('ConnectDB.php');

if (!$dbConnection) {
	die('Could not connect to LKO foods database');
} else {
	$name = $_POST['name'];
	$star = $_POST['star'];
	$review = $_POST['review'];

	$insertQuery = "insert into UserReviews(name, star, review) values('$name', '$star', '$review')";

	if (!mysqli_query($dbConnection, $insertQuery)) {
		die('Could not execute sql query ' . mysqli_error($dbConnection));
	} else {
		include('modal.html');
	}
}
mysqli_close($dbConnection);

?>