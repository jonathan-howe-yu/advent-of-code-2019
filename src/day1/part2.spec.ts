import {
  calculateFuelRequirementForFuel,
  calculateFuelForModule
} from "./part2";

function testMass(mass: number, initalFuel: number, totalFuel: number) {
  test(`find additional fuel for mass of ${mass}`, () => {
    expect(calculateFuelRequirementForFuel(initalFuel)).toBe(
      totalFuel - initalFuel
    );
  });

  test(`find total fuel for mass of ${mass}`, () => {
    expect(calculateFuelForModule(mass)).toBe(totalFuel);
  });
}

testMass(14, 2, 2);
testMass(1969, 654, 966);
testMass(100756, 33583, 50346);
