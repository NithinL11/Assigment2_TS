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

  test("returns 50 when both inputs are negative -10 and -5", () => {
    const result = calculateCanvasSize("-10", "-5");
    expect(result).toEqual(50);
  });

  test("returns Invalid input when first input is non-numeric (abc) and second input is 5", () => {
    expect(() => calculateCanvasSize("abc", "5")).toThrow("Invalid input");
  });
  test("returns Invalid input when second input is non-numeric (abc) and first input is 5", () => {
    expect(() => calculateCanvasSize("5", "abc")).toThrow("Invalid input");
  });
});
 
