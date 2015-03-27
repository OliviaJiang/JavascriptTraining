var totalLength, array, a=0, b=0, c=0,d=0,e=0
var str="Please? be connected to VPN account, when your using Google Drive."
var strNoMark=str.replace(/[^a-zA-Z\s]/g, "");
array = strNoMark.split(" ");
totalLength=array.length
for (i=0; i<array.length;i++){
	if(array[i].length<=4){
		a++
	}
	if(array[i].length==5){
		b++
	}
	if(array[i].length==6){
		c++
	}
	if(array[i].length==7){
		d++
	}
	if(array[i].length>7){
		e++
	}		
}
console.log("<=4 letters are"+Math.round((a/totalLength)*100)+"%\n",
	"=5 letters are"+Math.round((b/totalLength)*100)+"%\n", 
	"=6 letters are"+Math.round((c/totalLength)*100)+"%\n", 
	"=7 letters are"+Math.round((d/totalLength)*100)+"%\n", 
	">7 letters are"+Math.round((e/totalLength)*100)+"%\n");
