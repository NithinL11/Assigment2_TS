export default function calculateCanvasSize(
  length: string,
  width: string
) {
  if (parseInt(length) === 0) {
    throw new Error("Invalid input");
  }

  return parseInt(length) * parseInt(width);
}

