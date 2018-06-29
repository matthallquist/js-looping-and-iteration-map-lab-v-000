// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (instance) {return instance.toLowerCase();});
}

function nameToAttributes(array) {
  let newArray = []
  for (const name of array) {
    newArray.push(name.split(" "));
  }
  objArray = [];
  for (const person of newArray) {
    objArray.push(Object.assign({firstName: person[0], lastName: person[1]}););
  }
  console.log(objArray);
}
