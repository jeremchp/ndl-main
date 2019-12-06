<?php
  error_reporting(E_ALL ^ E_DEPRECATED);
  if(isset($_POST['mail']) && isset($_POST['msg']))
  {
    $mail = new PHPMailer();
    
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = 'stjoseph'; $mail->Port = 25;
    $mail->SMTPAutoTLS = false;
    $mail->setFrom($_SESSION['user']->courriel, $_SESSION['user']->prénom);

    $count = 0;
    foreach ($inscrits->getAll() as $c)
    {
        if ($c->validation === "")
        {
            $mail->addAddress($c->courriel, $c->prénom . ' ' . $c->nom);
            $count++;
        }
    } 


    $mail->CharSet = "UTF-8";
    $mail->Subject = $_POST['subject'];
    $mail->Body = $_POST['body'];

    if (!$mail->send()) {
//        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo '<h3>Message sent!</h3>';
    echo "<p>Vous avez envoyé " . $count . " mail</p>";
    }
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link rel="stylesheet" href="stylecontact.css" />
  </head>
  <body>
    <h1>Si vous avez un problème, contactez-nous : </h1>
    <div class=ContactIMG>
        <img class=contactImg src="" alt="LE GUIDE">
    </div>


    <form action="#" method="post">
      <div>
          <label for="name">Nom :</label>
          <input type="text" id="name" name="name">
      </div>
      <div>
          <label for="mail">e-mail :</label>
          <input type="email" id="mail" name="mail">
      </div>
      <div>
          <label for="msg">Message :</label>
          <textarea id="msg" name="msg"></textarea>
      </div>
      <div class="button">
          <button type="submit">Envoyer le message</button>
      </div>
  </form>
    <div class=Other>
        <h3>Informations complémentaires</h3>
        <p>Nom : Mironnau</p>
        <p>Prénom : Jacque</p>
        <p>Tél : 07 87 82 91 39</p>
        <p>Fax : 0123457689 </p>
    </div>
  </body>
</html>