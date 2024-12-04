//  In this, we injecting a property called "truelength" for calculating exact length of a string without extra spaces 

String.prototype.trueLength =function (){
    return (this.trim().length);
}
let name="Anuj     ";
console.log(name.length);
console.log(name.trueLength());





// Inheritance 
const vechicle={
    wheels:4
};
const honda={
    color:"black"
};
// Old Syntax ...
// vechicle.__proto__=honda;

// modern syntax
Object.setPrototypeOf(vechicle,honda);

// vechicle can use the property of honda 
console.log(vechicle.color)




