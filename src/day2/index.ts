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

function solveForPos0(program: number[], noun: number, verb: number): number {
  const programClone = [...program];
  fixProgram(programClone, noun, verb);
  runProgram(programClone);
  return programClone[0];
}

function findSpecificPos0(
  program: number[],
  pos0Value: number
): { noun: number; verb: number } {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (solveForPos0(program, noun, verb) === pos0Value) {
        return { noun, verb };
      }
    }
  }

  throw new Error("Unable to find pos0Value within noun and verb range");
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
    const part1Solution = solveForPos0(program, 12, 2);
    console.log(`Part 1 program data at pos 0: ${part1Solution}`);

    const { noun, verb } = findSpecificPos0(program, 19690720);
    console.log(
      `Part 2 solution: 100 * ${noun} + ${verb} = ${100 * noun + verb}`
    );
  })
  .catch(err => console.error(err));
