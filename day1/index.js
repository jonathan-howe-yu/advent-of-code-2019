"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function getFuelForMass(mass) {
    return Math.floor(mass / 3) - 2;
}
function parseModuleMassFile(filename) {
    return new Promise(function (resolve, reject) {
        fs_1.readFile(filename, "utf8", function (err, data) {
            if (err)
                reject(err);
            // data is line-break-separated list of numbers
            resolve(data.split("\n").map(function (e) { return +e; }));
        });
    });
}
var inputFile = process.argv.slice(2)[0];
if (!inputFile) {
    throw new Error("Invalid input filename given as args");
}
parseModuleMassFile(inputFile).then(function (masses) {
    console.log(masses.reduce(function (acc, cur) { return acc + getFuelForMass(cur); }, 0));
});
