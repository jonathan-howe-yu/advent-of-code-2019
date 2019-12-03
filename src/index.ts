const inputFile = process.argv.slice(2)[0];
if (!inputFile) {
  throw new Error("Invalid input filename given as args");
}
