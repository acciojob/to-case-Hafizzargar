function toCase(text) {
  // write your code here
	if(text==""){
		return "-";
	}
	let te=text.toLowerCase() + '-' + text.toUpperCase();
	return te;
	
}

const text = prompt("Enter text:");
alert(toCase(text));
