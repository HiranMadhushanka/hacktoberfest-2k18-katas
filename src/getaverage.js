var n=prompt("number of subjects");
average(n);
function average(n){
var count=0;
for(var x=1;x<=n;x++){
	var y=parseInt(prompt("number"));
	count=count+y;
}
document.write("Average= "+count/n);
}
