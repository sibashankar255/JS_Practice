//Array Methods
//Map, Reduce,  Filter
//Other array methods practiced in the session


//INDEXOF -> 
var arr = [1,4,3,4,5];
const result =arr.indexOf(4,2);
console.log(result);

// function checkUserValidity(){
 
// }
 
// checkUserValidity();
 
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
class Teacher{
    constructor(name, email, subjects, experience = {role: 'Asst. Professor', yearsOfExp: 5, specialization: 'Mathematics'}){
        //Class variables -> varaibles that are used within the class are known as class variable.
        // Setting a value to the variables -> SETTER
        this.teacherName = name;
        this.teacherEmail = email;
        this.teacherSubjects = subjects;
        this.teacherExperience = experience;
 
        console.log('Name: ', this.teacherName);
        console.log('Email: ', this.teacherEmail)
        console.log('Subjects Taken: ', this.teacherSubjects)
        console.log('Teachers Exp: ', this.teacherExperience);
 
    }
 
    getEverythingAboutTeacher(){
        this.getTeacherDetails();
        this.getTeacherCourseDetail();
        this.getTeacherExperience();
    }
 
    getTeacherDetails(){
        console.log('Teacher Details:')
        console.log('Name: ', this.teacherName);
        console.log('Email: ', this.teacherEmail)
    }
 
    getTeacherCourseDetail(){
        console.log('Teacher Course Details: ')
        console.log('Subjects Taken: ', this.teacherSubjects)
    }
 
    getTeacherExperience(){
        console.log('Teacher Experience Details: ')
        console.log('Experience: ', this.teacherExperience)
    }
 
 
    getTeacherOfSameSpcl(teachers){
        //logic
        let filteredTeachers = teachers.filter((teacher) => {
            return teacher.specialization === this.teacherExperience.specialization
        })
 
        return filteredTeachers;
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
 
 
console.log('JOHN:')
const objForJohn = new Teacher('John', 'john@gmail.com', ['math', 'science', 'english']); //created an obj for teacher class.
// const objForRohit = new Teacher('Rohit', 'rohit@gmail.com'); 
 
// objForJohn.getTeacherDetails();
// objForJohn.getTeacherExperience();
 
// objForJohn.getEverythingAboutTeacher();
 
console.log('ROHIT:')
const objForRohit = new Teacher('Rohit', 'rohit@gmail.com', ['history', 'geography', 'civics'], {role: 'Associate Professor', yearsOfExp: 12, specialization: 'Social Science'}); 
 
 
let teacherList = [
    {
        role: 'Professor',
        yearsOfExp: 12,
        specialization: 'Social Science'
    },
     {
        role: 'Head Of Department',
        yearsOfExp: 20,
        specialization: 'Chemistry'
    },
     {
        role: 'Senior Professor',
        yearsOfExp: 17,
        specialization: 'Mathematics'
    }]
 
var teachersMatched = objForRohit.getTeacherOfSameSpcl(teacherList);
console.log('Teacher Matching with the Specialization: ROHIT:::: ', teachersMatched);
 
// objForRohit.getEverythingAboutTeacher();
 
 
var teachersMatched1 = objForJohn.getTeacherOfSameSpcl(teacherList);
console.log('Teacher Matching with the Specialization: JOHN ', teachersMatched1);
 
 
 
