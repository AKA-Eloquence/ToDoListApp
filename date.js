"use strict"

// declare and export getDate fuction
 exports.getDate = () => {
// new date object
const today = new Date;
// options for toLocaleDateString()
const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
}
// return date
return today.toLocaleDateString("en-US" , options);
}

// declare and export getDay fuction
exports.getDay = () => {
// new date object
const today = new Date;
// options for toLocaleDateString()
const options = {
    weekday: "long",
}
// return weekday
return today.toLocaleDateString("en-US" , options);
};