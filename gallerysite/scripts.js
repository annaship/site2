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

function init()
{
    if (document.addEventListener)
    {
       document.addEventListener("keydown",keydown,false);
       document.addEventListener("keypress",keypress,false);
       document.addEventListener("keyup",keyup,false);
       document.addEventListener("textInput",textinput,false);
    }
    else if (document.attachEvent)
    {
       document.attachEvent("onkeydown", keydown);
       document.attachEvent("onkeypress", keypress);
       document.attachEvent("onkeyup", keyup);
       document.attachEvent("ontextInput", textinput);
    }
    else
    {
       document.onkeydown= keydown;
       document.onkeypress= keypress;
       document.onkeyup= keyup;
       document.ontextinput= textinput;   // probably doesn't work
    }
alert("init");
    document.testform.t.value+= '';
    lines= 0;
}


 function addEvent(elm, evType, fn, useCapture)
 // addEvent and removeEvent
 // cross-browser event handling for IE5+,  NS6 and Mozilla
 // By Scott Andrew
 {
   if (elm.addEventListener){
    elm.addEventListener(evType, fn, useCapture);
    return true;
   } else if (elm.attachEvent){
    var r = elm.attachEvent("on"+evType, fn);
    return r;
   } else {
    alert("Handler could not be removed");
   }
 }  

function showsrc(thumb){
  alert(thumb.src.replace("http://localhost/gallerysite/images/galleries/",""));
  thumb.style.border='1px solid';

}

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
    my_obj[i].onmouseover = function() {
      change_big_one(this);
    }
    my_obj[i].onclick = function() {
      showsrc(this);
//      alert("UUU");
//      alert(my_obj[i].src);
//      KeyCheck();
    }

//    my_obj[i].onclick = function() {
//      showresult(event);
//    }
//    my_obj[i].onKeyUp     = alert("U");
//    my_obj[i].onKeyUp     = alert(event.keyCode);
  }
//      function() {showresult(event);}
//	   <input type="text" onKeyUp="keyWasPressed(event)">
//    <script>function keyWasPressed(evt){ alert(evt.keyCode) }</script>


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

//function showresult(e)
//{
//  var keynum
//  alert('HERE '+e);
//
//  if(window.event) // IE
//  {
//    keynum = e.keyCode
//  }
//  else if(e.which) // Netscape/Firefox/Opera
//  {
//    keynum = e.which
//  }
//  alert(keynum);
//  switch(keynum)
//  {
//    case 37:
////      document.getElementById('thumbs').innerHTML="Arrow Left";
//  alert("case37");
//      break;
//    case 39:
////      document.getElementById('thumbs').innerHTML="Arrow Right";
//  alert("case39");
//
//    break;
//  }
//}
function KeyCheck() {
  alert(event.keyCode);
}

//function clickObj() {
//  onclick = alert(this);
//}

window.onload = function() {
//  init();
//  document.onkeyup = KeyCheck;
//  clickObj();
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
