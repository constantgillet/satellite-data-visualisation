<?php

include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$sql = 'SELECT class_of_orbit FROM satellites';
$stmt = $pdo->query($sql);
$result = $stmt->fetchAll();

$MEO = 0;
$LEO = 0;
$GEO = 0;
$Elliptical = 0;

foreach ($result as $key => $satellite) {
    switch ($satellite->class_of_orbit) {
        case 'MEO':
            $MEO++;
            break;
        case 'LEO':
            $LEO++;
            break;
        case 'GEO':
            $GEO++;
            break;
        case 'Elliptical':
            $Elliptical++;
            break;
    }
}


$class_of_orbit = [
    'MEO' => $MEO,
    'LEO' => $LEO,
    'GEO' => $GEO,
    'Elliptical' => $Elliptical,
];

http_response_code(200);
echo json_encode($response = array('status' => 'success', 'class_of_orbit' => $class_of_orbit));