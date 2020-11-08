<?php
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
  ?>