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

const args = process.argv.slice(2);
const inputFile = args[0];
const noun = +args[1] || 12;
const verb = +args[2] || 2;
if (!inputFile || typeof inputFile !== "string") {
  throw new Error("Invalid input filename given as args");
}
if (!noun || typeof noun !== "number") {
  throw new Error("Invalid noun given as args");
}
if (!verb || typeof verb !== "number") {
  throw new Error("Invalid verb given as args");
}

parseProgramFile(inputFile)
  .then(program => {
    fixProgram(program, noun, verb);
    runProgram(program);
    console.log(`Program data at pos 0: ${program[0]}`);
  })
  .catch(err => console.error(err));
