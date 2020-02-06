"use strict";

const Employee = require();

class Manager extends Employee {
  constructor(name, id, title, email, officeNumber) {
    super(name, id, title, email);
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function() {
      return officeNumber;
    };
  }
}

module.exports = Manager;
