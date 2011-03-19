<div id="footer" class="container_12">

<div class="clear"></div>

<div id="right-footer" class="grid_8 push_4">
  <div id="bottom_menu">

    <table id="menu">
      <tr>
        <td class="first_td"><a href="index.php">Home</a></td>
        <td><a href="copyright.php">Copyright</a></td>
          <?php $gallery_file_name = (basename($_SERVER['PHP_SELF']));
            if ($gallery_file_name == "venetian_laundry.php"
                    || $gallery_file_name == "spaces.php"
                    || $gallery_file_name == "casalinghe.php") {
          ?>
        <td><a href=<?php echo "portfolio_" . $gallery_file_name?>>About the Portfolio</a></td>
          <?php } ?>
        <td><a href="artist.php">About the Artist</a></td>
        <td><a href="order.php">Order a Photograph</a></td>
        <td><a href="mailto:hollysmithpedlosky@italyphotoworkshops.org">Contact Holly</a></td>
      </tr>
    </table>
  </div>
</div>
<div class="clear"></div> <!-- Important! -->

</div>
