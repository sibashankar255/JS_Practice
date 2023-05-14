
//MAP -> iterates each elements and returns an array of values
//FILTER -> iterates each elements and returns an array as per the condition given
//REDUCE -> iterates each element and reduces the array to a single value and returns it
//FOREACH -> iterates each elements, but doesnot return anathing

//FIND -> iterates each element and returns one value that is matching the condition.
//JOIN
//PUSH
//POP
//SHIFT -> 
//SLICE
//SPLICE
//findIndex
//

const values =[1,2,3,4,5];

const output= values.find( (value) => {
    if(value%2 ==0){
        return value;
    }
});
console.log(output);

//Splice -> replacing values inside array
//splice(index,deletion,insertion);


