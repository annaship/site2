<?php
  include_once 'template.php';
  template_first_part("");
?>
<!-- TODO: footer and header into separate html files and link from other pages
Where is "position: fixed; top: 0px; left: 0px; height: 0px; width: 0px; z-index: 1e+07; "?

-->
<div id="container">
  <div id="header">
    <div class="left_column">
    </div>
    <div class="right_column">
<!--      <div id="header_title">Holly Smith Pedlosky
        <div id="header_subtitle">Photographer</div>
      </div>-->
      <div id="title_img">
        <img alt="Holly Smith Pedlosky. Photographer" src="images/header/header.jpg"/>
      </div>
    </div>
  </div>
  <div id="content">
      <div class="left_column">
        <div id="left_menu">
<!--          <ul id="left_menu">-->
            <ul id="first_level">
              <li>Galleries:</li>
              <ul id="second_level">
                <li>Casalinghe:</li>
                <ul id="third_level"><li>Italian Housewives</li>
                </ul>
              </ul>
              <ul id="second_level">
                <li>Panoramas:</li>
                <ul id="third_level"><li>The Life in Death in Venice</li>
                    <li>Venetian Spaces: Openings</li>
                </ul>
              </ul>
              <ul id="second_level">
                <li>Venetian Laundry</li>
                <ul id="third_level"><li>&amp; the Art of Hanging it</li>
                </ul>
              </ul>
              <ul id="second_level">
                <li>Galleggianti:</li>
                <ul id="third_level">
                  <li>Floating Photographic</li>
                  <li>Emulsions</li>
                </ul>
              </ul>
              <ul id="second_level">
                <li>The Reitia Project:</li>
                <ul id="third_level">
                  <li>Women&nbsp;&amp; Fabric</li>
                  <li>in Venetian Art</li>
                </ul>
              </ul>
            </ul>
            <ul id="first_level">
              <li>Workshops:</li>
              <ul id="second_level">
                <li>Venice, Italy</li>
                <ul id="third_level"><li>September 17-28, 2011</li>
                </ul>
              </ul>
            </ul>
<!--          </ul>-->
        </div>
      </div>
      <div class="right_column">
        <div id="big_img">
          <img alt="Anna&nbsp;&amp; Maria, La Giudecca, Venice" src="images/home_page/big_image.jpg"/>
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