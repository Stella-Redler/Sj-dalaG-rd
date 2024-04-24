document.getElementsByClassName(".menu-button").addEventListener("click", displayDate);

function showMenu() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

var modal = document.getElementById("myModal");

var img = document.getElementsByClassName(".img_vara_hastar");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

span.onclick = function() { 
    modal.style.display = "none";
}