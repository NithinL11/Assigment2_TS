import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  test("returns Invalid input when first input is zero", () => {
    expect(() => calculateCanvasSize("0", "100")).toThrow("Invalid input");
  });
  test("returns Invalid input when second input is zero", () => {
    expect(() => calculateCanvasSize("50", "0")).toThrow("Invalid input");
  });
  test("returns -50 when first input is -10 and second input is 5", () => {
    const result = calculateCanvasSize("-10", "5");
    expect(result).toEqual(-50);
  });

  test.todo("To check when negative number is added to both number -10 and -5 it should return 50");
  test.todo("To check when non numeric input is given abc and 5 give error meassge as Invalid input");
  test.todo("To check when non numeric input is given 5 and abc give error meassge as Invalid input");
});
 
