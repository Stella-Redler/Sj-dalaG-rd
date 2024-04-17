document.getElementsByClassName(".menu-button").addEventListener("click", displayDate);

function showMenu() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

/*for(let i = 0; i < img_vara_hastar.length; i+=1){
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
}*/
