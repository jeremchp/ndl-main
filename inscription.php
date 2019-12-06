
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <meta charset="utf8">
    <link rel="stylesheet" href="./stylecontact.css" />
    <script type="text/javascript" src="inscription.js"></script>
  </head>

  <header>
          <ul id="nav">
              <li><a href="acceuil.html">Accueil</a></li>
              <li><a href="acceuil.html">Matchmaking</a></li>
              <li><a href="./lesservice.html">Services disponibles</a></li>
              <li><a href="./contact.html">Contact</a></li>
              <li><a href="./inscription.php">Inscription</a></li>
          </ul>
  </header>

  <body>
    <div class="aller">

    <h1>Inscrivez-vous sur notre site !</h1>

    <form action="#" method="post">
      <div>
          <label for="pseudo">Pseudo :</label>
          <input type="text" id="pseudo" name="pseudo">
      </div>
      <div>
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" name="password">
      </div>
      <div class="button">
          <button type="submit" name="save" id="save">Envoyer le message</button>
      </div>
  </form>
  <p class="MASTA">Choisisez une icône : </p>

  <div id="banner">
    <div class="inline-block" onclick=procedure() >
    <img src ="./img/JeanCloud.png">
    </div>

    <div class="inline-block" onclick=procedure() >
    <img src ="./img/JeanCloud.png">
    </div>

    <div class="inline-block" onclick=procedure() >
    <img src ="./img/JeanCloud.png">
    </div>

    <div class="inline-block" onclick=procedure() >
    <img src ="./img/JeanCloud.png">
    </div>

    <div class="inline-block" onclick=procedure() >
    <img src ="./img/JeanCloud.png">
    </div>
</div>


  </div>

  </body>
</html>
