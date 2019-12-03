import { calculateFuelForRocket as calculateFuelForRocketPart1 } from "./part1";
import { calculateFuelForRocket as calculateFuelForRocketPart2 } from "./part2";
import { readArgFileAsNumbers } from "../common/commandArgAsInputFile";

readArgFileAsNumbers()
  .then(masses => {
    const moduleFuelReqPart1 = calculateFuelForRocketPart1(masses);
    console.log(`Part 1: ${moduleFuelReqPart1}`);

    const moduleFuelReqPart2 = calculateFuelForRocketPart2(masses);
    console.log(`Part 2: ${moduleFuelReqPart2}`);
  })
  .catch(err => console.error(err));
