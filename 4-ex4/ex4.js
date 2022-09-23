const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/solution4");
// format the data to create a new array
// in the new array, all object will be in this format:
// console.log(characters);
// // Iterate over the fields array, using each one to set the  key and value
// {
//     names: ["...", ...all alternative names],
//     type: [$species, $ancestry, $gender],
//     house: $house
// }
// */
// for example:
/*
{
    names: ['Lily Potter', 'Lily Luna Potter' ],
    type: ['human', 'half-blood', 'female'],
    house: 'Gryffindor'
}
*/
try {
  /* Write your code here: */
  const formattedCharacters = characters.map((character) => {
    return {
      names: [character.name, ...character.alternate_names],
      type: [character.species, character.ancestry, character.gender],
      house: character.house,
    };
  });

  console.log(
    "Exercie 4 passed: ",
    JSON.stringify(formattedCharacters) === JSON.stringify(solution)
  );

  /* Don't change anything from this line down */
} catch (e) {
  console.log("Exercie 4 passed: ", false);
  console.log("Error in exercise 4", e.message);
}
