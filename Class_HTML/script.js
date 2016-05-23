

var names = document.getElementsByClassName('names');
var buttoni = document.getElementById('trigger');
var bucket = document.getElementById("bucket");
buttoni.addEventListener("click", function(){
  bucket.innerHTML="";
  for (var i = 0; i < names.length; i++) {
    var newnode = document.createElement("h1");
    newnode.innerHTML = names[i].value;
    bucket.appendChild(newnode);
  }
});
