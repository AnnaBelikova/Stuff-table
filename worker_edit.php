<?php

    $id=$_POST['worker_id'];
    $name=$_POST['name'];
    $surname=$_POST['surname'];
    $date_of_hiring=$_POST['date_of_hiring'];
    $position=$_POST['position'];
    $homework=$_POST['homework'];
    $city=$_POST['city'];
    $street=$_POST['street'];
    $house=$_POST['house'];
    $flat=$_POST['flat'];
	$department=$_POST['department'];
	$salary=$_POST['salary'];
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
	$course_institution=$_POST['course_institution'];
    $year_of_course_finishing=$_POST['year_of_course_finishing'];
    $car_license=$_POST['car_license'];
    $language=$_POST['language'];
    $language_level=$_POST['language_level'];

    
    require_once 'connect.php';
    

	if(  is_uploaded_file($_FILES["worker_photo"]["tmp_name"])  )
    {
		$new_path = $_SERVER['DOCUMENT_ROOT']."/assets/images/"  . $_FILES["worker_photo"]["name"];
		$sql_path = "http://table.cw44189.tmweb.ru/assets/images/"  . $_FILES["worker_photo"]["name"];
		
		move_uploaded_file
		(
			$_FILES["worker_photo"]["tmp_name"],
			$new_path
		);
		 $sql_img =  "UPDATE add_workers SET image='$sql_path' WHERE id='$id' ";
      	 if (mysqli_query($connect, $sql_img)) {
      	echo "Картинка изменена <br>";
        } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($connect);
        }
	}else{
		echo "Картинка не была изменена <br>";
	}

    $sql =  "UPDATE add_workers SET name='$name', surname='$surname', date_of_hiring='$date_of_hiring', position='$position', homework='$homework', city='$city', street='$street', house='$house', flat='$flat', department='$department', salary='$salary', date_of_birth='$date_of_birth', place_of_birth='$place_of_birth', nationality='$nationality', family='$family', children='$children', education='$education', educational_institution='$educational_institution', document_education='$document_education', specialization='$specialization', year_of_graduating='$year_of_graduating', course_specialization='$course_specialization', course_institution='$course_institution', year_of_course_finishing='$year_of_course_finishing', car_license='$car_license', language='$language', language_level='$language_level'  WHERE id='$id' ";

    if (mysqli_query($connect, $sql)) {
		header("Refresh: 3; url=http://table.cw44189.tmweb.ru/");
      echo "Работник изменен";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);
    ;?>