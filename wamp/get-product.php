<?php
    include 'dbcon.php';
    
    # A function to allow cross-origin requests between front-end and back-end
    function cors() {
        header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept, content-type");
        header('Access-Control-Allow-Credentials: true');
    }

    # Immediately set headers for response/requests
    cors();
    # Establish connection to mySQL database
    $conn = open_connection();
    # Ensure that a GET method was received
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        exit('Incorrect server request method. Expected GET.');
    }

    # Handle the GET request to the server. If GET comes with an id, it retrieves the product
    # that matches that id. If get comes with a search, it sets the proper search parameters and
    # finds all matching products using a "where x like y" query.
    if (isset($_GET['id'])) {
        # If malformed query, exit
        if (!$prepped_q = $conn->prepare('SELECT * FROM product WHERE id=?')) {
            exit('Malformed Query.');
        }
        $prepped_q->bind_param('s', $_GET['id']);
    } else {
        # Not an 'id' search, set parameters to find either all products, or specific products
        $param = '%';
        if (isset($_GET['search'])) {
            $param = '%'.$_GET['search'].'%';
        }
        # If malformed query, exit
        if (!$prepped_q = $conn->prepare("SELECT * FROM product WHERE title like ? or description like ?")){
            exit('Malformed Query.');
        }
        $prepped_q->bind_param('ss', $param, $param);
    }

    $prepped_q->execute();
    $q_result = $prepped_q->get_result();
    $res = array();
    while ($r = $q_result->fetch_assoc()) {
        # Encode image in base64 for use in frontend
        $r['imgUrl'] = 'data:image/jpeg;base64,' . base64_encode( file_get_contents($r['imgUrl']) );
        $res[] = $r;
    }
    # Will always return an array. Will have 0, 1, or more matched products
    echo json_encode($res);

    # Close the prepared statement
    $prepped_q->close();   
    # Close mySQL connection
    close_connection($conn);
?>