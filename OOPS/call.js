function setUsername(username){
    this.username=username;
}

function createUser(username,email,pass){
    setUsername.call(this,username);
    this.email=email;
    this.pass=pass;
}

const chai=new createUser("chai","chai@gm.com",123);
console.log(chai);