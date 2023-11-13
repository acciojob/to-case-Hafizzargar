function toCase(text) {
  // write your code here
	if(text==""){
		return "-";
	}
	let z=text.toUpperCase();
	 te=text+"-"+z;
	return te;
	
}
let te="";
const text = prompt("Enter text:");
alert(toCase(text));
