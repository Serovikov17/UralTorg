<?php

$action = $_POST['action'];

require_once 'connection.php';

switch ($action) {
    case 'init':
        init();
        break;       
}

$discharge = $_POST['discharge'];

require_once 'connection.php';

switch ($discharge) {
    case 'upload':
        initDischarge();
        break;  
}
?>