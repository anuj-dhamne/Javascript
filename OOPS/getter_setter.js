class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return this.new_email.toUpperCase();
    }
    set email(val){
        this.new_email=val
    }
    get password(){
        return `${this.new_password}123`;
    }
    set password(pass){
        this.new_password=pass;
    }

}
const anuj=new User("anuj@ai","abc");
console.log(anuj);
console.log("Email : "+anuj.email);
console.log("password : "+anuj.password);

