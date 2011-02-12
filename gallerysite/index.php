<?php
  include_once 'template.php';
  template_first_part("");
?>
<!-- TODO: footer and header into separate html files and link from other pages
Where is "position: fixed; top: 0px; left: 0px; height: 0px; width: 0px; z-index: 1e+07; "?

-->
<div id="container">
  <div id="header">
<!--    <div class="two_columns">-->
      <div class="left_column">
      </div>
      <div class="right_column">
        <div id="title_img">
          <img alt="" src="images/header/header.jpg"/>
        </div>
      </div>
<!--    </div>-->
  </div>
  <div id="content">
<!--    <div class="two_columns">-->
      <div class="left_column">
<!--text home thumbs tab-->
      </div>
      <div class="right_column">
        <div id="big_img">
          <img alt="" src="images/home_page/big_image.jpg"/>
        </div>
        <div id="big_image_title">Anna&nbsp;&amp; Maria, La Giudecca, Venice</div>
      </div>
<!--    </div>-->
  </div>
  <div id="footer">
<!--    <div class="two_columns">-->
      <div class="left_column">
      </div>
      <div class="right_column">
<!--         menu-->
        <table id="menu">
          <tr>
            <td><a href="index.php">Home</a></td>
            <td><a href="about_work.php">About the Work</a></td>
            <td><a href="about_artist.php">About the Artist</a></td>
            <td><a href="order.php">Order a Photograph</a></td>
            <td><a href="contact.php">Contact Holly</a></td>
          </tr>
        </table>
      </div>
    </div>
<!--  </div>-->
  </div>

<?php
  template_last_part()
?>