"use strict";

const Engineer = require("../lib/engineer");

test("Can get GitHUb account", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("", 1, "test@test.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test('getRole() must return "Engineer"', () => {
  const testValue = "Engineer";
  const engineer = new Engineer("", 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username using getGithub()", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("", 1, "test@test.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});
