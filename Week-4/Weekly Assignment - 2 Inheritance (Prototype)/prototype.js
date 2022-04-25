var Person = function () {
};
var Teacher = function() {}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


Teacher.prototype.teach = function(subject) {
    this.subject = subject
    console.log(`${this.name} is now teaching ${this.subject}`);
}
var him = new Teacher();
Object.setPrototypeOf(Teacher.prototype, Person.prototype)
him.initialize("Adam", 56);
him.teach("inheritance");
