<?php
    include 'dbcon.php';
    
    # A function to allow cross-origin requests between front-end and back-end
    function cors() {
        header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Credentials: true');
    }

    # Immediately set headers for response/requests
    cors();
    # Establish connection to mySQL database
    $conn = open_connection();
    # Make sure the request method is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
        exit('Incorrect server request method. Expected POST.');
    }
    # Attempt to prepare the SQL statement
    if (!$prepped_q = $conn->prepare(
                "INSERT INTO product (`title`, `imgUrl`, `price`, `rating`, `description`) 
                        VALUES (?, ?, ?, ?, ?)")) {
        exit('Malformed Query.');
    }
    # Bind the parameters, execute the query, and move the uploaded image into the 
    # assets folder
    $fname = 'assets\\'.$_FILES['img']['name'];
    $prepped_q->bind_param('ssdis', 
                            $_POST['title'], 
                            $fname,
                            $_POST['price'],
                            $_POST['rating'],
                            $_POST['desc'],  
    );
    $prepped_q->execute();
    $prepped_q->close();
    move_uploaded_file($_FILES['img']['tmp_name'], $fname);
    echo 'true';

    # Close mySQL connection
    close_connection($conn);
?>