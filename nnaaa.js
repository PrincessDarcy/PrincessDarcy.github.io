function calculate(){
	var total = 0;
total = total + parseInt(document.getElementById('att').value)+parseInt(document.getElementById('dmg').value)+parseInt(document.getElementById('succ').value)+parseInt(document.getElementById('stat').value)-parseInt(document.getElementById('vit').value);
if(document.getElementById('se').checked == true){
	total = total+1;
}
if(document.getElementById('ne').checked == true){
	total = total-1;
}
if(document.getElementById('se2').checked == true){
	total = total+1;
}
if(document.getElementById('ne2').checked == true){
	total = total-1;
}
if(document.getElementById('crit').checked == true){
	total = total+1;
}
if(document.getElementById('stab').checked == true){
	total = total+1;
}
if(document.getElementById('adapt').checked == true){
	total = total+1;
}
document.getElementById('totaltext').value = total;
}

window.onload = function(){
	document.getElementById('ButtonAction').onclick = function wat(){
		calculate();
	}
}
