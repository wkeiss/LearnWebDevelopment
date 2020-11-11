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


let postBtn = document.querySelector("#postBtn");
postBtn.addEventListener("click", function(){
	content = textInput.value;
	textInput.value = "";
	let itemDiv = document.createElement("div");
	itemDiv.setAttribute("class", "item");
	let postSection = document.querySelector("#post");
	postSection.appendChild(itemDiv);
	let para = document.createElement("p");
	para.setAttribute("class", "content");
	itemDiv.appendChild(para);
	para.textContent = content;
})