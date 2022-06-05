// : Typescript Type template

var person = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHello: function () {}, //Type template
};
person.sayHello = function () {
  console.log("hello " + person.firstName);
};
person.sayHello();

// Objects as function parameters

var person1 = {
  firstname: "Tom",
  lastname: "Hanks",
};
var invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name :" + obj.firstname);
  console.log("last name :" + obj.lastname);
};
invokeperson(person1);
