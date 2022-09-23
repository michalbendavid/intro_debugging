const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/solution3");
// Present all characters that
// their ancestry is half-blood
// and their gender is not male
// TIP: should be only 6 characters

const halfBloodNotMales = characters.filter((x) => 
   (x.ancestry === "half-blood" && x.gender !== "male") 
 
);

console.log(
  "Exercie 3 passed: ",
  JSON.stringify(halfBloodNotMales) === JSON.stringify(solution)
);
