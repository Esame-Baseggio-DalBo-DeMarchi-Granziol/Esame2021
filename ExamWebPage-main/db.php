<?php //serve alla connessione al database

$login = 
    [
        "host" =>"localhost",
        "user" =>"a",
        "password" => "Baseggio02", 
        "name" =>"testweb"
    ];


if(!$con = mysqli_connect($login['host'], $login['user'], $login['password'], $login['name']))
{
    die("errore di connessione al db");
}
