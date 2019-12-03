import readline from "readline";
import { promises } from "fs";
import solveDay1 from "./day1";
import solveDay2 from "./day2";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("close", () => {
  console.log("\nGood night!");
  process.exit(0);
});

(function askWhatDay() {
  rl.question(
    "What day do you want to see the solution for? [1-2] (Ctrl+C to close) ",
    response => {
      chooseDay(+response).then(
        () => {
          askWhatDay();
          console.log("");
        },
        err => {
          console.error(err);
          rl.close();
        }
      );
    }
  );
})();

async function chooseDay(day: number): Promise<void> {
  switch (day) {
    case 1: {
      const data = (await promises.readFile("./input/day1.txt", "utf8"))
        .split("\n")
        .map(e => +e);

      solveDay1(data);
      return;
    }

    case 2: {
      const data = (await promises.readFile("./input/day2.txt", "utf8"))
        .split(",")
        .map(e => +e);

      solveDay2(data);
      return;
    }
    default:
      console.log("Sorry, I can't do that...");
  }
}
