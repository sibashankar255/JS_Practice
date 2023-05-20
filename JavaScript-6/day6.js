//Oops in Js
//Understanding the basics of prototype
//What is classes in js?
//constructor
//need of setters/getters
//use of this key word in classes


 // function checkUserValidity(){
 
// }
 
// checkUserValidity();
// class -> like a container that wraps everything into a single entity. we can have functions, varaibles, objects declared inside the class. we can access the class by creating object with new keyword.
//Class Syntax:
class Student{
    constructor(){
        console.log('Student Constructor is called...')
    }
 
    getStudentsDetails(){
        console.log('Student Details is retrieved.')
    }
 
    getStudentsAcademic(){
        console.log('Student Academic Details is retrieved.')
    }
 
    getStudentsPlacementDetails(){
        console.log('Student Placement Details is retrieved.')
    }
}
 
//Constructor -> is used to create an object and access the class.
 
//This -> is to refer the current/immediate reference of the class. it allows us to declare or assign values to the varaibles that can be accessed within class.
 
 
class Teacher{
    constructor(name, email, subjects, experience){
        //Class variables -> varaibles that are used within the class are known as class variable.
        // Setting a value to the variables -> SETTER
        this.teacherName = name;
        this.teacherEmail = email;
        this.teacherSubjects = subjects;
        this.teacherExperience = experience;
    }
 
    getEverythingAboutTeacher(){
        this.getTeacherDetails();
        this.getTeacherCourseDetail();
        this.getTeacherExperience();
    }
 
    getTeacherDetails(){
        console.log('Teacher Details:')
        //GETTER
        console.log('Name: ', this.teacherName);
        console.log('Email: ', this.teacherEmail)
    }
 
    getTeacherCourseDetail(){
        console.log('Teacher Course Details: ')
        //GETTER
        console.log('Subjects Taken: ', this.teacherSubjects)
    }
 
    getTeacherExperience(){
        console.log('Teacher Experience Details: ')
        //GETTER
        console.log('Experience: ', this.teacherExperience)
    }
}
 
 
//To access a class , you have to create an object.
// new Object(); 
//  class Object{
//     constructor(){
 
//     }
// }
 
 
// const studentObj = new Student(); //created an obj for Student class.
 
// studentObj.getStudentsDetails();
// studentObj.getStudentsPlacementDetails();
 
 
 
const objForJohn = new Teacher('John', 'john@gmail.com', ['math', 'science', 'english'], {role: 'Assistant Professor', yearsOfExp: 9, specialization: 'Computer Science'}); //created an obj for teacher class.
// const objForRohit = new Teacher('Rohit', 'rohit@gmail.com'); 
 
// objForJohn.getTeacherDetails();
// objForJohn.getTeacherExperience();
 
objForJohn.getEverythingAboutTeacher();
 
 
const objForRohit = new Teacher('Rohit', 'rohit@gmail.com', ['history', 'geography', 'civics'], {role: 'Associate Professor', yearsOfExp: 12, specialization: 'Social Science'}); 
 
objForRohit.getEverythingAboutTeacher();
 
 
 
 
// constructor -> constructor is responsible for creating object with or without parameters. constructor is the first one to get executed or called when you create an obj for that class.
 
 
 
 
// prototype -> prototype will give all information about the object and it is responsible for accessing the class functions or variables or other entities outside the class.
 