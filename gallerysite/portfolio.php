<?php
  include_once 'template.php';
  template_first_part("Holly Smith Pedlosky, Photographer");
?>

<div id="content" class="container_12">

<div id="left-content" class="grid_4 ">
  <?php
    include("include/left_menu.html");
  ?>
</div>

<div id="right-content" class="grid_8 ">
  <div id="right-text">
    <div id="right-text-title">
    </div>
      <?php include("potfolios/$portfolio.html"); ?>
  </div>
</div>

</div>

<?php
  template_last_part()
?>
