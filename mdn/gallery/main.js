const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i < 6; i++){
	let path = `images/pic${i}.jpg`;
	let newImage = document.createElement('img');
	newImage.setAttribute('src', path);
	thumbBar.appendChild(newImage);
}

const images = document.querySelectorAll('.thumb-bar img');

for(let i = 0; i < images.length; i++){
	images[i].addEventListener('click', display);
	function display(){
	displayedImage.src = images[i].src;
	}
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeMode);
function changeMode(){
	if (btn.textContent === 'Darken') {
		btn.textContent = 'Lighten';
		overlay.style['background-color'] = 'rgba(0,0,0,0.5)';
	} else {
		btn.textContent = 'Darken';
		overlay.style['background-color'] = 'rgba(0,0,0,0)';
	}
}
