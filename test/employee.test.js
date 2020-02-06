"use strict";

//what goes in require call-back?
// how to obtain package.json and package-lock.json
const Employee = require("../lib/employee");

describe("Employee", () => {
  test("can set name", () => {
    const name = "Bill";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("can set id value", () => {
    const testValue = 350;
    const employee = new Employee("", testValue);
    expect(employee.id).toBe(testValue);
  });

  test("can set email alias", () => {
    const testEmail = "test@test.com";
    const employee = new Employee("", 8, testEmail);
    expect(employee.email).toBe(testEmail);
  });

  test("can get name of getName()", () => {
    const testValue = "Stacey";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });

  test("can get id of getID()", () => {
    const testValue = 675;
    const employee = new Employee("", testValue);
    expect(employee.getID()).toBe(testValue);
  });

  test("can get email of getEmail()", () => {
    const testEmail = "test@test.com";
    const employee = new Employee("", 8, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });

  test("getRole() must return 'Employee'", () => {
    const testValue = "Employee";
    const employee = new Employee("Bill", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
  });
});
