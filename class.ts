//n object-oriented programming languages like Java, classes are the fundamental entities which are used to create reusable components.

class Student1 {
  studCode: number;
  studName: string;

  constructor(code: number, name: string) {
    this.studName = name;
    this.studCode = code;
  }

  getGrade(): string {
    return "A+";
  }
}

//&Creating an object or instance
let obj = new Student1(1234, "name");

// another example

//Defining a Student class.
class Student {
  //defining fields
  id: number;
  name1: string;

  //defining constructor
  constructor(id: number, name1: string) {
    this.id = id;
    this.name1 = name1;
  }

  //creating method or function
  display(): void {
    console.log("Function displays Student ID is: " + this.id);
    console.log("Function displays Student ID is: " + this.name1);
  }
}

//Creating an object or instance
let obj1 = new Student(101, "Virat Kohli");

//access the field

//access the method or function
obj1.display();
