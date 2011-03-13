<?php
  include_once 'template.php';
  template_first_part("Title here");
?>

<div id="content" class="container_12">

<div id="left-content" class="grid_4 ">
  <?php
    include("include/left_menu.html");
  ?>
</div>

<div id="right-content" class="grid_8 ">
      <div id="big_img">
        <img alt="Anna&nbsp;&amp; Maria, La Giudecca, Venice" src="images/home_page/big_image.jpg"/>
      </div>
      <div id="big_image_title">Anna&nbsp;&amp; Maria, La Giudecca, Venice</div>
</div>

</div>
<!--<div class="clear"></div>-->

<?php
  template_last_part()
?>
