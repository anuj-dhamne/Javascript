// for of loops 

const arr=["one","two","three","four"];
let count=0;
for (const ele of arr) {
    // console.log(ele);
    count+=ele
}
console.log(`Count is ${count}`);
for (const e of "ANUJDHAMNE") {
    // console.log(e);
}

// ********** Forof on map ************
const map=new Map();
map.set("a","apple");
map.set("b","ball");
map.set("c","cat");
// console.log(map);
for (const [key,value] of map) {
    // console.log(`key : ${key} & value : ${value}`);
}

// ********* loops forin objects *************

const myObj={
    a:"apple",
    b:"ball",
    c:"cat",
    d:"dog"
}
for (const key in myObj) {
    console.log(`key : ${key} & value : ${myObj[key]}`);
}
// ********forin on array ******
for (const val in arr) {
    //  console.log(arr[val]);
}
// *******forEach on array ************

// arr.forEach((ele)=>{
//     console.log(ele);
// })

function print(e){
    console.log(e);
}
arr.forEach(print);// using refernce

// ******** foreach on array of object*******

const newObj=[
    {
       langName:"javascript",
        langFilename:"js"
    },
    {
       langName:"python",
        langFilename:"py"
    },
    {
        langName:"java",
        langFilename:"java"
    }
]
newObj.forEach((item)=>{
    console.log(`The Language name ${item.langName} has file extension : ${item.langFilename}`);
})


