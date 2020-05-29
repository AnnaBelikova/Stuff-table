<?php

    $id=$_POST['id'];
    $name=$_POST['name'];
    $surname=$_POST['surname'];
    $date_of_hiring=$_POST['date_of_hiring'];
    $position=$_POST['position'];
    $homework=$_POST['homework'];
    $city=$_POST['city'];
    $street=$_POST['street'];
    $house=$_POST['house'];
    $flat=$_POST['flat'];
    $date_of_birth=$_POST['date_of_birth'];
    $place_of_birth=$_POST['place_of_birth'];
    $nationality=$_POST['nationality'];
    $family=$_POST['family'];
    $children=$_POST['children'];
    $education=$_POST['education'];
    $educational_institution=$_POST['educational_institution'];
    $document_education=$_POST['document_education'];
    $specialization=$_POST['specialization'];
    $year_of_graduating=$_POST['year_of_graduating'];
    $course_specialization=$_POST['course_specialization'];
    $year_of_course_finishing=$_POST['year_of_course_finishing'];
    $car_licanse=$_POST['car_licanse'];
    $language=$_POST['language'];
    $language_level=$_POST['language_level'];

    
    require_once 'connect.php';
    
    if($connect){
        echo 'Success';
    }else{
        echo 'Error';
    }
	
       SET `text` = 'The very first news'
       WHERE `id` = 1;
    echo $name;
    $sql =  "UPDATE `add_workers` SET `image`='$sql_path',`name`='$name',`surname`='$name',`date_of_hiring`='$date_of_hiring', `position`='$position' WHERE `id`=$id";

    if (mysqli_query($connect, $sql)) {
      echo "Работник изменен";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);
    ;?>