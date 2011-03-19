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
  <div id="menu-text">
    <div id="menu-text-title">
    </div>
      
  </div>
</div>

</div>

<?php
  template_last_part()
?>
