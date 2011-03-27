var imgNumber;
var thumbObj;

var isEven = function(someNumber){
    return (someNumber%2 == 0) ? true : false;
};


function change_big_one(thumb){
  thumb.style.border='0px';
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
    }
  }

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


function showsrc(thumb){
//  alert(thumb.src.replace("http://localhost/gallerysite/images/galleries/",""));
  thumb.style.border='1px solid';
//  imgNumber = thumb.src.lastIndexOf("0")+1;
  imgNumber = thumb.src.substring(thumb.src.lastIndexOf("0")+1, thumb.src.lastIndexOf("0")+2);
  thumbObj = thumb;
}

function KeyCheck() {
  keyValue = event.keyCode
//  if (imgNumber) {
//    alert(keyValue);
//  }
//  alert(imgNumber);
//  alert(thumbObj.alt);
  thumbObj.style.border='0px';

  if (keyValue == 39) {
    if (!isEven(imgNumber)) {
//      num = parseInt(imgNumber)+1;
//      thumbName = thumbObj.src.replace(/0\d/, '0'+num);
//      document.getElementById('BigOne').src = thumbName.replace("_thumb","");
//      document.getElementById('BigOne').src = thumbName.replace("_thumb","");
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.nextSibling.firstChild;
      }
      else {
        thumb = thumbObj.parentNode.nextSibling.nextSibling.firstChild;
      }
      change_big_one(thumb);
//      document.hasAttribute
//      /html/body/div[3]/div/table/tbody/tr[2]/td/img
//      document.getElementById('BigOne').alt = thumbName.alt;
//      document.getElementById("big-img-title").innerHTML = thumbName.title;
//TODO: make obj or take sibling on the right and pass as an object to change_big_one
    }
  }
}

//12
//34
//56
//78


window.onload = function() {
//  init();
  document.onkeyup = KeyCheck;
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
