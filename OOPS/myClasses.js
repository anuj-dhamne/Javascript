class User{
    constructor (username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }

    encrypted(){
        return (`${this.pass}123`);
    }
}
const chai =new User("chai","chai69@fb.com","tea");
// console.log(chai);
chai.encrypted();
console.log(chai);
console.log(chai.encrypted());