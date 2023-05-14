//String
//number
//boolean
//Array 
//Object

//variables
var country = 'india'; //String datatype
var age = 3; //number
var isAdult = false; //boolean 

console.log('how are you');

console.log(typeof age);

// array index starts with 0 and end with lenght-1
//use index to fetch a single value from array
var friends =['a', 'b', 'c', 'd', 'e'];

console.log(typeof friends);
console.log('Array value: ',friends);


//JSON object -> Key: value pair enclosed with curly braces{};
var myObject ={
    name: 'abc',
    profession: 'SE',
    email: 'xyz@gmail.com',
    mobileNumber: '1234567890'
};
console.log(typeof myObject);
console.log(myObject['email']);
console.log(myObject.email);


//Functions definition
function myFunc(){
    var name ='abc';
    var city ='banglore';
    var favourite = 'manchsterunited';

    console.log('Name: ',name);
    console.log('City: ',city);
    console.log('Favourite: ',favourite);

}

//Function call
myFunc();

//Parameterized Function
//parameter or argument
function greetUser(username){
    console.log('Happy weekend: ',username);
}

greetUser('michale');

function perimeterOfParallelogram(a,b){
    var perimeter = 2*(a+b);
    console.log('Perimeter: ',perimeter);
}

perimeterOfParallelogram(2,4);

//return the value
function areaOfCircle(radius){
    var area = 3.14*r*r;
    return area;
}

var output = areaOfCircle(3);
console.log(output);

//null - not holding any data
//undefined - not yet defined


