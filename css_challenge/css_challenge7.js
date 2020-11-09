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
// add mouseover & mouseout event listeners to latestwork items
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

//add motal images effect to all demo <a> tag
let demoLinks = document.querySelectorAll(".imgLink");
//Get the slideshow container
let slideshowContainer = document.querySelector(".slideshow-container")
//get the slide image tag
let slideImg = document.querySelector(".slideshow-container img")
//add clickevent Listeners to all demoLinks for tiggering the image slides
demoLinks.forEach(
  function(element){
    element.addEventListener("click", function(e){
      e.preventDefault(); 
      slideshowContainer.style.display = "block";
      //make the iamge slides show the clicked item's image
      slideImg.src = e.target.href;
    })
  })

//Next/previous controls

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let items = ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6"]
function showslideImg(i){
  if(i < 0){
    slideImg.src = `../images/portfolio/item-${items.length-1}.jpg`
  }else if(i > (items.length + 1)){
    slideImg.src = `../images/portfolio/${items[0]}.jpg`
  }
  slideImg.src = `../images/portfolio/item-${i}.jpg`
}

nextBtn.addEventListener("click", function(){
  i += 1;
  showslideImg(i);
});

prevBtn.addEventListener("click", function(){
  i -= 1;
  showslideImg(i);
});

// Get the <span> element that closes the modal
let closeBtns = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
closeBtns.forEach(
  function(element){
    element.addEventListener("click", function(){
      slideshowContainer.style.display = "none";
    })
  });