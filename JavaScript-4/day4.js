//Function -> function is a block of code that does a sequence operation at once.
 

// // Normal function
// function myFunc(){
//     console.log('Calling Func 1')
// }
 
// //Parameterized Function
// function myFunc2(value1, value2){
//     if(value1 > value2){
//         return 'Value 1 is greater'
//     }
 
//     return 'Value 2 is greater'
// }
 
 
 
// myFunc();
// const result = myFunc2(40, 5);
// console.log(result);
 
 
// const funcName = () => {
//     console.log('Arrow func is called.')
// }
 
 
 
// const funcName2 = () => {
//     return 'Arrow func returns'
// }
 
// const funcName3 = () => 'Arrow func returns.' //arrow func without return statement but still returns a value;
 
// const funcName4 = () => 2 > 1 //true
 
// funcName();
// const output = funcName2();
// console.log(output);
 
// const output2 = funcName3();
// console.log(output2);
 
// const output3 = funcName4();
// console.log(output3);
 
 
 
// //Recursive function
 
// //Recursive function -> 
// function myFunc(value){
//     console.log('func is called with value: ', value);
//     if(value === 0){
//         return 'Value is 0'
//     }else{
//         return myFunc(--value);
//     }
// }
 
// // myFunc(5) ->  myFunc(4) // 'Value is 0'
// // myFunc(4) -> myFunc(3);// 'Value is 0'
// // myFunc(3) -> myFunc(2); //'Value is 0'
// // myFunc(2) -> myFunc(1); // 'Value is 0'
// // myFunc(1) -> myFunc(0); // 'Value is 0'
// // myFunc(0) -> 'Value is 0'
 
// // 'Value is 0'
 
// const output = myFunc(5);
// console.log(output);
 
// let value = 10;
 
 
// // program to find the factorial of a number
// function addAllNumber(x) {
 
//     // if number is 0
//     if (x == 0) {
//         return 0;
//     }
 
//     // if number is positive
//     else {
//         return x + addAllNumber(x - 1);
//     }
// }
 
// //120
// // factorial(5) -> 5 * factorial(4) -> 5 * 24
// // factorial(4) -> 4 * factorial(3) -> 4 * 6
// // factorial(3) -> 3 * factorial(2) -> 3 * 2
// // factorial(2) -> 2 * factorial(1) -> 2 * 1
// // factorial(1) -> 1 * factorial(0) -> 1 * 1
// // factorial(0) -> 1
 
// // const factorialOf5 = factorial();
// // console.log(factorialOf5)
 
 
// const addition = addAllNumber(5);
// console.log(addition)
 
 
 
// // function myFunc(value1, value2, value3){
// //     console.log(value1, value2, value3);
// // }
 
// // // myFunc(5, 4);
// // myFunc(5, 4 ,3); //Javascript
 
 
// //spread or rest (...)
// ///rest inside the func parameter
 
// function myFunc2(...args){ 
//     console.log(args.length);
//     console.log(args)
 
 
// }
 
// myFunc2(2, 1, 3, 4, 5);
// myFunc2(2,1)
// myFunc2(3)
 
// var values = [1, 2 ,3, 4 ,5];
 
// var result =[...values, 100];
 
// var values2 = ['A', 'B', 'C', 'D'];
 
 
// const result2 = [...values, ...values2];
 
// console.log(result);
// console.log(result2);
 
 
 
 
// //break and continue; -> looping
 
 
 
 
// const values = ['A', 'B', 'C', 'D', 'E'];
 
 
// // for(let i = 0; i < values.length; i++){ //index
// //     if(i === 2){
// //         return;
// //     }
// //     console.log(values[i]);
// // }
// console.log('Using Break.')
// for(let i = 0; i < values.length; i++){ //index
//     if(i === 2){
//         break;
//     }
//     console.log(values[i]);
// }
// console.log('Using Continue.')
// for(let i = 0; i < values.length; i++){ //index
//     if(i === 2){
//         continue;
//     }
//     console.log(values[i]);
// }
 
// // break, continue and return
// // spread and rest
// // normal func, parameterized and arrow function
// // func that returns a value or a func that just execute the line of code.
// // short hand for an arrow func that return a value => 
// // const funcName = () => 5 == 4 //false
 
 
 
// // var values = [1 ,2 ,3 ,4 ,5];
 
// // // const output = values.map((value) => {
// // //     return value * 5
// // // });
 
 
// // (function(){
// //     console.log('Hello World!')
// // })();
 
// // (()=> {
// //     console.log('Hello world from Anonymous func')
// // })()
 
 
// // function myFunc(){
// //     console.log('How are you!')
// // }
 
// // myFunc();
 
 
// var countries = ['india', 'germany', 'france', 'japan'];
 
// // const value1 = countries[0].charAt(0).toUpperCase() + countries[0].slice(1); // I
// // console.log(value1);
 
// const result = countries.map((country) => {
//     return country.charAt(0).toUpperCase() + country.slice(1);
// })
 
// console.log(result)

