//function highlightLink()
//{
//  var i, menu_tag, thisPage, my_obj;
//  menu_tag = 'navigation';
////  menu_tag = 'bg_menu';
////Get filename from the URL
//	thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
//  my_obj   = document.getElementById(menu_tag).getElementsByTagName('a');
//  for (i=0; i<my_obj.length; i++ )
//	{
//		//Get only the filename from the href of navigation link
//		pageLink = my_obj[i].href.substring(my_obj[i].href.lastIndexOf("/")+1,
//      my_obj[i].href.length);
//		if (thisPage == pageLink)
//		{
//			my_obj[i].className = "current";
//		}
//	}
//}

function change_big_one(thumb){
  document.getElementById('BigOne').src=thumb.src.replace("_thumb","");
  document.getElementById('BigOne').alt=thumb.alt;
  document.getElementById("big-img-title").innerHTML = thumb.title;
}

function findimg()
{
  var i, my_obj;
  my_obj = document.getElementById("thumbs").getElementsByTagName('img');
  for (i=0; i<my_obj.length; i++)
  {
    my_obj[i].onmouseover = function() {change_big_one(this);}
  }

//  TODO: change alt and title dinamically
//  for IE need to do selector
  //  var sels = document.getElementsByTagName("SELECT");
//for(var i = 0, maxI = sels.length; i < maxI; ++i) {
//  var sel = sels[i];
//  if(sel == slctFild)
//    continue;  // exclude the current select element
//  sel.selectedIndex = 0;
//}
}

window.onload = function() {
  thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
  if (thisPage == 'venetian_laundry.php' || thisPage == 'spaces.php'
      || thisPage == 'casalinghe.php') {
    findimg();
  }
}

// window.onload = function() {
//   highlightLink();
//   my_popup();
//   thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
//   if (thisPage == 'gallery_holly.php' || thisPage == 'gallery_jardine.php') {
//     findimg();
//   }
// }
