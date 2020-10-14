function mobiNav() {
	var nav = document.getElementById('nav');
	if (nav.className === 'topnav') {
		nav.className += ' responsive';
	}else{
		nav.className = "topnav"
	}
}