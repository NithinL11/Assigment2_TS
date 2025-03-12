export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  // Validate input: Ensure area and coveragePerLiter are greater than zero
  if (area <= 0 || coveragePerLiter <= 0) {
    throw new Error("Invalid input");
  }

  return area / coveragePerLiter;
}
