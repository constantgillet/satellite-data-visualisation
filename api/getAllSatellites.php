<?php

include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$sql = 'SELECT id, satellite_name, country_operator_owner, purpose, launch_site, launch_vehicle FROM satellites';
$stmt = $pdo->query($sql);
$result = $stmt->fetchAll();

http_response_code(200);
echo json_encode($result);
