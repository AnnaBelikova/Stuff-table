<?php

$id=$_POST['worker_id'];

require_once 'connect.php';
	$query = "SELECT * FROM add_workers WHERE id = $id ";
	$result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

	$row = mysqli_fetch_assoc($result);
	if ($row["image"]!=''){
		
		unlink($_SERVER['DOCUMENT_ROOT'].'/'.$row["image"]);
	}
	
     $sql ="DELETE FROM add_workers WHERE id = '$id'";
     if (mysqli_query($connect, $sql)) {
	header("Refresh: 2; url=http://table.cw44189.tmweb.ru/");
      echo "Работник удален";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }

mysqli_close($connect);
 

?>