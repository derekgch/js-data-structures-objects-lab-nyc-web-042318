// Write your solution in this file!
driver = {
  name: 'Sam'
};



function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };

    newObj[key] = value;
    console.log(newObj);
    return newObj;
};
const kew = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
const aww = driver;
console.log(aww);
console.log(kew);
function deleteFromDriverByKey() {

};

function updateDriverWithKeyAndValue() {

};

function destructivelyUpdateDriverWithKeyAndValue() {

};

function destructivelyDeleteFromDriverByKey() {

};
