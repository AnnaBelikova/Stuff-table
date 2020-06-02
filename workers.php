<?php

require_once 'connect.php';
  $query = 'SELECT * FROM `add_workers`';
  $result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

  $workers = [];

  while($row = mysqli_fetch_assoc($result)) {
    $workers[] = $row;
  }
  echo json_encode($workers);

?>