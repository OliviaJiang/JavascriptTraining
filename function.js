var arr1=[1,3,null,5,7], arr2=[2,5,5,7,"13",16,17];
function ClearNullArr(arr)  
{  
   for(var i=0;i<arr.length;i++)  
   {  
     if(arr[i]==null)  
     {  
       arr.splice(i,1);  
     }  
  }  
  return arr;  
}  
function StringToNumber(arr){
	for(var i=0; i<arr.length; i++){
		if(typeof arr[i] == "string"){
			arr[i]=Number(arr[i]);
		}
	}
		return arr;
}
function　merge(left,right){
	var　result=[];
	while(left.length>0&&right.length>0){
		if(left[0]<right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
			}
		}
	return　result.concat(left).concat(right);
}
function　mergeSort(items){
	if(items.length==1){
	return　items;
	}
	var　middle=Math.floor(items.length/2),
	left=items.slice(0,middle),
	right=items.slice(middle);
	return　merge(mergeSort(left),mergeSort(right));
}
console.log(merge(ClearNullArr(arr1), StringToNumber(arr2)));



 


