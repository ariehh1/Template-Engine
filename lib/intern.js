"use strict";

const Employee = require();

class Intern extends Employee {
  constructor(name, id, title, email, school) {
    super(name, id, title, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.getSchool = function() {
      return school;
    };
  }
}

module.exports = Intern;
