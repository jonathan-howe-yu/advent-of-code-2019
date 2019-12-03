import { readFile } from "fs";
import { calculateFuelForRocket as calculateFuelForRocketPart1 } from "./part1";
import {
  calculateFuelForModule,
  calculateFuelForRocket as calculateFuelForRocketPart2
} from "./part2";

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

parseModuleMassFile(inputFile)
  .then(masses => {
    const moduleFuelReqPart1 = calculateFuelForRocketPart1(masses);
    console.log(`Part 1: ${moduleFuelReqPart1}`);

    const moduleFuelReqPart2 = calculateFuelForRocketPart2(masses);
    console.log(`Part 2: ${moduleFuelReqPart2}`);
  })
  .catch(err => console.error(err));
