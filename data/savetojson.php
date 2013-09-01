<?php

$json = $_POST['json'];
$info = json_encode($json);

$file = "people.json";
$handle = fopen($file, 'w');
fwrite($handle, $info);
fclose($handle);

?>