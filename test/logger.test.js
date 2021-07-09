const Logger = require("../src/logger");

test("Testing logger DEBUG", () => {
  Logger.debug("Hello World, this is a DEBUG log!");
});

test("Testing logger INFO", () => {
  Logger.info("Hello World, this is a INFO log!");
});

test("Testing logger WARN", () => {
  Logger.warn("Hello World, this is a WARN log!");
});

test("Testing logger ERROR", () => {
  Logger.error("Hello World, this is a ERROR log!");
});

test("Testing logger ERROR", () => {
  Logger.error(
    "Hello World, this is a ERROR log!",
    new Error("This is a test error!")
  );
});
