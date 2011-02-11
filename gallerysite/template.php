<?php
function template_first_part($title) {
  echo '
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="Description" content="Holly Smith Pedlosky. Photographer"/>
      <meta  name="keywords" content="italy, photo, photographer"/>
      <title>' . $title . '</title>
      <link rel="stylesheet" href="style.css">
      <script src="scripts.js"></script>
  </head>
  <body>
    <div id = "page">
 ';
//  include("header.html");
}

function template_last_part() {
  echo '  </div>
  </body>
  </html>
  ';
}
?>
