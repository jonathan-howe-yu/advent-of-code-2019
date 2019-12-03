import { calculateFuelForMass } from "./part1";

function testMass(mass: number, fuel: number) {
  test(`find fuel for mass of ${mass}`, () => {
    expect(calculateFuelForMass(mass)).toBe(fuel);
  });
}

testMass(0, 0);
testMass(2, 0);
testMass(12, 2);
testMass(14, 2);
testMass(1969, 654);
testMass(100756, 33583);
