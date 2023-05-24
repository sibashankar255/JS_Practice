//1.how to compare 2 json have same properties without order?

let obj1 = {name: "person 1", age: 5};
let obj2 = {age: 5, name: "person 1"};

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

//2.