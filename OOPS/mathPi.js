const descriptor =Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(descriptor);
// descriptor.writable=true;
// console.log(Math.PI);
// Math.PI=4;
// console.log("After changing");
// console.log(Math.PI);
// console.log(descriptor);

const chai={
    name:"masala chai",
    price:25,
    
    orderChai : function(){
        console.log("ye le le")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false
})

chai.name="green tea";
console.log(chai);