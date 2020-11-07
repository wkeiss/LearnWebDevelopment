navIcon = document.querySelector("#nav-icon");

navIcon.onclick = function() {
  var nav = document.getElementById("nav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
};

occupy = document.querySelector(".occupy");

function changeOccupy(){
	if (occupy.textContent === "DESIGNER") {
		occupy.textContent = "FATHER";
	} else if(occupy.textContent === "FATHER"){
		occupy.textContent = "DEVELOPER";
	}else if(occupy.textContent === "DEVELOPER"){
		occupy.textContent = "DESIGNER";
	}
}
setInterval(changeOccupy, 3000);
