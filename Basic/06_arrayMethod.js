// ********** filter +++++++++++++

const arr=[1,2,3]
 let oddArr=arr.filter((n)=>(n%2!=0));
//  console.log(oddArr);

//  ************ map function *******

const arrPlus10=arr.map((n)=>(n+5));
// console.log(arrPlus10);

const arrOddPlus10=arr.map((n)=>(n+10)).filter((n)=>(n%2!=0));
// console.log(arrOddPlus10);

// ************** reduce **********

const result=arr.reduce((acc,curr)=>(acc+curr),10);
console.log(result);

const course=[
    {
        name:"js course",
        price:999
    },
    {
        name:"python course",
        price:1999
    },
    {
        name:"web + DSA course",
        price:9999
    },
    {
        name:"Web D course",
        price:5999
    }
]

const totalValue=course.reduce((acc,item)=>acc+item.price,0);
console.log("Total price : ",totalValue);

