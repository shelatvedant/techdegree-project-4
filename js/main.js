function filterPhoto() {

  var input, filter, ul, li, a;
  input = document.getElementById("userInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("gallery");
  li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  if (a.getAttribute("data-title").toUpperCase().indexOf(filter) > -1) {
    li[i].style.display="";
  }else{
    li[i].style.display = "none";
      }
    }
  }

filterPhoto();
