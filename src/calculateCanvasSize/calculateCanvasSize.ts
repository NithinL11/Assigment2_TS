export default function calculateCanvasSize(
  length: string,
  width: string
) {
  // Convert inputs to integers
  const numLength = parseInt(length);
  const numWidth = parseInt(width);

  // Check if input is not a valid number (NaN)
  if (isNaN(numLength) || isNaN(numWidth)) {
    throw new Error("Invalid input");
  }

  // Check if either input is zero and throw an error
  if (numLength === 0 || numWidth === 0) {
    throw new Error("Invalid input");
  }

  return numLength * numWidth;
}

