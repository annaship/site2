var imgNumber;
var thumbObj;

var isEven = function(someNumber){
    return (someNumber%2 == 0) ? true : false;
};

function removeBorder(thumb) {
    thumb.style.border='0px';
}

function change_big_one(thumb){
        removeBorder(thumb);

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
      showsrc(this);
//      removeBorder(this);
//      TODO: current thumb should be one you moves in?
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
//  thumbObj.style.border='0px';

  if (keyValue == 37) {
    if (isEven(imgNumber)) {
      if (thumbObj.parentNode.previousSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.previousSibling.firstChild;
      }
      else {
        thumb = thumbObj.parentNode.previousSibling.previousSibling.firstChild;
      }
      change_big_one(thumb);
    }
  }
  if (keyValue == 39) {
    if (!isEven(imgNumber)) {
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.nextSibling.firstChild;
      }
      else {
        thumb = thumbObj.parentNode.nextSibling.nextSibling.firstChild;
      }
      change_big_one(thumb);
    }
  }
    if (keyValue == 38) {
    if (imgNumber > 2 && !isEven(imgNumber)) {
      thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild;
//     alert(thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild.attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.previousSibling.childNodes[0].firstChild;
//        todo: check in IE
      }
      else {
        thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild;
      }
      change_big_one(thumb);
    }
    if (imgNumber > 2 && isEven(imgNumber)) {
//     alert(thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].childNodes[0].attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
//        thumb = thumbObj.parentNode.nextSibling.firstChild;
        thumb = thumbObj.parentNode.previousSibling.childNodes[1].firstChild;
      }
      else {
//        thumb = thumbObj.parentNode.nextSibling.nextSibling.firstChild;
        thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].firstChild;
      }
      change_big_one(thumb);
    }
  }
  // down
      if (keyValue == 40) {
    if (imgNumber < 7 && !isEven(imgNumber)) {
      thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild;
//     alert(thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild.attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.nextSibling.childNodes[0].firstChild;
//        todo: check in IE
      }
      else {
        thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild;
      }
      change_big_one(thumb);
    }
    if (imgNumber < 7 && isEven(imgNumber)) {
//     alert(thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].childNodes[0].attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.nextSibling.childNodes[1].firstChild;
      }
      else {
        thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].firstChild;
      }
      change_big_one(thumb);
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
