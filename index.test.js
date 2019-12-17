const thing = require(".");

expect(globalThis).not.toHaveProperty('window')

test("thing", () => {
  console.log(thing());
});
