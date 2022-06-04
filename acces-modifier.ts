class Student2 {
  public studCode: number;
  studName: string;
}

let stud = new Student2();
stud.studCode = 101;
stud.studName = "Joe Root";

console.log(stud.studCode + " " + stud.studName);

// for private access modifier
class Student3 {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}

let student: Student3 = new Student3(1, "JoeRoot");
console.log(student.display());
