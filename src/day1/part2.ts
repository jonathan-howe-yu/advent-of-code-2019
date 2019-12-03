import { calculateFuelForMass } from "./part1";

export function calculateFuelRequirementForFuel(initialFuel: number): number {
  let totalAdditionalFuel = calculateFuelForMass(initialFuel);
  let currentRecursiveFuelAmount = totalAdditionalFuel;

  while (currentRecursiveFuelAmount > 0) {
    const currentAdditionalFuel = calculateFuelForMass(
      currentRecursiveFuelAmount
    );

    totalAdditionalFuel = totalAdditionalFuel + currentAdditionalFuel;
    currentRecursiveFuelAmount = currentAdditionalFuel;
  }

  return totalAdditionalFuel;
}

export function calculateFuelForModule(mass: number): number {
  const fuel = calculateFuelForMass(mass);
  const additionalFuel = calculateFuelRequirementForFuel(fuel);
  return fuel + additionalFuel;
}

export function calculateFuelForRocket(masses: number[]): number {
  return masses.reduce((acc, cur) => acc + calculateFuelForModule(cur), 0);
}
