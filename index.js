// Write your solution in this file!
driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
};


function deleteFromDriverByKey(driver, key) {
  delete driver.key
};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function destructivelyDeleteFromDriverByKey(driver, key, value) {

};
