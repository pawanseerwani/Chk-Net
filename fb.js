var chlds = document.querySelectorAll(".anchorContainer span");

[].forEach.call(chlds, function(span) {
// do whatever
content = span.innerHTML
if (content.indexOf("like your") >0 )
{
console.log(content;
	a = getClosest(span,"a")
	a_container = a.parentNode;
	a_container.querySelectorAll("")
console.log("gotch ya");

//	break;
}
});

function getClosest(el, tag) {
  // this is necessary since nodeName is always in upper case
  tag = tag.toUpperCase();
  do {
    if (el.nodeName === tag) {
      // tag name is found! let's return it. :)
      return el;
    }
  } while (el = el.parentNode);

  // not found :(
  return null;
}

