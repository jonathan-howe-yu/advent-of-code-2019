export function calculateFuelForMass(mass: number): number {
  return Math.max(Math.floor(mass / 3) - 2, 0);
}

export function calculateFuelForRocket(masses: number[]): number {
  return masses.reduce((acc, cur) => acc + calculateFuelForMass(cur), 0);
}
