import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {

  test("should return expected result for valid inputs", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test.todo("To check when area is zero, it should return Invalid input");
  test.todo("To check when coverage is zero, it should return Invalid input");
  test.todo("To check when area is negative, it should return Invalid input");
  test.todo("To check when coverage is negative, it should return Invalid input");
  test.todo("To check when both area and coverage are negative, it should return Invalid input");
  test.todo("To check when area is not a number, it should return Invalid input");
  test.todo("To check when coverage is not a number, it should return Invalid input");
  test.todo("To check when both area and coverage are not numbers, it should return Invalid input");
  test.todo("To check when area is null, it should return Invalid input");
  test.todo("To check when coverage is null, it should return Invalid input");
  test.todo("To check when both area and coverage are null, it should return Invalid input");
  test.todo("To check when area is undefined, it should return Invalid input");
  test.todo("To check when coverage is undefined, it should return Invalid input");
  test.todo("To check when both area and coverage are undefined, it should return Invalid input");
  test.todo("To check when area and coverage are floating-point numbers, it should return correct result");

});

