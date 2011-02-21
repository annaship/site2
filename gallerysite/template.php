<?php
function template_first_part($title) {
  echo '
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html>
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
      <link rel="stylesheet" href="style.css">
      <script src="scripts.js"></script>
  </head>
  <body>
    <div id="container">
 ';
include("header.html");
  echo '<div id="content">';

}

function template_last_part() {
  echo '</div>';
  include("footer.html");
  echo '  </div>
  </body>
  </html>
  ';
}
?>
