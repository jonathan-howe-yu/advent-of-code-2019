import { runProgram } from "./computer";

function fixProgram(program: number[], noun: number, verb: number): void {
  if (program.length < 3) throw new Error("Invalid program length");
  program[1] = noun;
  program[2] = verb;
}

function solveForPos0(program: number[], noun: number, verb: number): number {
  const programClone = [...program];
  fixProgram(programClone, noun, verb);
  runProgram(programClone);
  return programClone[0];
}

function findSpecificPos0(program: number[], pos0Value: number): { noun: number; verb: number } {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (solveForPos0(program, noun, verb) === pos0Value) {
        return { noun, verb };
      }
    }
  }

  throw new Error("Unable to find pos0Value within noun and verb range");
}

export default function solveDay2(program: number[]) {
  const part1Solution = solveForPos0(program, 12, 2);
  console.log(`Part 1 program data at pos 0: ${part1Solution}`);

  const { noun, verb } = findSpecificPos0(program, 19690720);
  console.log(`Part 2 solution: 100 * ${noun} + ${verb} = ${100 * noun + verb}`);
}
