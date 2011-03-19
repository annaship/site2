<?php
  include_once 'template.php';
  template_first_part("Title here");
?>

<div id="content" class="container_12">

<div id="left-content" class="grid_4 ">
  <div id="left-title">
    <div id="left-title-big">
      Panoramas
    </div>
  </div>
  <table id="thumbs">
      <tr>
       <td><img src="images/galleries/spaces/space_01_thumb.jpg"
                alt="Biennale sculpture"
                title="Scuola della Misericordia, Biennale 2009"/></td>
       <td><img src="images/galleries/spaces/space_02_thumb.jpg"
                alt="Biennale sculpture"
                title="Palazzo Papafava, Biennale 2009"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_03_thumb.jpg"
                alt="Entryway, palazzo"
                title="Palazzo Papafava, Cannaregio"/></td>
       <td><img src="images/galleries/spaces/space_04_thumb.jpg"
                alt="Renaissance shipyard workshop in renovation"
                title="Capanna, Arsenale"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_05_thumb.jpg"
                alt="Ruin, Arsenale"
                title="Abandoned Workers&#39; Bathroom, Arsenale"/></td>
       <td><img src="images/galleries/spaces/space_06_thumb.jpg"
                alt="Ruin, Arsenale"
                title="Abandoned Workers&#39; Bathroom 2, Arsenale"/></td>
      </tr>
      <tr>
       <td><img src="images/galleries/spaces/space_07_thumb.jpg"
                alt="Ruin, Giudecca dockyard"
                title="Abandoned Dockyard, Giudecca"/></td>
       <td><img src="images/galleries/spaces/space_08_thumb.jpg"
                alt="Sculpture in a gallery"
                title="Gallery, San Giovanni Evangelista"/></td>
      </tr>
    </table>
</div>

<div id="right-content" class="grid_8 ">
  <div id="galleries_title">The Life in Death in Venice</div>
  <div id="big_img_one">
    <img id="BigOne" src="images/galleries/spaces/space_01.jpg" alt="Biennale sculpture"/>
    <div id="big-img-title">Scuola della Misericordia, Biennale 2009</div>
  </div>
</div>

</div>

<?php
  template_last_part();
//  template_last_part('portfolio')
?>
