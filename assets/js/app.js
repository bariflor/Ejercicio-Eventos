function creandoDiv(getURL){
	var contenedor = document.getElementById("contenedor");
	var div = document.createElement("div");
	var img = document.createElement("img");
	img.setAttribute("src", getURL);
	div.classList.add("contenedor-imagen");
	div.appendChild(img);
	contenedor.appendChild(div);
}
var inputURL = document.getElementById("url");
function getURL(e){
	if(e.keycode==13){
		creandoDiv(this.value);
		this.value = "";
	}
}
inputURL.onkeydown = getURL;