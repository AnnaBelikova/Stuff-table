<?php


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
	$homework=$_POST['homework'];
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
    $car_license=$_POST['car_license'];
    $language=$_POST['language'];
    $language_level=$_POST['language_level'];

    
    require_once 'connect.php';
	
	if(  is_uploaded_file($_FILES["worker_photo"]["tmp_name"])  )
    {
		$unik=uniqid();
		$new_path = $_SERVER['DOCUMENT_ROOT']."/assets/images/"  . $unik;
		$sql_path = "/assets/images/"  . $unik;
		
		move_uploaded_file
		(
			$_FILES["worker_photo"]["tmp_name"],
			$new_path
		);
		
	}
	
    $sql = "INSERT INTO `add_workers` ( `image`, `name`, `surname`, `date_of_hiring`, `position`, `department`, `salary`, `city`, `street`, `house`, `flat`, `date_of_birth`, `place_of_birth`, `nationality`, `children`, `family`, `education`, `educational_institution`, `document_education`, `specialization`, `year_of_graduating`, `course_specialization`, `course_institution`, `year_of_course_finishing`, `car_license`, `language`, `language_level`) VALUES ('$sql_path', '$name', '$surname', '$date_of_hiring', '$position', '$department', '$salary', '$city', '$street', '$house', '$flat', '$date_of_birth', '$place_of_birth', '$nationality', '$children', '$family', '$education', '$educational_institution', '$document_education', '$specialization', '$year_of_graduating', '$course_specialization', '$course_institution', '$year_of_course_finishing', '$car_license', '$language', '$language_level' )";
    if (mysqli_query($connect, $sql)) {
		header("Refresh: 3; url=http://table.cw44189.tmweb.ru/");
	  echo "Работник успешно добавлен";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);
    ;?>