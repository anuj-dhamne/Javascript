// object literals 

const user={
    name:"anuj",
    age:20,
    city:"nashik",
    "marks":100
};
// console.log(user);
// console.log(`The name of the user ${user.name} lives in ${user.city}` );
// console.log(`The name of the user ${user["name"]} lives in ${user.city} and having marks ${user["marks"]}` );

user.greeting=function (){
    console.log("Hello");
}
// console.log(user.greeting());


let mySym=Symbol("k");
user[mySym]="key";
console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name"));

const {name:n}=user
console.log(n);