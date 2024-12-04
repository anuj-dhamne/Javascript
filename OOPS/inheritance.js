class User {
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log("Logged In");
    }
}
class Teacher extends User{
    constructor(username,email,pass){
        super(username);
        this.email=email;
        this.pass=pass;
    }
}

const t1=new Teacher("anuj","anuj@kkw.com","123");
console.log(t1);
t1.logMe();