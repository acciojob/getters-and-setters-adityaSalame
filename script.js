//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	set name(name){
		this.name=name;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age=age;
	}
	get age(){
		return this.age;
	}
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
const person = new Person("Alice", 25);

const student = new Student("John", 30);
student.study();

const teacher=new Teacher("Ria",40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
