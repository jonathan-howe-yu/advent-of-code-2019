import readline from "readline";
import { readFile } from "fs";
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
  setTimeout(
    () =>
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
      ),
    0
  );
})();

function readFilePromise(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data: string) => {
      if (err) reject(err);

      // data is line-break-separated list of numbers
      resolve(data);
    });
  });
}

async function chooseDay(day: number): Promise<void> {
  switch (day) {
    case 1: {
      const data = (await readFilePromise("./input/day1.txt"))
        .split("\n")
        .map(e => +e);

      solveDay1(data);
      return;
    }

    case 2: {
      const data = (await readFilePromise("./input/day2.txt"))
        .split(",")
        .map(e => +e);

      solveDay2(data);
      return;
    }
    default:
      console.log("Sorry, I can't do that...");
  }
}
