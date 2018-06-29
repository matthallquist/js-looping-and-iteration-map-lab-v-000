// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (instance) {return instance.toLowerCase();});
}

function nameToAttributes(array) {
  let newArray = []
  for (const name of array) {
    newArray.push(name.split(" "));
  }
  console.log(newArray);
}
