<?php

include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$sql = 'SELECT expected_lifetime FROM satellites';
$stmt = $pdo->query($sql);
$result = $stmt->fetchAll();

$less_than_five_years = 0;
$between_five_ten_years = 0;
$between_ten_thirty_years = 0;
$unknowed = 0;

foreach ($result as $key => $satellite) {

    if (floatval($satellite->expected_lifetime)) {
        $lifetime = floatval($satellite->expected_lifetime);

        if ($lifetime <= 5) {
            $less_than_five_years++;
        } elseif ($lifetime > 5 && $lifetime <= 10) {
            $between_five_ten_years++;
        } elseif ($lifetime > 10 && $lifetime <= 30) {
            $between_ten_thirty_years++;
        }
    } else {
        $unknowed++;
    }
}

$life_times = [
    'less_than_five_years' => $less_than_five_years,
    'between_five_ten_years' => $between_five_ten_years,
    'between_ten_thirty_years' => $between_ten_thirty_years,
    'unknowed' => $unknowed,
];

http_response_code(200);
echo json_encode($response = array('status' => 'success', 'life_times' => $life_times));