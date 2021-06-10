<?php

$mysqli = new mysqli('localhost', 'root', 'root', 'uraltorg'); // коннект с сервером бд
$mysqli->set_charset('utf-8'); // задаем кодировку

$result = $mysqli->query('SELECT * FROM `tires`'); // запрос на выборку
while($row = $result->fetch_assoc()) // получаем все строки в цикле по одной
{
    $bm = $row['brand'];
    $width = rtrim(rtrim($row['width'], '0'), '.');
    $height = rtrim(rtrim($row['height'], '0'), '.');
    $diameter = rtrim(rtrim($row['diameter'], '0'), '.');
    $load_index = $row['load_index'];
    $speed_index = rtrim(rtrim($row['speed_index'], '0'), '.');
    
    $nameTires = $row['brand'].' '.$row['model'].' '.$width.'/'.$height.' '.$diameter.' '.$load_index.''.$speed_index; // выводим данные */ 
    
    foreach ($row as $key => $value); 
    // выводим данные */
    
    

   /* echo $row[0]['brand']; //John
   echo $row[1]['brand']; */

}
    


?>