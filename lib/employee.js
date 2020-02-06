"use strict";

class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;

    this.getName = function() {
      return this.name;
    };
    this.getId = function() {
      return this.id;
    };
    this.getEmail = function() {
      return this.email;
    };
    this.getRole = function() {
      return this.constructor.name;
    };
  }
}

module.exports = Employee;
