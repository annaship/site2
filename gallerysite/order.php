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
  <div id="right-text">
    <div id="right-text-title">
      To Order a Print:
    </div>

    <p>Prints for all images on this website can be ordered, in different sizes.</p>
    
    <div class="big-text">All prints are <span class="cap">archival pigment prints</span>.</div>
    <p>
    The prices for unmounted prints are:</p>
    
    <table class="price-table">
      <tr>
        <td>12&quot;&times;18&quot;: </td><td>&nbsp;&#36;300</td>
      </tr>
      <tr>
        <td>7&quot;&times;10&quot;:</td><td>&nbsp;&#36;200</td>
      </tr>
      <tr>
        <td>4&quot;&times;6&quot;:</td><td>&nbsp;&#36;100</td>
      </tr>
    </table>
<!--    <p>12&quot;&times;18&quot; &#36;300</p>
    <p>7&quot;&times;10&quot;: &#36;200</p>
    <p>4&quot;&times;6&quot;: &#36;100</p>-->
    <p>plus postage</p>

    <p>for larger prints, up to 20&times;30 inches, please contact Holly:</p>
    <p><a href="mailto:hollysmithpedlosky@italyphotoworkshops.org">hollysmithpedlosky@italyphotoworkshops.org</a></p>

  </div>
</div>

</div>
<!--<div class="clear"></div>-->

<?php
  template_last_part()
?>
