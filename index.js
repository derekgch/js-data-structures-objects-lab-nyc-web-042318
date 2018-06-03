// Write your solution in this file!
driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value) {
  let obj = {};
  let newobj= Object.assign(driver, obj[key]=value);
  return newobj;
}

function deleteFromDriverByKey() {

}

function updateDriverWithKeyAndValue() {

}

function destructivelyUpdateDriverWithKeyAndValue() {

}

function destructivelyDeleteFromDriverByKey() {

}

let kew = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
