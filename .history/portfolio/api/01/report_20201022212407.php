<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$category = $_POST['category'];
$other = $_POST ['other'];
$describe = $_POST['describe'];
$page = $_POST['page'];
$lang = $_POST['lang'];

if($visitor_email === ""){
  $visitor_email = "Anonymous";
}

$ID = rand(); "\n.";

$email_from = 'yourwebsite@domain.com';
$email_subject = "Report from $name ID: #yourId-$ID";
$email_subjectVisitor = "$name Hello! Here YourWebsite! We suddenly got your report.";

$email_body =
"Name: $name.\n".
"Category: $category.\n".
"Other: $other.\n".
"Describe: $describe.\n".
"E-mail: $visitor_email.\n".
"Language: $lang.\n".
"Page: $page.\n".
"ID of the report: #yourId-$ID-$ID";

$to = "yourEmailThatYouRecieveTheCopy";
$headers = "From: $email_from \r\n";
$headers .= "Reply To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);

$to = "$visitor_email";
$headers = "From: $email_from \r\n";
$headers .= "Hello $name!\nthank you for helping us to improve our website!\nThat issue will be fixed as soon as possible!\nThis email was automatically generated and is just previewing what you sent.\nPlease don't respond to this email. \r\n";
if (mail($to,$email_subjectVisitor,$email_body,$headers)){
  echo '<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo"  <meta http-equiv=\"refresh\" content=\"5;url=".$_SERVER['HTTP_REFERER']."\"/>";
 echo' <title>Sending report</title>
      <link rel="stylesheet" href="./style/css/report.css">
        <link
      href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900|Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet">
  </head>
  <body>
  <section>
  <h1 class="header-brand">Your LOGO</h1>
  <p id="state">Sending report...</p>
  <div class="container">
      <div class="yellow"></div>
      <div class="red"></div>
      <div class="blue"></div>
      <div class="violet"></div>
  </div>
  </div>
  </section>
        <script>
                   window.setTimeout(state, 2500);
       function state() {
           var stateSent = document.getElementById("state");
           stateSent.innerHTML = `Your report has been sent. <br>
           Thank you to help us to imporve our website <br>
           You will back to previous page within few seconds`;
}
</script>
  </body>
  </html>';
}
  ?>