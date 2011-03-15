<?php
function template_first_part($title) {
  $title = "Holly Smith Pedlosky, Photographer";
  echo '
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="Description" content="Holly Smith Pedlosky. Photographer"/>
      <meta name="keywords" content="italy, photo, photographer, venice,
      venetian light, photography, photo workshops, holly smith pedlosky,
      george jardine, adobe photoshop, lightroom, lightroom 3,
      digital photography, digital photo, digital techniques,
      digital imaging, raw files, italy photo workshops, adobe evangelist,
      dorsoduro, burano, pensione accademia, villa maravege,
      don orione, la serenissima, international center of photography,
      icp, icp education, venetian lagoon, burano, gatto nero,
      piazza san marco, gondola, vaporetto, zattere, giudecca,
      basilica san marco, palazzo papadopoli."/>
      <title>' . $title . '</title>
  <link rel="stylesheet" href="css/reset.css"/>
  <link rel="stylesheet" href="css/text.css"/>
  <link rel="stylesheet" href="css/960.css"/>
  <link rel="stylesheet" href="css/style.css"/>
  <script src="scripts.js"></script>
</head>
<body>
 ';
include("include/header.html");
}

function template_last_part($bottom_menu_type="") {
  if ($bottom_menu_type == "portfolio") {
    include("include/footer_portfolio.html");
  }
  else {
    include("include/footer.html");
  }
  echo '
  </body>
  </html>
  ';
}
?>
