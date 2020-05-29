<?php
require_once 'connect.php'; // подключаем скрипт
$id=$_POST['id'];
require_once 'connect.php';
    
    if($connect){
        echo 'Success';
    }else{
        echo 'Error';
    }
     
    $sql ="DELETE FROM `add_workers` WHERE id = '$id'";
     if (mysqli_query($connect, $sql)) {
      echo "Работник удален";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);

}
 

?>