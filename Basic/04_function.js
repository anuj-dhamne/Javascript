
function sum(a,b){
    console.log(a+b);
    return a+b;
}
let result =sum(2,3);
console.log("result : "+result);

// default parameter
function mul(a,b=3){
    return a*b;
}
console.log(`multiply : ${mul(1)}`)

// function handlingObject(user){
//     console.log(`User ${user.name} did shopping of Rs${user.price}`);
// }
// handlingObject({
//     name:"anuj",
//     price:6969,
//     marks:100,
   
// })
// function expression 
const div=function (a,b=1){
    return a/b;
}

const user={
    name:"anuj",

     welcome : function (){
        console.log(`Hello ${this.name}, welcome to Campulse`);
    }
}
// user.welcome();

const func=function (){
    console.log(this);
}
func();

const func2=()=>{
    console.log(this);
}
func2();

let add2 =(a,b)=>(a+b);//no need to write return when we use ()
let mul2=(a,b)=>{return a*b};//need to write return in {} when we use {}