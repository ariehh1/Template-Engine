"use strict";

const Intern = require("../lib/intern");

test("Can get the school", () => {
  const testValue = "SDSU";
  const intern = new Intern("", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test('getRole() must return "Intern"', () => {
  const testValue = "Intern";
  const intern = new Intern("", 1, "test@test.com", "UCLA");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school using getSchool()", () => {
  const testValue = "SDSU";
  const intern = new Intern("", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});
