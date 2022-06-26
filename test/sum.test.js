const sumNumber = require("../modules/sum");
const shoppingList = require("../modules/list");

// write test here
test("should be 1 + 1 = 2", () => {
  expect(sumNumber(1, 1)).toBe(2); // result true
});

test("should be 2 + 2 = 4", () => {
  expect(sumNumber(2, 2)).toBe(4); // result true
  expect(sumNumber(2, 2)).toBeLessThan(5); // test if less (kurang dari)
});

test("should be 2 + 3 = 5", () => {
  expect(sumNumber(2, 2)).not.toBe(5); // result false
  expect(sumNumber(2, 2)).toEqual(4); // test if less (kurang dari)
});

test("should contain milk in shopping list", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
