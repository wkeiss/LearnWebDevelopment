let textInput = document.querySelector("textarea#input");
let textInputHeight;
textInput.addEventListener("keydown", function (e) {
	if(textInput.value === ""){
		textInputHeight = 47;
	}else if(e.code === "Enter"){
		textInputHeight += 25;
	}
	textInput.style.height = textInputHeight + "px";
})