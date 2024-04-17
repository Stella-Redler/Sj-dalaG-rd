function showMenu() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('img_vara_hastar');

for(){
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }
}