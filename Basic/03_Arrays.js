//  Array 
let arr1=[1,2,3,4,5,6];
// console.log(typeof arr1)

const arr2=new Array(1,2,3,4);
// console.log(arr2.length);
// arr2.push(5);
// console.log(arr2);
// console.log(arr2.pop());
// console.log(arr2);
// arr2.unshift(2);
// arr2.unshift(13);
// console.log(arr2);
// console.log(arr2.shift());
// console.log(arr2);
const newArr=arr2.join()
console.log(typeof newArr)
let sliceArray=arr1.slice(0,3);
// console.log(`sliced Array : ${sliceArray}`)
// console.log(`Existing array : ${arr1}`)

let spliceArray=arr1.splice(2,3);
// console.log(`splice array : ${spliceArray}`);
// console.log(`Existing array : ${arr1}`);

// for adding we use splice 
arr1.splice(1,0,13);
// console.log(arr1);
// console.log(`reverse array : ${arr1.reverse()}`);

const marvel=["ironman","spiderman","thor","hulk"];
const dc=["flash","superman","batman"];
let all=[  ...marvel ,...dc];
console.log(all);

console.log(Array.from("Anuj"));
console.log(Array.from({}))
