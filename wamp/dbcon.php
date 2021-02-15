<?php
    # Opens a connection to the current mySQL instance, using the prospero database
    function open_connection(){
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db     = "prospero";
        $conn   = new mysqli($dbhost, $dbuser, $dbpass, $db) 
                        or die("Connect failed: %s\n". $conn->error);

        return $conn;
    }
    
    # Closes the connection of the given connection instance
    function close_connection($conn) {
        $conn->close();
    }   
?>