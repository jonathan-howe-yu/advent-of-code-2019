import { runProgram } from "./computer";
import { readFile } from "fs";

function fixProgram(program: number[], noun: number, verb: number): void {
  if (program.length < 3) throw new Error("Invalid program length");
  program[1] = noun;
  program[2] = verb;
}

function parseProgramFile(filename: string): Promise<number[]> {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data: string) => {
      if (err) reject(err);

      // data is line-break-separated list of numbers
      resolve(data.split(",").map(e => +e));
    });
  });
}

const inputFile = process.argv.slice(2)[0];
if (!inputFile) {
  throw new Error("Invalid input filename given as args");
}

parseProgramFile(inputFile)
  .then(program => {
    fixProgram(program, 12, 2);
    runProgram(program);
    console.log(`Program data at pos 0: ${program[0]}`);
  })
  .catch(err => console.error(err));
