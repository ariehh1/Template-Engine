"use strict";

const Manager = require("../lib/manager");

describe("Manager", () => {
  test("Can set the office number", () => {
    const testValue = 425;
    const manager = new Manager("", 1, "test@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
  });

  test('getRole() must return "Manager"', () => {
    const testValue = "Manager";
    const manager = new Manager("", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe(testValue);
  });

  test("Can get office number using getOffice()", () => {
    const testValue = 425;
    const manager = new Manager("", 1, "test@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
  });
});
