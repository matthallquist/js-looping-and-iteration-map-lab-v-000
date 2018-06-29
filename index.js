// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (instance) {return instance.toLowerCase();});
}

function nameToAttributes(array) {
  return array.map(function (instance) { Object.assign {firstName: instance.split(" ")[0], lastName: instance.split(" ")[1]} })
}
