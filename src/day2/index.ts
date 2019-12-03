import { runProgram } from "./computer";
import { readArgFileAsNumbers } from "../common/commandArgAsInputFile";

function fixProgram(program: number[]): void {
  if (program.length < 3) throw new Error("Invalid program length");
  program[1] = 12;
  program[2] = 2;
}

readArgFileAsNumbers(",")
  .then(program => {
    fixProgram(program);
    runProgram(program);
    console.log(`Program data at pos 0: ${program[0]}`);
  })
  .catch(err => console.error(err));
