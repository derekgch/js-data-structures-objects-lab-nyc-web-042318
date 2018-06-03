// Write your solution in this file!
driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
  delete  newObj[key];
  console.log(newObj);
  return newObj;
}

let newdriver = {name: "sam"};
let k = deleteFromDriverByKey(newdriver, "name");
console.log(k);

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
