function Student(firstName, lastName, branch) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.branch = branch;
}

function Teacher(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

// greet function is used in both the functions
// separating the common function greet from it.
const greet = function (prefix, suffix) {
    console.log(prefix, this.firstName, this.lastName, suffix);
};

let student1 = new Student("Vasu", "Vallabh", "CS");
let teacher1 = new Teacher("Arfat", "Salman", "JS");

greet.call(student1, "Hi", "Call is commma separated");
greet.call(teacher1, "Mr.", "Call is comma serpareted");

greet.apply(student1, ["Hi", "Apply uses Array"]);
greet.apply(teacher1, ["Mr.", "Apply uses Array"]);

let fnStudent = greet.bind(student1);
let funTeacher = greet.bind(teacher1);

fnStudent("hi", "Aleady Binded, now sending params");
funTeacher("Mr", "Already Binded, now sending params");
