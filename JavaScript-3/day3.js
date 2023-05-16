//camel Case:
//my name-> myName
//my address-> myAddress

//SnakeCase



const arr =['A','B','C','D','E'];

//console.log(arr[0]);

//console.log("hello worldcd");

const values = ['A','B','C','D','E'];

//for();
for(var i=1; i<=5; i++){
    for(var j=1; j<5; j++){
        console.log(i,j);
    }
}


var userDetails ={
    firstName:'john',
    lastName:'deo',
    profession:'Architect',
    age:40,
    city:'chennai',
    mobileNumber:9876543210
}


//values in the object can be acessed using key/property name
//values in the array can be accessed using index starts with 0

for(var key in userDetails){
    console.log(userDetails[key]) //userDetails['firstName'] -> john -> call by ref
}

//userDetails['profession]
//userDetails.profession

// JSON -> javascript Object Notation

var newUser ={};// empty object
var newArr =[];

console.log(newUser);

newUser.firstName ='michele';
newUser.lastName ='jordan';

console.log(newUser);

//new keyword with Object
var newUser = new Object();

newUser.firstName ='Arun';
console.log('New User: ',newUser);

//Hosting
//variable is declared on the top of the scope
// mechanism that allows to have the variable to be at the top of the execution or program. it will 
//not throwerror while accessing even before declaring


//var is having global scope
//let ,const having the block scope

//Scope in JS

// Global Scope -> var (Hoisting)
//Block Scope -> let and const (don't support hoisting)
//Function Scope -> var, let and const


//var vs let vs const
//var -> reassign and redeclared and it is a global scoped
//let -> reassign and cannot be redeclared, and it is a block scoped
//const-> cannot be reassigned and cannot be redeclared and it is a block scoped

//XMLHTTPRequest 
// HTTP -> a way to communicate between servers or share data between servers
// HTTP-> client will send request to the server and the server will request for a output and server will give the output as response
//once after the response has been sent to the client, the connection will get terminates

//XMLHTTPRequest -> XML -> Xtensive HTML HTTP Request; built-in function to make HTTP request




