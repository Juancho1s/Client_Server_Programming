<?php

$server = '10.0.0.100\DESARROLLODAD';

// Conexión a SQL Server
$link = mssql_connect($server, 'sa', 'D@d2016');

if (!$link) {
    die('Algo fue mal mientras se conectaba a MSSQL');
}

?>
    