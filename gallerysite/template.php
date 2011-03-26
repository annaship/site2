<?php
function template_first_part($title) {
  $title = "Holly Smith Pedlosky, Photographer";
  echo '
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="Description" content="Holly Smith Pedlosky. Photographer"/>
      <meta name="keywords" content="Venice, Venetian women, casalinga, casalinghe,
      Italy, Italian laundry, panoramas, Venetian housewives, Italian housewives,
      art of hanging laundry, Sibyls, Cumaean Sibyl, Venetian art, suspended fabric,
      Aphrodite’s girdle, Madonna’s girdle, Madonna, the Virgin, Gladys Krieble Delmas Foundation,
      Queen of Sheba, La Fenice, phoenix, Adobe Photoshop, Lares and Penates,
      household gods, goddesses, mamma, floating photographic emulsions, Minor White,
      Elvis, Marilyn, Reitia, Lakesis, the Fates, Venus, Aphrodite, Giorgione,
      Judith, Europa, Zuccarelli, Veronika, Veronica, veil, Palma Vecchio"/>
      <title>' . $title . '</title>
  <link rel="stylesheet" href="css/reset.css"/>
  <link rel="stylesheet" href="css/text.css"/>
  <link rel="stylesheet" href="css/960.css"/>
  <link rel="stylesheet" href="css/dropdown_menu.css"/>
  <link rel="stylesheet" href="css/style.css"/>
  <script src="scripts.js"></script>
</head>
<body>
 ';
include("include/header.html");
}

function template_last_part($bottom_menu_type="") {
  include("include/footer.php");
  echo '
  </body>
  </html>
  ';
}
?>
