var I = prompt("What's your feeling?");
var Y = "fuck up";
if (I == null) {
	alert("Are you fucking kidding me?");
}
if (I != Y){
	alert("Fading away");
	window.close();
}
if (I == Y){
    alert("Maybe we should let this go");
	var A = confirm("We falling apart still we hold together");
	if (A == false){
		alert("Blow somke right through the window");
		window.close();
	}
	if (A == true){
		var B = prompt("Cause this is all we know");
		var Z = "All we know";
		if (B != Z){
			alert("Ride your bike up to the road");
			window.close();
		}
	}
}

    function showPic(whichpic) {
	if (!document.getElementById("Placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var Placeholder = document.getElementById("Placeholder");
	if (Placeholder.nodeName != "IMG") return false;
	Placeholder.setAttribute("src",source);
	if (document.getElementById("D")) {
	  var txt = whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
	  var D = document.getElementById("D");
	  if (D.firstChild.nodeType == 3){
	  D.firstChild.nodeValue = txt;
	  }
	}
	return true;
}

function PP(){
	var Placeholder = document.createElement("img");
	var A = document.getElementById("text");
	Placeholder.setAttribute("id","Placeholder");
	Placeholder.setAttribute("src","MyWife.jpg");
	Placeholder.setAttribute("alt","This is my wife");
	Placeholder.setAttribute("width","50%");
	Placeholder.setAttribute("height","50%");
	A.appendChild(Placeholder);
	var D = document.createElement("P");
	var dd = document.createTextNode("Choose an image");
	D.setAttribute("id","D");
	D.appendChild(dd);
	A.appendChild(D);
}

window.onload = function(){
	PP();
	PR();
}

function PR(){
	if (!document.getElementsByTagName || !document.getElementById) return false;
	if (!document.getElementById("Placeholder")) return false;
	var links = document.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		if (links[i].getAttribute("class") == "997"){
			links[i].onclick = function(){
				return !showPic(this);
			}
		}
	}
}

function CountBodyChildren() {
	var body_elements = document.getElementsByTagName("body")[0];
	alert(body_elements.nodeType);
}
