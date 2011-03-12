<?php
  include_once 'template.php';
  template_first_part("Title here");
?>

<div id="content" class="container_12">

<div id="left-content" class="grid_4 ">
  <div id="left-title">
  <div id="left-title-big">
    Venetian Spaces:
  </div>
  <div id="left-title-small">Panoramas</div>
  </div>
    <table id="thumbs">
      <tr>
       <td><img src="images/galleries/spaces/space_01_thumb.jpg"
                alt="Misericordia"/></td>
       <td><img src="images/galleries/spaces/space_02_thumb.jpg"
                alt="Glass globes"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_03_thumb.jpg"
                alt="Papafava"/></td>
       <td><img src="images/galleries/spaces/space_04_thumb.jpg"
                alt="Arsenale"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_05_thumb.jpg"
                alt="Troughs"/></td>
       <td><img src="images/galleries/spaces/space_06_thumb.jpg"
                alt="Bathroom"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_07_thumb.jpg"
                alt="Nativity"/></td>
       <td><img src="images/galleries/spaces/space_08_thumb.jpg"
                alt="Evangelista sculpture"/></td>
      </tr>
    </table>
</div>

<div id="right-content" class="grid_8 ">
  <div id="galleries_title">The Life in Death in Venice</div>
  <div id="big_img_one">
    <img id="BigOne" src="images/galleries/spaces/space_01.jpg" alt="Misericordia"/>
  </div>
</div>

</div>

<?php
  template_last_part()
?>