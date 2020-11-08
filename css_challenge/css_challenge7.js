let navIcon = document.querySelector("#nav-icon");

navIcon.onclick = function() {
  var nav = document.getElementById("nav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
};

let occupy = document.querySelector("span");

function changeOccupy(){
	if (occupy.textContent === "DESIGNER") {
		occupy.textContent = "FATHER";
	} else if(occupy.textContent === "FATHER"){
		occupy.textContent = "DEVELOPER";
	}else if(occupy.textContent === "DEVELOPER"){
		occupy.textContent = "DESIGNER";
	}
}

//setInterval(changeOccupy, 2000);
/*
let latestworkContainer = document.querySelector("#latestwork .container");
let overlayStyle = document.querySelector(".item div.overlay").style;
latestworkContainer.addEventListener("mouseover", function(e){
	if(e.target.nodeName === "IMG" && e.target){
		itemIndex = e.target.src[e.target.src.indexOf('item') + 5];
		overlay = document.querySelector(`.item${itemIndex} div.overlay`);
		overlay.style = overlayStyle;
		overlay.style.display = "flex";
	}
})

latestworkContainer.addEventListener("mouseout", function(e){
	if(e.target && e.target.className === "overlay"){
		e.target.style.display = "none";
	}
})
*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}