let date = new Date();
let year = date.toLocaleString("default", {year: "numeric"});
let month = date.toLocaleString("default", {month: "2-digit"});
let day = date.toLocaleString("default", {day: "2-digit"});
let Hour= date.toLocaleString("default", {hour: "numeric"});
let Min = date.toLocaleString("default", {minute: "2-digit"});
let format = "The Date and Time is: "+year+"-"+month+"-"+day+"   "+Hour+":"+Min;
console.log(format);
console.log("---------------------------------");
let date1 = new Date();
let year1 = date1.toLocaleString("default", {year: "numeric"});
let month1 = date1.toLocaleString("default", {month: "2-digit"});
let day1 = date1.toLocaleString("default", {day: "2-digit"});
let Hour1= date1.toLocaleString("default", {hour: "numeric"});
let Min1 = date1.toLocaleString("default", {minute: "2-digit"});
let format1 = "The Date and Time is: "+day1+"-"+month1+"-"+year1+"   "+Hour1+":"+Min1;
console.log(format1);
console.log("---------------------------------");
let format2 = "The Date and Time is: "+day1+"/"+month1+"/"+year1+"   "+Hour1+":"+Min1;
console.log(format2);