//operators
//String manipulation
//Array functions
//operation on object 
//conditional statements
//looping statements

//operators
//arithematic operators 
console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);

//conditional operators
//logical operators
//assignment operators
//string operators


//string literals
var firstName = 'virat';
var secondName = 'kohli';
console.log(`Full name:  ${firstName} ${secondName}`);

// var -> can be reassigned and redeclared(global scope)
// let -> can be reassigned but not redeclared(block scope)
// const -> cannot be reassigned and cannot be redeclared(block scope)

var name = 'john';
name = 'Rohit';//reassignment
var name = "arjun"; //redeclaration

let age = 12;
age = 25;
//let age = 18; cann't redeclare

const city= 'bang';
//city ='mumbai'; cann't reassign
//const city = 'chennai'; cann't redeclare

//hoisting -> 


//conditional statement
//if
//if..else
//nested if
//switch 


//looping statements
//for loop
//while loop
//for in

//Array ->[]
var fruits =['apple', 'orange', 'mango'];
console.log(fruits);

//Array
for(var i=0; i<fruits.length;i++){ //initialization, condition, incrementation
    console.log(fruits[i]);
}

for(var fruit of fruits){ // give us the value
    console.log(fruit);
}

for(var x in fruits){  // give us the index
    console.log(fruits[x]);
}


//while
var value =5;
while(value > 0){
    console.log(value);
    value--; 
}

//MRF methods in Array
//Map
//Reduce
//Filter

var array = [1,2,3,4,5];
array.map( (value)=>{
    console.log(value);
})

//map -> map will return each element
//forEach -> this will iterate each element

var filterOut =array.filter((value)=>{
    return value>3;
})
console.log(filterOut);

const reduceOutput = array.reduce((acc,value) =>{
    return acc+value;
})

console.log(reduceOutput);


