var imgNumber;
var thumbObj;

var isEven = function(someNumber){
    return (someNumber%2 == 0) ? true : false;
};

function addBorder(thumb) {
    thumb.style.border='1px solid';
}

function removeBorder(thumb) {
    thumb.style.border='0px';
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
  }

}

function showsrc(thumb){
  addBorder(thumb);
  imgNumber = thumb.src.substring(thumb.src.lastIndexOf("0")+1, thumb.src.lastIndexOf("0")+2);
  thumbObj = thumb;
}

function KeyCheck(e) {
	var keyValue = e ? e.which : window.event.keyCode;

  removeBorder(thumbObj);

  if (keyValue == 37) {
    if (isEven(imgNumber)) {
      if (thumbObj.parentNode.previousSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.previousSibling.firstChild;
      }
      else {
        thumb = thumbObj.parentNode.previousSibling.previousSibling.firstChild;
      }
      change_big_one(thumb);
      showsrc(thumb);
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
      showsrc(thumb);
    }
  }
    if (keyValue == 38) {
    if (imgNumber > 2 && !isEven(imgNumber)) {
      thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild;
//     alert(thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild.attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.parentNode.previousSibling.childNodes[0].firstChild;
//        todo: check in IE
      }
      else {
        thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].firstChild;
      }
      change_big_one(thumb);
      showsrc(thumb);
    }
    if (imgNumber > 2 && isEven(imgNumber)) {
//     alert(thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].childNodes[0].attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
//        thumb = thumbObj.parentNode.nextSibling.firstChild;
        thumb = thumbObj.parentNode.parentNode.previousSibling.childNodes[1].firstChild;
      }
      else {
//        thumb = thumbObj.parentNode.nextSibling.nextSibling.firstChild;
        thumb = thumbObj.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].firstChild;
      }
      change_big_one(thumb);
      showsrc(thumb);
    }
  }
  // down
      if (keyValue == 40) {
    if (imgNumber < 7 && !isEven(imgNumber)) {
      thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild;
//     alert(thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild.attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.parentNode.nextSibling.childNodes[0].firstChild;
//        todo: check in IE
      }
      else {
        thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[1].firstChild;
      }
      change_big_one(thumb);
      showsrc(thumb);
    }
    if (imgNumber < 7 && isEven(imgNumber)) {
//     alert(thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].childNodes[0].attributes[1].value);
      if (thumbObj.parentNode.nextSibling.nodeType == 1) {
        thumb = thumbObj.parentNode.parentNode.nextSibling.childNodes[1].firstChild;
      }
      else {
        thumb = thumbObj.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].firstChild;
      }
      change_big_one(thumb);
      showsrc(thumb);
    }
  }
}

//12
//34
//56
//78

window.onkeyup = KeyCheck;
window.onload  = function() {
  thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
  if (thisPage == 'venetian_laundry.php' || 
      thisPage == 'spaces.php' ||
      thisPage == 'casalinghe.php' ||
      thisPage == 'galeggianti.php' ||
      thisPage == 'openings.php'
    ) {
    findimg();
    first_thumb = document.getElementById("thumbs").getElementsByTagName('img')[0];
    showsrc(first_thumb);
  }
}
