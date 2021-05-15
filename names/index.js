const namesList = require("../country/state/city/index");
const namesArray = require("../utilities/utils/index");
const getPeopleInCity = (namesList) => {
  return namesArray(namesList);
};
module.exports = getPeopleInCity;
