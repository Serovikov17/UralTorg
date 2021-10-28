<?php
    function connect() {
       $conn = mysqli_connect( "localhost", "root", "root", "uraltorg");
       if (!$conn) {
           die("connection failed" . mysqli_connect_error());
       }
       return $conn;
    }

    function init() {
        // вывожу список товара
        $conn = connect();
        $sql = "SELECT * FROM `tires` /* WHERE `tiretype` = 'Легковая' */";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $out = array();
            while($row = mysqli_fetch_assoc($result)) {
                $out[$row["id"]] = $row;
            }
            echo json_encode($out);
        } else {
            echo "0";
        }
        mysqli_close($conn);

    }
    /* echo init(); */

    function initDischarge() {
       // открытие XML-файла
       
        $xml = simplexml_load_file("../xml/rest_ekb2.xml");
        $json = json_encode($xml);
        /* $xml = "../xml/rest_ekb2.xml";
        $xmlfile = file_get_contents($xml);
        $new = simplexml_load_string($xmlfile);
        $con = json_encode($new); */
        /* $arrWarehouses = json_decode($json, true); */
        /* $arrWarehouses = array($xml->getName() => $arrWarehouses); */
       /*  $outArray = array();
        $arrOut = array($json);
        foreach($xml as $tire){
            $arrOut[$xml["cae"]] = $arrOut;
        } */
        echo $json;
    } 

?>