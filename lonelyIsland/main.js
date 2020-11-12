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
	postSection.prepend(itemDiv);
	let para = document.createElement("p");
	para.setAttribute("class", "content");
	itemDiv.appendChild(para);
	para.textContent = content;
	let today = new Date(); //refer to https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	let span = document.createElement("p");
	span.setAttribute("class", "date");
	itemDiv.appendChild(span);
	span.textContent = date;
})