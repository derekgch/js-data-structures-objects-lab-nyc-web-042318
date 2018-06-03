// Write your solution in this file!
driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
   
    newObj[key] = value;
   
    return newObj;
};
const kew = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');


function deleteFromDriverByKey() {

};

function updateDriverWithKeyAndValue() {

};

function destructivelyUpdateDriverWithKeyAndValue() {

};

function destructivelyDeleteFromDriverByKey() {

};
