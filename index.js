// Write your solution in this file!
driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
};


function deleteFromDriverByKey(driver, key) {
  const newObj = driver;
  delete newObj[key];
  return newObj;
};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver.key;
  return driver;
};
