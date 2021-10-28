<?php

$mysqli = new mysqli('localhost', 'root', 'root', 'uraltorg'); // коннект с сервером бд
$mysqli->set_charset('utf-8'); // задаем кодировку

$result = $mysqli->query('SELECT * FROM `tires`');

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
    $width = rtrim(rtrim($row['width'], '0'), '.');
    $height = rtrim(rtrim($row['height'], '0'), '.');
    $diameter = rtrim(rtrim($row['diameter'], '0'), '.');
    $load_index = $row['load_index'];
    $speed_index = rtrim(rtrim($row['speed_index'], '0'), '.');
    $nameTires[] = $row['brand'].' '.$row['model'].' '.$width.'/'.$height.' '.$diameter.' '.$load_index.''.$speed_index;   

    
    
}
/* $cou = count($rows);
echo '<pre>';
echo $cou; 
echo '<br>'; */
/* echo '<pre>'; */
/* print_r($array[5]["id"]);*/ 
/* print_r($nameTires);
echo '</pre>' ;*/




?>