const shoppingList = require("../modules/list");

test("should contain milk in shopping list", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
