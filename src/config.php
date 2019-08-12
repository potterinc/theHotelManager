<?php

define ('SERVER','localhost');
define ('USERNAME','root');
define ('PASSWORD','');
define ('DATABASE','thehotelmanager');

$con = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);
if(!conn)
	die("Unable to connect to server");
