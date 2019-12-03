import { calculateFuelForRocket as calculateFuelForRocketPart1 } from "./part1";
import { calculateFuelForRocket as calculateFuelForRocketPart2 } from "./part2";

export default function solveDay1(masses: number[]) {
  const moduleFuelReqPart1 = calculateFuelForRocketPart1(masses);
  console.log(`Part 1: ${moduleFuelReqPart1}`);

  const moduleFuelReqPart2 = calculateFuelForRocketPart2(masses);
  console.log(`Part 2: ${moduleFuelReqPart2}`);
}
