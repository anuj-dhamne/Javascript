// console.log("Anuj");
// console.log("Aaj sgal basics karu");
// console.log(2+2);

let score="33"
// console.log(typeof(score));
let value=Number(score);
// console.log(typeof(value));

let myDate=new Date();
// console.log(myDate.toLocaleString());

// All this stuff get in 0 th index form 
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())

let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate.toDateString());

