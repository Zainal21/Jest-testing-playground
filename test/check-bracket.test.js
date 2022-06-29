const checkBracket = require("../modules/checkbracket");

test("should number as in argument", () => {
  expect(checkBracket("asd")).toBe(true);
  expect(checkBracket("[[{asd}]]")).toBe(false);
});
