<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = "Nowy e-mail ^^";
    $email_subject2 = "$name, thanks for your email~";

    $email_body =
    "Name: $name.\n".
    "E-mail: $visitor_email.\n".
    "Message: $message.\n";

    $to = 'robertxmichalski@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "Hello $name, I will contact you as fast as possible. Thank you for your an e-mail! \r\n";
    mail($to,$email_subject2,$email_body,$headers);

?>
