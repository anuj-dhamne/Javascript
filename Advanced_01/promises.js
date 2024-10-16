// // Promise 1
// const promiseOne = new Promise(function(resolve,reject){
//     // We do any asynchronus task 
//     setTimeout(()=>{
//         console.log("Async task 1 is completed ! ");
//         resolve();

//     } ,2000);

// })

// promiseOne.then(()=>{
//     console.log("Promise 1 Consumed");
// });

// // we can do above task in one step 
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async task 2 ");
//         resolve();
//     })
// },1000).then(()=>{
//     console.log("Async 2 is resolved ");
// })


// //  third promise 

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"anuj",email:"anuj@example.com",age:"20"});
//     },4000);
// })
// promiseThree.then((user)=>{
//     // console.log(user);
//     console.log(`The user = ${user.username} with the age ${user.age} has the email : ${user.email}`);
    
// })

// preomise 4

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name:"anuj",email:"anuj@example.com"})
        }else{
            reject("Error Something Went Wrong");
        }
    },2000);
})

promiseFour.then((user)=>{
    console.log("user : ",user);
    return user.name;
}).then((name)=>{
    // console.log("user name : "+name);
}).catch((error)=>{
// console.log(error);
}).finally(()=>{
    // console.log("Promise is either resolved or rejected");
})

//  promise 5

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({name:"javascript",email:"js@example.com"})
        }else{
            reject("Error JS Went Wrong");
        }
    },2000);
})
 
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        // console.log(response);
    }catch(error){
        // console.log(error);
    }
}
consumePromiseFive();

async function getUsers(){
   try{
    const response =await fetch("https://api.github.com/users/hiteshchoudhary");
   const data= await response.json()
    // console.log("Name : "+data.name);
    // console.log(data);
    
   }catch(error){
    console.log(error);
   }
}

getUsers();

fetch("https://api.github.com/users/hiteshchoudhary").then((response)=>{
return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error : ",error);
})