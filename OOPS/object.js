function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=3;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
    // return this;
}
createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`${this.username} has price ${this.score}`);
}

const chai=new createUser("chai",50);
const tea=new createUser("tea",250);
chai.printMe();
chai.increment();
chai.printMe();

// console.log(chai.score);
