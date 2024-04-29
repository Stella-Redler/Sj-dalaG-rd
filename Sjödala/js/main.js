function showMenu() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("img_vara_hastar");
var modalImg = document.getElementById("img01");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function show_img() {
  modal.style.display = "block";
  modalImg.src = img[i].src;
});
}

var span = document.getElementsByClassName("close");
if (span.length > 0){
  span[0].addEventListener("click", function() {
      modal.style.display = "none";
})}