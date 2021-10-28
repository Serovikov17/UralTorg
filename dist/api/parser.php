<?php

/* set_time_limit(0);
ignore_user_abort(true);

/* ini_set('max_execution_time', '1000'); */

/*$xml = simplexml_load_file("../xml/Tires.xml") or die("Error: Cannot create object");

echo count($xml);
function insert($cae, $name, $width, $height, $diametr, $diametr_out, $load_index, $speed_index, $model, $brand, $season, $is_studded, $tiretype, $runflat, $reinforced) {
    $mysqli = new mysqli('localhost', 'root', 'root', 'uraltorg');

    if(mysqli_connect_errno()) {
        print_f('Соединение не установлено');
        exit();
    }
    $mysqli->set_charset('utf-8');

    $query = "INSERT INTO tires VALUES(null,'$cae', '$name', '$width', '$height', '$diametr','$diametr_out', '$load_index', '$speed_index', '$model', '$brand', '$season', '$is_studded', '$tiretype', '$runflat', '$reinforced')";

    $result = false;

    if($mysqli->query($query)) {
        $result = true;
    }

    return $result;
}

$cae = null;
$name = null;
$width = null;
$height = null;
$diametr = null;
$diametr_out = null;
$load_index = null;
$speed_index = null;
$model = null;
$brand = null;
$season = null;
$is_studded = null;
$tiretype = null;
$runflat = null;
$reinforced = null;


foreach ($xml as $tires_key => $tire) {
    $cae = $tire->cae;
    $name = $tire->name;
    $width = $tire->width;
    $height = $tire->height;
    $diametr = $tire->diameter;
    $diametr_out = $tire->diameter_out;
    $load_index = $tire->load_index;
    $speed_index = $tire->speed_index;
    $model = $tire->model;
    $brand = $tire->brand;
    $season = $tire->season;
    $is_studded = $tire->is_studded;
    $tiretype = $tire->tiretype;
    $runflat = $tire->runflat;
    $reinforced = $tire->reinforced;

    insert($cae, $name, $width, $height, $diametr, $diametr_out, $load_index, $speed_index, $model, $brand, $season, $is_studded, $tiretype, $runflat, $reinforced);
} */

/* echo "<pre>";
print_r($xml);
echo "</pre>"; */



?>