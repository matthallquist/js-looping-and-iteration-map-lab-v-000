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
    let newObj = Object.assign({}, firstName: person[0], lastName: person[1]);
    objArray.push(newObj);
  }
  console.log(objArray);
}
