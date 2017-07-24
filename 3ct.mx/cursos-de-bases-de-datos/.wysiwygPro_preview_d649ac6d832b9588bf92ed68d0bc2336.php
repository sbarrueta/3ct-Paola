<?php
if ($_GET['randomId'] != "SpDbwuoFOej1JB4JHf0WNi09JXZaNvlkZAqGjmaDofYjQMR0flwpgK9mrxnzJHMi") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
