import { readFile } from "fs";

function getFuelForMass(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

function parseModuleMassFile(filename: string): Promise<number[]> {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data: string) => {
      if (err) reject(err);

      // data is line-break-separated list of numbers
      resolve(data.split("\n").map(e => +e));
    });
  });
}

const inputFile = process.argv.slice(2)[0];
if (!inputFile) {
  throw new Error("Invalid input filename given as args");
}

parseModuleMassFile(inputFile).then(masses => {
  console.log(masses.reduce((acc, cur) => acc + getFuelForMass(cur), 0));
});
