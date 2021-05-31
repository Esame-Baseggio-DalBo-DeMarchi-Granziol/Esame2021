<?php
header('Content-Type: application/json');
require_once('db.php');
$json = file_get_contents('php://input');
$data = json_decode($json);
$result = mysqli_query($con,$data -> query);
$data = array();
foreach ($result as $row) $data[] = $row;
mysqli_close($con);
echo json_encode($data);
?>
