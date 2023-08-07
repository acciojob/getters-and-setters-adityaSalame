//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	// set (name){
	// 	this._name=name;
	// }
	get name(){
		return this._name;
	}
	set age(age){
		this._age=age;
	}
	// get age(){
	// 	return this._age;
	// }
}

class Student extends Person {
	
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
//const person = new Person("Alice", 25);
const person = new Person("John", 25);
const student = new Student("John", 30);
student.study();

const student1 = new Student("Alice", 30);
student1.study();

const teacher=new Teacher("Ria",40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
