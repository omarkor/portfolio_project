/* let arr = [79,78, 72, -82]
let l1= [] ;
let l2=[];
for (let i = 0; i < arr.length; i++) {
  if(i%2===0){
    l1.push(arr[i])
  }else{
    l2.push(arr[i])
  }

}
let r= l1.concat(l2.reverse())

console.log(r); */
/* var newArr = a.splice(0,2).concat(a.reverse());
console.log(newArr) */
function makeValley(arr) {
    arr1=arr.sort((a, b) => b - a);
    console.log(arr1)
    let l1= [] ;
    let l2=[];
    for (let i = 0; i < arr.length; i++) {
      if(i%2===0){
        l1.push(arr[i])
      }else{
        l2.push(arr[i])
      }
    
    }
    let r= l1.concat(l2.reverse())
    console.log(r)
  }
makeValley([79,78,2, 72, -82])
