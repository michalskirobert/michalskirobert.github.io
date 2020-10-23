<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = "新しいメッセージを受け取りました";
    $email_subject2 = "LA TABLE N: 新しいメッセージを受け取りました";

    $email_body =
    "名前: $name.\n".
    "メール: $visitor_email.\n".
    "メッセージ: $message.\n";

    $to = 'majointa@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "La table N.\n返信はお問い合わせ後、2日以内にさせていただきます。\nレッスンのお申し込みについては、【申込みフォーム】からお願い致します。\n>携帯キャリアメールで受信をご希望の方は、@gmail.comからのメールを受信できるよう設定をお願い致します。 \r\n";
    mail($to,$email_subject2,$email_body,$headers);

?>
