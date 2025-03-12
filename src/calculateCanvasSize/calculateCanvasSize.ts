export default function calculateCanvasSize(
  length: string,
  width: string
) {
  // Trim inputs to remove leading/trailing spaces
  const trimmedLength = length.trim();
  const trimmedWidth = width.trim();

  // Convert inputs to integers
  const numLength = parseInt(trimmedLength, 10);
  const numWidth = parseInt(trimmedWidth, 10);

  // Validate inputs: Check if they are not numbers (NaN)
  if (isNaN(numLength) || isNaN(numWidth)) {
    throw new Error("Invalid input");
  }

  // Check if either input is zero and throw an error
  if (numLength === 0 || numWidth === 0) {
    throw new Error("Invalid input");
  }

  return numLength * numWidth;
}

