import { readFile } from "fs";

export function readInputFileAsNumbers(
  filename: string,
  separator: string
): Promise<number[]> {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data: string) => {
      if (err) reject(err);

      // data is line-break-separated list of numbers
      resolve(data.split(separator).map(e => +e));
    });
  });
}

export function readFirstArgs(): string {
  if (
    !process.argv.slice(2)[0] ||
    typeof process.argv.slice(2)[0] !== "string"
  ) {
    throw new Error("Invalid input filename given as args");
  }

  return process.argv.slice(2)[0];
}

export async function readArgFileAsNumbers(
  separator: string = "\n"
): Promise<number[]> {
  const filename = readFirstArgs();
  return await readInputFileAsNumbers(filename, separator);
}
