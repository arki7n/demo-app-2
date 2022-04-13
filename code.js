/*
Traverse through an array of indexes to reach the last index. 

If you reach the last index without visiting all the indexes in the array 
	then the array is not a perfect array. 

[2,3,1,4], [3,2,5,4,1,6],  [4,3,0,5,1,2]
Write a function to print whether the given array is perfect or not.

*/

function isArrayPerfect(arr){
    let hmap = {};
    let isLastIndexFound = false;
    let i=0;
  for(; i<arr.length;i++){
          
    if(!hmap[arr[i]]) {
      //console.log(arr[i]);
      hmap[arr[i]] = 1;
      i = arr[i]-1;
    } else {
      hmap[arr[i]] = 0;
    }
  }    
  if(arr[i-1]>=arr.length-1) {
    isLastIndexFound = true;
  }
    const isAllVisited = Object.keys(hmap).every(key=>hmap[key]==1);
    return isAllVisited ? "Perfect" : "Not Perfect";
  //console.log(hmap, isLastIndexFound, {i});
}

isArrayPerfect([2,3,1,4]);
isArrayPerfect([3,2,5,4,1,6]);
isArrayPerfect([4,3,0,5,1,2]);