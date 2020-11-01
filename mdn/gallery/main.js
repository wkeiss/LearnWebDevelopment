const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i < 6; i++){
	let path = `images/pic${i}.jpg`;
	let newImage = document.createElement('img');
	newImage.setAttribute('src', path);
	newImage.addEventListener('click', display);
	function display(){
		displayedImage.src = path;
	}
	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeMode);
function changeMode(){
	if (btn.textContent === 'Darken') {
		btn.textContent = 'Lighten';
		btn.setAttribute('class', 'light');
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		btn.textContent = 'Darken';
		btn.setAttribute('class', 'dark');
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
