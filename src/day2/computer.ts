export function runProgram(program: number[]): void {
  let pos: number = 0;

  while (program[pos] !== 99) {
    const firstArgPos = program[pos + 1];
    const secondArgPos = program[pos + 2];
    const outPos = program[pos + 3];

    if (program[pos] === 1) {
      // add
      program[outPos] = program[firstArgPos] + program[secondArgPos];
    } else if (program[pos] === 2) {
      // multiply
      program[outPos] = program[firstArgPos] * program[secondArgPos];
    } else {
      throw new Error(`Invalid opcode ${program[pos]} at position ${pos}`);
    }

    pos = pos + 4;
  }
}
